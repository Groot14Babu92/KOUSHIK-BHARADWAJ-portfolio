import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Send, CheckCircle2, AlertCircle, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success'>('idle');
  const [linkedInNotice, setLinkedInNotice] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest handling: Format email and trigger visitor's mail client
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmittedStatus('success');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#202234] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5F64] font-mono">
            LET'S CONNECT
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F7] tracking-tight">
            Have an Interesting Opportunity?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B9BBC9] leading-relaxed">
            I'm always interested in connecting with professionals working across engineering, semiconductor technology, program management, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details & Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-2xl bg-[#24273B] border border-[#704950]/50 shadow-xl space-y-6">
              <h3 className="text-xl font-bold font-heading text-[#F5F5F7]">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 group p-3 rounded-xl bg-[#171923]/60 hover:bg-[#171923] border border-transparent hover:border-[#383C56] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#24273B] border border-[#383C56] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#FF5F64]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#B9BBC9] uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-[#F5F5F7] group-hover:text-[#FF8585] transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-4 group p-3 rounded-xl bg-[#171923]/60 hover:bg-[#171923] border border-transparent hover:border-[#383C56] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#24273B] border border-[#383C56] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FF5F64]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#B9BBC9] uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <span className="text-sm font-semibold text-[#F5F5F7] group-hover:text-[#FF8585] transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-[#171923]/60 border border-transparent">
                  <div className="w-10 h-10 rounded-lg bg-[#24273B] border border-[#383C56] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF5F64]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#B9BBC9] uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-[#F5F5F7]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Functional Quick Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Inquiry`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF5F64] hover:bg-[#FF8585] rounded-xl transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <button
                  type="button"
                  onClick={() => setLinkedInNotice(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] bg-[#171923] hover:bg-[#202234] border border-[#383C56] rounded-xl transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#FF5F64]" />
                  <span>LinkedIn</span>
                </button>
              </div>

              {linkedInNotice && (
                <div className="p-3 rounded-xl bg-[#171923] border border-[#FF5F64]/40 text-xs text-[#B9BBC9] flex items-start justify-between gap-2 animate-in fade-in">
                  <div>
                    <span className="text-[#F5F5F7] font-semibold block mb-0.5">LinkedIn Profile:</span>
                    <span>Direct LinkedIn link will be added here once the URL is configured. Feel free to connect via email in the meantime.</span>
                  </div>
                  <button
                    onClick={() => setLinkedInNotice(false)}
                    className="text-[#B9BBC9] hover:text-[#F5F5F7] p-1"
                  >
                    ✕
                  </button>
                </div>
              )}

              <a
                href={PERSONAL_INFO.cvPdfPath}
                download="Koushik_Bharadwaj_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#B9BBC9] hover:text-[#F5F5F7] bg-transparent hover:bg-[#171923] border border-[#383C56] rounded-xl transition-colors"
              >
                <Download className="w-4 h-4 text-[#FF5F64]" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#24273B] border border-[#704950]/50 shadow-xl">
              <h3 className="text-xl font-bold font-heading text-[#F5F5F7] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#B9BBC9] mb-6">
                Fill out the details below. This generates a direct email inquiry with all parameters prepared.
              </p>

              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-600/50 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-300">
                      Message Prepared in Your Email Client
                    </p>
                    <p className="mt-1 text-emerald-200/90 text-xs">
                      Your default mail client has opened with this draft addressed to {PERSONAL_INFO.email}. You can also write directly anytime!
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9BBC9] mb-1.5">
                      Your Name <span className="text-[#FF5F64]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171923] border border-[#383C56] text-sm text-[#F5F5F7] placeholder-[#B9BBC9]/40 focus:outline-none focus:border-[#FF5F64] transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-[#FF8585] mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9BBC9] mb-1.5">
                      Your Email <span className="text-[#FF5F64]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171923] border border-[#383C56] text-sm text-[#F5F5F7] placeholder-[#B9BBC9]/40 focus:outline-none focus:border-[#FF5F64] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-[#FF8585] mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B9BBC9] mb-1.5">
                    Subject <span className="text-[#FF5F64]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="Project Inquiry / Program Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#171923] border border-[#383C56] text-sm text-[#F5F5F7] placeholder-[#B9BBC9]/40 focus:outline-none focus:border-[#FF5F64] transition-colors"
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-[#FF8585] mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B9BBC9] mb-1.5">
                    Message <span className="text-[#FF5F64]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Hello Koushik, I would like to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#171923] border border-[#383C56] text-sm text-[#F5F5F7] placeholder-[#B9BBC9]/40 focus:outline-none focus:border-[#FF5F64] transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-[#FF8585] mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#FF5F64] hover:bg-[#FF8585] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-center text-[#B9BBC9]/70 pt-1">
                  Direct communication is prioritized. No spam or automated mailings.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
