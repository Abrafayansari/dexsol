import { useState, FormEvent } from "react";
import { Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Select a service",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message.");
      }

      setFormSubmitted(true);
      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "Select a service",
        message: "",
      });
      // Reset submission notification after 6 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Something went wrong. Please try again later or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-radial from-brand-yellow/5 to-transparent translate-x-1/3 -translate-y-1/3 pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start relative z-10">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col items-start text-left pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
            <span>START YOUR GROWTH JOURNEY</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark leading-[1.15] mb-6">
            Ready to <span className="text-brand-cyan">grow</span> your business?
          </h2>
          
          <p className="text-brand-text-light text-base leading-relaxed mb-10 max-w-md">
            Tell us what you want to improve, build, or scale. We will look at your goals first and recommend the right digital mix for your business.
          </p>

          <div className="flex flex-col gap-6 w-full">
            {/* Email Contact */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg-alt flex items-center justify-center shrink-0 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                <Mail size={20} className="stroke-[2]" />
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-text-muted mb-1">
                  Gmail
                </h4>
                <a
                  href="mailto:dexsol@gmail.com"
                  className="text-base font-extrabold text-brand-dark hover:text-brand-cyan transition-colors"
                >
                  dexsol@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg-alt flex items-center justify-center shrink-0 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                <Phone size={20} className="stroke-[2]" />
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-text-muted mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+923113645560"
                  className="text-base font-extrabold text-brand-dark hover:text-brand-cyan transition-colors"
                >
                  +923113645560
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white rounded-[36px] p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100/60">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-dark mb-2">
              Tell us what growth looks like for you
            </h3>
            <p className="text-brand-text-light text-sm md:text-base leading-relaxed mb-8">
              Share your goals, current challenges, and timeline. We will review the opportunity and come back with a clear next step.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex flex-col items-center text-center animate-fade-in">
                <CheckCircle2 size={48} className="text-brand-green mb-4 fill-brand-green/10" />
                <h4 className="text-lg font-bold text-brand-dark mb-2">
                  Message received.
                </h4>
                <p className="text-brand-text-light text-sm leading-relaxed max-w-sm">
                  Thanks for reaching out to <strong className="text-brand-green">Dexsol</strong>. We have your details and will reply with a thoughtful next step soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-5 py-4 border border-gray-200 bg-brand-bg rounded-xl font-medium text-sm text-brand-dark outline-none focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-5 py-4 border border-gray-200 bg-brand-bg rounded-xl font-medium text-sm text-brand-dark outline-none focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-200 bg-brand-bg rounded-xl font-medium text-sm text-brand-dark outline-none focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10 transition-all duration-300"
                  />
                </div>

                {/* Service Interest dropdown */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    What do you need help with?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-200 bg-brand-bg rounded-xl font-medium text-sm text-brand-dark outline-none focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10 transition-all duration-300 cursor-pointer appearance-none"
                  >
                    <option value="Select a service">Select an area</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Shopify Development">Shopify Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Video Editing">Video Editing</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Tell us about the business
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What are you trying to improve, launch, or grow?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-200 bg-brand-bg rounded-xl font-medium text-sm text-brand-dark outline-none focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10 transition-all duration-300 resize-y min-h-[120px]"
                  />
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="text-red-500 text-sm font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 bg-brand-dark hover:bg-brand-cyan text-white font-bold rounded-xl text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-102 hover:shadow-lg cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Start the Conversation</span>
                      <Send size={16} />
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
