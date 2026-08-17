# Terraform configuration generated from Resource Plan
# Environment: dev
# Generated from deterministic resource plan (Phase 2)

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
    random = {
      source  = "hashicorp/random"
      version = ">= 3.5.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "terraform-state-rg"
    storage_account_name = "tfstate5be31bc8"
    container_name       = "tfstate-system"
    key                  = "apps/Test-04-dev/dev.tfstate"
    subscription_id      = "d6c69b8a-1b49-482e-80c0-95ccb98fd3c6"
  }
}

provider "azurerm" {
  subscription_id = var.subscription_id
  features {
    resource_group {
      prevent_deletion_if_contains_resources = false
    }
  }
}

# Merge var.environment into tags so every resource carries the environment label.
# This ensures var.environment is consumed and not dead code.
locals {
  common_tags = merge(var.tags, { environment = var.environment })
}

# ========================================
# Phase: 1 Foundation
# ========================================

# Module: main_rg (azurerm_resource_group)
module "main_rg" {
  source = "./modules/azure-resource-group"

  location = var.location
  name     = "Test-04-dev-rg"
  tags     = local.common_tags
}

# Shared Data Lookup: log_analytics (azurerm_log_analytics_workspace)
data "azurerm_log_analytics_workspace" "shared" {
  name                = "test-01-dev-infrastructure"
  resource_group_name = "platform-shared-rg"
}

# ========================================
# Phase: 2 Shared Infrastructure
# ========================================

# Resource: app_nextjs_service (azurerm_container_app_environment)
resource "azurerm_container_app_environment" "app_frontend_web_app" {
  name                       = "myorg-test-04-dev-shared-dev-centralus-env"
  location                   = var.location
  resource_group_name        = module.main_rg.name
  log_analytics_workspace_id = data.azurerm_log_analytics_workspace.shared.id
  tags                       = local.common_tags
}

# Module: container_registry (azurerm_container_registry)
module "container_registry" {
  source = "./modules/azure-container-registry"

  admin_enabled       = true
  location            = var.location
  name                = "test04devinfrastructureb129e8"
  resource_group_name = module.main_rg.name
  sku                 = "Basic"
  tags                = local.common_tags
}

# Shared Data Lookup: tfstate_storage (azurerm_storage_account)
data "azurerm_storage_account" "shared" {
  name                = "tfstate5be31bc8"
  resource_group_name = "terraform-state-rg"
}

# Module: shared_plan (azurerm_service_plan)
module "shared_plan" {
  source = "./modules/azure-app-service-plan"

  kind                = "Linux"
  location            = var.location
  name                = "Test-04-dev-plan"
  resource_group_name = module.main_rg.name
  sku = {
    tier     = "Basic"
    size     = "B1"
    capacity = 1
  }
  tags = local.common_tags
}

# ========================================
# Phase: 3 Data
# ========================================

# Module: mongodb_database_cosmos (azurerm_cosmosdb_account)
module "mongodb_database_cosmos" {
  source = "./modules/azure-cosmosdb-account"

  consistency_policy              = var.consistency_policy
  enable_automatic_failover       = true
  enable_multiple_write_locations = false
  geo_location                    = var.geo_location
  kind                            = "GlobalDocumentDB"
  location                        = var.location
  name                            = "test-04-dev-cosmos"
  offer_type                      = "Standard"
  resource_group_name             = module.main_rg.name
  tags                            = local.common_tags
}

# ========================================
# Phase: 4 Compute
# ========================================

# Module: nextjs_service_app (azurerm_container_app)
module "nextjs_service_app" {
  source = "./modules/azure-container-app"

  container_app_environment_id = azurerm_container_app_environment.app_frontend_web_app.id
  containers                   = [{ "name" : "nextjs-service", "image" : "${var.nextjs_service_image}", "cpu" : 0.25, "memory" : "0.5Gi", "env" : [] }]
  environment_variables = {
    COSMOS_CONNECTION_STRING = module.mongodb_database_cosmos.connection_strings[0]
    MONGODB_URI              = module.mongodb_database_cosmos.connection_strings[0]
  }
  ingress = {
    external_enabled = true
    target_port      = 8080
    transport        = "http"
  }
  location            = var.location
  name                = "test-04-dev-nextjs-service"
  resource_group_name = module.main_rg.name
  revision_mode       = "Single"
  tags                = local.common_tags
}

# Module: nginx_gateway_app (azurerm_linux_web_app)
module "nginx_gateway_app" {
  source = "./modules/azure-linux-web-app"

  app_settings = {
    COSMOS_CONNECTION_STRING = module.mongodb_database_cosmos.connection_strings[0]
    MONGODB_URI              = module.mongodb_database_cosmos.connection_strings[0]
  }
  enable_system_identity = true
  https_only             = true
  location               = var.location
  name                   = "test-04-dev-backend-c1b4d7"
  resource_group_name    = module.main_rg.name
  runtime_stack = {
    language = "node"
    version  = var.nginx_gateway_node_version
  }
  service_plan_id = module.shared_plan.id
  tags            = local.common_tags
}
