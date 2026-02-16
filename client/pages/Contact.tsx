import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
          >
            <GlassCard className="max-w-md w-full p-12 text-center bg-white dark:bg-black border-2 border-primary">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
              <p className="text-muted-foreground mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold w-full"
              >
                Close
              </button>
            </GlassCard>
            {/* Simple CSS Confetti */}
            <div className="absolute inset-0 pointer-events-none">
               {[...Array(20)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ top: "50%", left: "50%", opacity: 1 }}
                   animate={{
                     top: `${Math.random() * 100}%`,
                     left: `${Math.random() * 100}%`,
                     opacity: 0,
                     rotate: 360
                   }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="absolute w-3 h-3 rounded-sm"
                   style={{ backgroundColor: ["#D7BDE2", "#AED6F1", "#FFFACD"][i % 3] }}
                 />
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 px-6 text-center">
        <h1 className="text-6xl font-bold mb-8">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions or ready to book your first session? We're here to help you on your journey.
        </p>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
            
            <GlassCard className="flex gap-6 p-8">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground text-lg">+91 78424 95577</p>
                <p className="text-sm text-primary font-semibold mt-1">Mon-Sat, 10AM - 7PM</p>
              </div>
            </GlassCard>

            <GlassCard className="flex gap-6 p-8">
              <div className="w-14 h-14 bg-secondary/30 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-muted-foreground text-lg">TNGO Colony Phase 2, Gachibowli, Hyderabad, Telangana</p>
              </div>
            </GlassCard>

            <GlassCard className="flex gap-6 p-8">
              <div className="w-14 h-14 bg-accent/40 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                <p className="text-muted-foreground text-lg">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p className="text-muted-foreground text-lg text-destructive font-bold mt-1">Sunday: Closed</p>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <GlassCard className="p-10 border-none bg-white/50 dark:bg-black/20">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full glass bg-white/40 dark:bg-black/20 rounded-xl px-4 py-3 outline-none border-transparent focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full glass bg-white/40 dark:bg-black/20 rounded-xl px-4 py-3 outline-none border-transparent focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full glass bg-white/40 dark:bg-black/20 rounded-xl px-4 py-3 outline-none border-transparent focus:border-primary transition-all resize-none"
                ></textarea>
              </div>
              <button 
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20"
              >
                <Send size={20} />
                Submit Inquiry
              </button>
            </form>
          </GlassCard>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <GlassCard className="h-[450px] w-full p-0 overflow-hidden relative">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.273673754228!2d78.3364951759413!3d17.446549983451076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a388969717%3A0x6a0a09e072b6408d!2sTNGO%20Colony%20Phase%202%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
           ></iframe>
        </GlassCard>
      </section>
    </div>
  );
};

export default Contact;
