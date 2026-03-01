import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    // Background brand Purple (#c95994)
    <footer className="relative z-10 pt-24 pb-12 px-6 overflow-hidden bg-[#c95994] text-white">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e94894]/20 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            
            {/* CIRCULAR LOGO CONTAINER */}
            <div className="mb-6 bg-white inline-block p-1 rounded-full shadow-xl border border-white/20">
              <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img 
                  src="/logo.jpeg" 
                  alt="స-kala Logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            <p className="text-lg text-white/80 max-w-md leading-relaxed font-medium">
              Nurturing abilities, building confidence. A premium space where every individual is valued and supported through expert therapeutic interventions.
            </p>
            <div className="flex gap-4 mt-8">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:scale-110 transition-transform bg-white/10 hover:bg-white/20 text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 tracking-tight">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Training Programs", path: "/training-programs" },
                { name: "Workshops", path: "/workshops" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white/70 hover:text-[#4cbbcc] transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 tracking-tight text-white">Contact Us</h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#4cbbcc] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#4cbbcc]/20">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-1 text-white">Call Us</p>
                  <p className="text-sm text-white/80 font-medium">+91 78424 95577</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#e94894] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#e94894]/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-1 text-white">Visit Us</p>
                  <p className="text-sm text-white/80 font-medium max-w-[200px]">
                    TNGO Colony Phase 2, Gachibowli, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60 font-medium">
          <p>© {new Date().getFullYear()} సKALA Therapy Center. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-[#4cbbcc] transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-[#4cbbcc] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <a
        href="tel:+917842495577"
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#4cbbcc] text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce z-50 border-2 border-white/20"
      >
        <Phone size={20} />
      </a>
    </footer>
  );
};