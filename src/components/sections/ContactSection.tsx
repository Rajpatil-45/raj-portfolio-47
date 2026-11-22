import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { LinkedinIcon } from "../icons/SocialIcons";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00d2ff] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff6b00]">ME</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Available for internships, full-time opportunities, collaborative research, and project inquiries.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d2ff] to-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b0f1a]/85 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-6">
                Get In Touch Directly
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00d2ff]/40 hover:bg-white/10 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00d2ff]/15 text-[#00d2ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-mono text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#00d2ff] transition-colors truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#ff6b00]/40 hover:bg-white/10 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ff6b00]/15 text-[#ff6b00] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#ff6b00] transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00d2ff]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social / Profiles */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                  Online Profiles & Repos
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0077b5]/20 border border-[#0077b5]/40 text-white font-medium text-xs hover:bg-[#0077b5]/30 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#00d2ff]" />
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.existingPortfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:border-[#ff6b00]/40 transition-all"
                  >
                    <Globe className="w-4 h-4 text-[#ff6b00]" />
                    <span>Existing Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b0f1a]/85 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl">
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill in the form below to initiate direct communication with Raj Patil.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-center animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#00d2ff] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Raj will review your message and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff6b00] to-[#00d2ff] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
