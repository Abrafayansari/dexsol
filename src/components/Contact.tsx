import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

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
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-radial from-brand-yellow/5 to-transparent translate-x-1/3 -translate-y-1/3 pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col items-start text-left pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
            <span>GET IN TOUCH</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark leading-[1.15] mb-6">
            Let's Start Something <span className="text-brand-cyan">Amazing</span> Together
          </h2>
          
          <p className="text-brand-text-light text-base leading-relaxed mb-10 max-w-md">
            Have a project in mind, need consultation, or want to build a conversion-focused platform? Drop us a line and our expert strategists will get back to you within 24 business hours.
          </p>

          <div className="flex flex-col gap-6 w-full">
            {/* Email Contact */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg-alt flex items-center justify-center shrink-0 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                <Mail size={20} className="stroke-[2]" />
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-text-muted mb-1">
                  Email Address
                </h4>
                <a
                  href="mailto:hello@dexsol.com"
                  className="text-base font-extrabold text-brand-dark hover:text-brand-cyan transition-colors"
                >
                  hello@dexsol.com
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
                  href="tel:+1234567890"
                  className="text-base font-extrabold text-brand-dark hover:text-brand-cyan transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg-alt flex items-center justify-center shrink-0 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                <MapPin size={20} className="stroke-[2]" />
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-text-muted mb-1">
                  Our Office
                </h4>
                <p className="text-base font-extrabold text-brand-dark leading-snug">
                  123 Innovation Street, Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-xl border border-gray-100/60">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-dark mb-2">
              Send us a message
            </h3>
            <p className="text-brand-text-light text-sm md:text-base leading-relaxed mb-8">
              Fill out the form below and we'll analyze your goals and custom-build your response.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex flex-col items-center text-center animate-fade-in">
                <CheckCircle2 size={48} className="text-brand-green mb-4 fill-brand-green/10" />
                <h4 className="text-lg font-bold text-brand-dark mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-brand-text-light text-sm leading-relaxed max-w-sm">
                  Thank you for contacting <strong className="text-brand-green">Dexsol</strong>! Our digital strategists have received your details and are preparing a custom project brief for you. We will reach out shortly.
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
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-200 bg-brand-bg rounded-xl font-medium text-sm text-brand-dark outline-none focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10 transition-all duration-300 cursor-pointer appearance-none"
                  >
                    <option value="Select a service">Select a service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="UI-UX Design">UI-UX Design</option>
                    <option value="Shopify Development">Shopify Development</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project or business objectives..."
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
                      <span>Send Message</span>
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
