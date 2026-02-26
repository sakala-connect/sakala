import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Speech, Brain, Activity, Puzzle, GraduationCap, 
  Phone, ArrowRight, MessageCircle, Target, Users, 
  Footprints, Heart, Sparkles
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Hero3D } from "@/components/Hero3D";
import { useNavigate } from "react-router-dom";

const services = [
  { icon: Brain, title: "Behavioral Therapy", path: "/services/behavioral", color: "#c95994" },
  { icon: Activity, title: "Occupational Therapy", path: "/services/occupational", color: "#4cbbcc" },
  { icon: Puzzle, title: "Psychotherapies", path: "/services/psychotherapy", color: "#f6b040" },
  { icon: GraduationCap, title: "Special Education", path: "/services/special-education", color: "#4ecc74" },
  { icon: Speech, title: "Speech Therapy", path: "/services/speech", color: "#957fe5" },
];

const missionGoals = [
  { icon: Target, title: "Precision Care", text: "Deliver individualized intervention tailored to each child’s needs" },
  { icon: Users, title: "Family Synergy", text: "Partner closely with families through guidance, training, and collaboration" },
  { icon: Footprints, title: "Functional Growth", text: "Build functional skills that support independence in everyday life" },
  { icon: Heart, title: "Safe Haven", text: "Create structured yet nurturing environments that encourage engagement" },
  { icon: Sparkles, title: "Holistic Play", text: "Use play, interaction, and therapeutic strategies for development" },
];

// --- UNIFORM 3D TILT CARD COMPONENT ---
const ServiceCard3D = ({ service, navigate }: { service: any, navigate: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Standardized rotation for all cards
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full group cursor-pointer"
      onClick={() => navigate(service.path)}
    >
      {/* Uniform Colored Lift Shadow */}
      <div 
        className="absolute inset-x-4 bottom-0 h-10 opacity-0 group-hover:opacity-50 transition-all duration-500 blur-2xl rounded-full z-0"
        style={{ 
          backgroundColor: service.color,
          transform: "translateZ(-10px) translateY(10px)"
        }}
      />
      
      <GlassCard className="relative h-[250px] border-none bg-white/80 dark:bg-black/30 backdrop-blur-xl p-6 flex flex-col items-center justify-center text-center overflow-hidden rounded-[2.5rem] shadow-xl z-10 transition-all duration-500 group-hover:bg-white dark:group-hover:bg-black/50 group-hover:-translate-y-2">
        
        {/* Floating Icon */}
        <motion.div 
          style={{ transform: "translateZ(60px)", color: service.color }}
          className="mb-6 transition-transform duration-500 group-hover:scale-110"
        >
          <service.icon size={52} strokeWidth={1.2} />
        </motion.div>

        <h3 
          style={{ transform: "translateZ(40px)" }}
          className="text-base font-bold text-foreground mb-4 leading-tight tracking-tight"
        >
          {service.title}
        </h3>

        {/* View Details */}
        <motion.div 
          style={{ transform: "translateZ(20px)" }}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4cbbcc]"
        >
          View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </GlassCard>
    </motion.div>
  );
};

const Index = () => {
  const navigate = useNavigate();

  const handleWhatsAppRedirect = (message: string) => {
    const phoneNumber = "917842495577";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="w-full">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/3.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale-[5%] brightness-[90%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white dark:to-[#0a0a0b]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-black/90" />
        </div>

        <div className="container mx-auto px-6 lg:px-20 z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-3xl md:text-4xl font-bold text-[#c95994] mb-4 flex items-baseline gap-1 font-telugu">
                స<span className="font-sans font-semibold tracking-tighter">KALA</span>
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-8">
                Empowering <br />
                <span className="text-[#4cbbcc] italic font-medium">every ability.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-md mb-10">
                A space where every ability is valued and every step forward matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button onClick={() => handleWhatsAppRedirect("Consultation")} className="bg-[#4cbbcc] text-white px-10 py-4 rounded-full font-bold shadow-2xl flex items-center justify-center gap-3 transition-all hover:scale-105">
                  Take the first step <ArrowRight size={20} />
                </button>
                <button onClick={() => navigate('/contact')} className="bg-white/40 backdrop-blur-md border border-white/30 text-foreground px-10 py-4 rounded-full font-bold hover:bg-white/60 transition-all">
                  Contact Us
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} className="hidden lg:block relative h-[600px]"><Hero3D /></motion.div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-24 px-6 relative bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">Our Vision for an <span className="text-[#c95994]">Inclusive</span> World</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-medium">
                To create an inclusive and compassionate space where every individual is supported to grow, communicate, learn, and thrive in their own unique way.
              </p>
              <div className="p-6 bg-[#4cbbcc]/5 rounded-3xl border-l-4 border-[#4cbbcc]">
                <p className="text-base font-semibold italic text-foreground">సKALA envisions a community where differences are understood and strengths are nurtured.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5">
              <img src="/1.png" className="rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-white/10" alt="Vision" />
            </motion.div>
          </div>

          <div className="bg-[#f5f5f7] dark:bg-white/5 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
             <div className="max-w-4xl mx-auto text-center mb-16 text-foreground">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#c95994]/10 text-[#c95994] text-[10px] font-bold uppercase tracking-widest mb-6">Our Mission</span>
                <p className="text-xl md:text-3xl font-medium leading-snug">"At సKALA, we provide personalized support that enhances communication, behavior, and daily functioning."</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {missionGoals.map((goal, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="flex flex-col items-center text-center group text-foreground">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black shadow-xl flex items-center justify-center text-[#4cbbcc] mb-6 group-hover:bg-[#4cbbcc] group-hover:text-white transition-all">
                      <goal.icon size={24} />
                    </div>
                    <h4 className="text-sm font-bold mb-2">{goal.title}</h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed px-2 font-medium">{goal.text}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (FIXED HEADING & 5-IN-A-ROW) --- */}
      <section className="py-32 px-6 bg-[#f5f5f7] dark:bg-[#0a0a0b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 text-foreground">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
            >
              Services
            </motion.h2>
            <p className="text-muted-foreground font-medium text-lg">Specialized support tailored for every unique journey.</p>
          </div>

          {/* Forced 5-column grid for Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard3D service={service} navigate={navigate} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 px-6">
        <GlassCard className="max-w-5xl mx-auto bg-[#c95994] text-white border-none p-12 md:p-20 text-center overflow-hidden relative shadow-2xl rounded-[3rem]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f6b040]/30 blur-[100px] rounded-full -mr-40 -mt-40" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-tight tracking-tight">Ready to start?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
            <button onClick={() => handleWhatsAppRedirect("Consultation request")} className="bg-white text-[#c95994] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-[#f6b040] hover:text-white transition-all shadow-lg flex items-center justify-center gap-3">
              <Phone size={20} /> Book Consultation
            </button>
            <button onClick={() => navigate('/contact')} className="bg-white/10 border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
              <MessageCircle size={20} /> Contact Us
            </button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default Index;