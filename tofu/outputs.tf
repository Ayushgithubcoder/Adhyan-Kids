# Outputs for Terraform configuration

# Generated deterministically using Module Registry

output "main_rg_id" {
  description = "The ID of the Resource Group"
  value       = module.main_rg.id
}

output "main_rg_name" {
  description = "The name of the Resource Group"
  value       = module.main_rg.name
}

output "main_rg_location" {
  description = "The location of the Resource Group"
  value       = module.main_rg.location
}

output "container_registry_id" {
  description = "The ID of the Container Registry"
  value       = module.container_registry.id
}

output "container_registry_name" {
  description = "The name of the Container Registry"
  value       = module.container_registry.name
}

output "container_registry_login_server" {
  description = "The login server URL of the Container Registry"
  value       = module.container_registry.login_server
}

output "container_registry_admin_username" {
  description = "The admin username (if admin_enabled is true)"
  value       = module.container_registry.admin_username
}

output "container_registry_admin_password" {
  description = "The admin password (if admin_enabled is true)"
  sensitive   = true
  value       = module.container_registry.admin_password
}

output "shared_plan_id" {
  description = "The ID of the App Service Plan"
  value       = module.shared_plan.id
}

output "shared_plan_name" {
  description = "The name of the App Service Plan"
  value       = module.shared_plan.name
}

output "mongodb_database_cosmos_id" {
  description = "The ID of the Cosmos DB Account"
  value       = module.mongodb_database_cosmos.id
}

output "mongodb_database_cosmos_name" {
  description = "The name of the Cosmos DB Account"
  value       = module.mongodb_database_cosmos.name
}

output "mongodb_database_cosmos_endpoint" {
  description = "The endpoint of the Cosmos DB Account"
  value       = module.mongodb_database_cosmos.endpoint
}

output "mongodb_database_cosmos_primary_key" {
  description = "The primary key for the Cosmos DB Account"
  sensitive   = true
  value       = module.mongodb_database_cosmos.primary_key
}

output "mongodb_database_cosmos_primary_readonly_key" {
  description = "The primary readonly key for the Cosmos DB Account"
  sensitive   = true
  value       = module.mongodb_database_cosmos.primary_readonly_key
}

output "mongodb_database_cosmos_connection_strings" {
  description = "A list of connection strings for the Cosmos DB Account, programmatically constructed to avoid deprecation issues"
  sensitive   = true
  value       = module.mongodb_database_cosmos.connection_strings
}

output "nextjs_service_app_id" {
  description = "The ID of the Container App"
  value       = module.nextjs_service_app.id
}

output "nextjs_service_app_name" {
  description = "The name of the Container App"
  value       = module.nextjs_service_app.name
}

output "nextjs_service_app_latest_revision_fqdn" {
  description = "The FQDN of the latest revision"
  value       = module.nextjs_service_app.latest_revision_fqdn
}

output "nginx_gateway_app_id" {
  description = "The ID of the Linux Web App"
  value       = module.nginx_gateway_app.id
}

output "nginx_gateway_app_default_hostname" {
  description = "The default hostname of the Linux Web App"
  value       = module.nginx_gateway_app.default_hostname
}

output "nginx_gateway_app_identity_principal_id" {
  description = "The principal ID of the system-assigned identity"
  value       = module.nginx_gateway_app.identity_principal_id
}

output "nginx_gateway_app_name" {
  description = "The name of the Linux Web App"
  value       = module.nginx_gateway_app.name
}
