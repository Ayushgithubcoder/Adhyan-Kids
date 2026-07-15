"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    program: "Playgroup",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const programsList = ["Playgroup", "Nursery", "Junior KG / LKG", "Senior KG / UKG", "Day Care"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit. Please try again.");
      }

      // Success
      setStatus("success");
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FFCB05", "#FF7B00", "#00B4D8", "#06D6A0", "#FF5E7E"],
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <section id="admissions" className="py-20 bg-slate-50 dark:bg-[#25180E] relative overflow-hidden transition-colors duration-300">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-brand-yellow/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1A1108] rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-[#2C1F14]/80 grid grid-cols-1 md:grid-cols-12">
          {/* Left panel: Info */}
          <div className="bg-brand-purple p-8 md:p-12 md:col-span-5 text-white flex flex-col justify-between">
            <div>
              <span className="bg-white/20 text-white font-display text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Admission Info
              </span>
              <h3 className="font-display text-3xl font-bold mt-4 mb-6">
                Start Your Child's Journey Today
              </h3>
              <p className="text-purple-100 text-sm leading-relaxed mb-6">
                Enrollment is quick and easy. Submit this inquiry form, and our admissions advisor will contact you within 24 hours to schedule a campus visit.
              </p>
            </div>
            
            <div className="space-y-4 border-t border-purple-400/30 pt-6">
              <div>
                <p className="text-xs text-purple-200 uppercase font-bold tracking-wider">Address:</p>
                <p className="text-sm font-semibold">Modipuram, Meerut, UP - 250110</p>
              </div>
              <div>
                <p className="text-xs text-purple-200 uppercase font-bold tracking-wider">Phone Helpline:</p>
                <p className="text-sm font-semibold">+91 95367 17172</p>
              </div>
              <div>
                <p className="text-xs text-purple-200 uppercase font-bold tracking-wider">Timings:</p>
                <p className="text-sm font-semibold">Mon - Sat: 8:30 AM - 1:30 PM</p>
              </div>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="p-8 md:p-12 md:col-span-7">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-12">
                <CheckCircle2 className="w-16 h-16 text-brand-teal mb-4 animate-bounce" />
                <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-[#FFF5EB] mb-2">
                  Thank You, Parents!
                </h3>
                <p className="text-slate-600 dark:text-[#E8D4C4] text-sm mb-6 max-w-sm">
                  We have received your inquiry for <strong>{formData.childName}</strong>. Our counselors will call you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      parentName: "",
                      phone: "",
                      email: "",
                      childName: "",
                      childAge: "",
                      program: "Playgroup",
                      message: "",
                    });
                  }}
                  className="bg-brand-purple text-white font-display font-semibold px-6 py-2.5 rounded-full hover:bg-brand-purple/90 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h4 className="font-display text-2xl font-bold text-slate-800 dark:text-[#FFF5EB] mb-1">
                    Admissions Inquiry
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    Please fill out the form below to get in touch.
                  </p>
                </div>

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2.5 text-red-600 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                      Parent's Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Ayush Kumar"
                      className="w-full bg-slate-50 dark:bg-[#25180E] border border-slate-200 dark:border-[#2C1F14] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple dark:text-[#FFF5EB]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full bg-slate-50 dark:bg-[#25180E] border border-slate-200 dark:border-[#2C1F14] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple dark:text-[#FFF5EB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                      value={formData.childName}
                      onChange={handleChange}
                      placeholder="Child's full name"
                      className="w-full bg-slate-50 dark:bg-[#25180E] border border-slate-200 dark:border-[#2C1F14] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple dark:text-[#FFF5EB]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                      Child's Age (Years) *
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      name="childAge"
                      required
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder="e.g. 3"
                      className="w-full bg-slate-50 dark:bg-[#25180E] border border-slate-200 dark:border-[#2C1F14] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple dark:text-[#FFF5EB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                      Desired Program
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-[#25180E] border border-slate-200 dark:border-[#2C1F14] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple dark:text-[#FFF5EB]"
                    >
                      {programsList.map((prog) => (
                        <option key={prog} value={prog} className="dark:bg-[#1A1108]">
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@gmail.com"
                      className="w-full bg-slate-50 dark:bg-[#25180E] border border-slate-200 dark:border-[#2C1F14] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple dark:text-[#FFF5EB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                    Message / Special Requests
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your child or list any questions you have..."
                    className="w-full bg-slate-50 dark:bg-[#25180E] border border-slate-200 dark:border-[#2C1F14] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple dark:text-[#FFF5EB] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-brand-orange text-white font-display font-bold py-3.5 rounded-xl hover:bg-brand-orange/95 transition-all shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Admissions Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
