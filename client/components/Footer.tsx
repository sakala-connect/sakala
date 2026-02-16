import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const Footer = () => {
  return (
    <footer className="relative z-10 pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-telugu font-bold mb-4">స-kala</h2>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Nurturing abilities, building confidence. A premium space where every individual is valued and supported through expert therapeutic interventions.
            </p>
            <div className="flex gap-4 mt-8">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <div className="flex flex-col gap-4">
              {["Home", "About", "Services", "Contact", "Privacy Policy"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Call Us</p>
                  <p className="text-muted-foreground">+91 78424 95577</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Visit Us</p>
                  <p className="text-muted-foreground">TNGO Colony Phase 2, Gachibowli, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border/20 flex flex-col md:row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} స-kala Therapy Center. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Floating CTA for Mobile */}
      <a
        href="tel:+917842495577"
        className="md:hidden fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl animate-bounce z-50"
      >
        <Phone size={24} />
      </a>
    </footer>
  );
};
