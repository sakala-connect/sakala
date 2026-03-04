import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, ExternalLink, ChevronDown } from "lucide-react";

const services = [
  "Speech/Language Therapy",
  "Behavioural Therapy",
  "Occupational Therapy",
  "Special Education",
  "Social Skills Training",
  "Psychoeducational Assessment",
  "Psychological Assessment",
  "Psychotherapy",
  "Counselling",
  "Other"
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const service = selectedService === "Other" ? otherService : selectedService;

    const whatsappNumber = "917842495577";
    const text = `Hello స-kala Team!%0A%0A*New Inquiry*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Static Map link for TNGO Colony Phase 2
  const mapUrl = "https://www.google.com/maps/place/TNGO's+Colony+Phase+2,+Gachibowli,+Hyderabad,+Telangana+500032";

  return (
    <div className="pt-32">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
          >
            <div className="max-w-md w-full p-12 text-center bg-white dark:bg-black rounded-[2rem] border-2 border-primary shadow-2xl">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Inquiry Initiated!</h2>
              <p className="text-muted-foreground mb-8">Your message has been prepared for WhatsApp. We will get back to you shortly!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold w-full"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-5 px-6 text-center">
        <h1 className="text-6xl font-bold mb-8 italic">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Have questions or ready to book your first session? We're here to help you on your journey.
        </p>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
            
            <GlassCard className="flex gap-6 p-8 group hover:border-primary transition-all duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground text-lg">+91 78424 95577</p>
                <p className="text-sm text-primary font-bold mt-1 uppercase tracking-wider">Mon-Sat, 10AM - 7PM</p>
              </div>
            </GlassCard>

            <GlassCard className="flex gap-6 p-8 group hover:border-secondary transition-all duration-300">
              <div className="w-14 h-14 bg-secondary/30 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">TNGO Colony Phase 2, Gachibowli, Hyderabad, Telangana</p>
              </div>
            </GlassCard>

            <GlassCard className="flex gap-6 p-8 group hover:border-accent transition-all duration-300">
              <div className="w-14 h-14 bg-accent/40 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                <p className="text-muted-foreground text-lg">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p className="text-destructive font-bold mt-1 italic">Sunday: Closed</p>
              </div>
            </GlassCard>
          </div>

          {/* Form Container - Static and Clean (No Hover Lift/Blur) */}
          <div className="p-10 bg-white/70 dark:bg-black/40 rounded-[2.5rem] border border-white/20 shadow-2xl backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                  <input name="name" required type="text" placeholder="Your Name" className="w-full bg-white/50 rounded-xl px-4 py-3 outline-none border-2 border-transparent focus:border-primary transition-all shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone</label>
                  <input name="phone" required type="tel" placeholder="Phone Number" className="w-full bg-white/50 rounded-xl px-4 py-3 outline-none border-2 border-transparent focus:border-primary transition-all shadow-sm" />
                </div>
              </div>

              {/* Modern Dropdown Design */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Type of Service</label>
                <div className="relative group">
                  <select 
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white/50 rounded-xl px-4 py-3 outline-none border-2 border-transparent focus:border-primary transition-all appearance-none cursor-pointer font-medium text-foreground/80 pr-10 shadow-sm"
                  >
                    <option value="" disabled>Choose a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground group-focus-within:text-primary">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {selectedService === "Other" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-bold uppercase tracking-wider text-primary">Specify your requirement</label>
                    <input 
                      required
                      type="text" 
                      value={otherService}
                      onChange={(e) => setOtherService(e.target.value)}
                      placeholder="Please describe..."
                      className="w-full bg-white/80 rounded-xl px-4 py-3 outline-none border-2 border-primary/30 focus:border-primary transition-all shadow-sm" 
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" required rows={4} placeholder="Tell us how we can help..." className="w-full bg-white/50 rounded-xl px-4 py-3 outline-none border-2 border-transparent focus:border-primary transition-all resize-none shadow-sm"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20">
                <Send size={20} />
                Submit to WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section - Full Color & Responsive */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold">Find us on the Map</h2>
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-fit bg-primary/10 hover:bg-primary/20 text-primary px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all border border-primary/20"
          >
            Get Directions <ExternalLink size={18} />
          </a>
        </div>
        
        <div className="h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4610931640686!2d78.3349204!3d17.4376314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9384c165c0d1%3A0x89ee95f67d7177c2!2sTranquil%20Autumn%20Treats!5e0!3m2!1sen!2sin!4v1772387288769!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full"
  ></iframe>
</div>
      </section>
    </div>
  );
};

export default Contact;