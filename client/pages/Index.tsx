import { motion } from "framer-motion";
import { 
  Speech, Brain, Activity, Users, HeartPulse, Puzzle, 
  Stethoscope, GraduationCap, Phone, ArrowRight, Star, MessageCircle,
  Eye, Target, Heart, Sparkles, Footprints, ShieldCheck, Zap,CheckCircle2
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Hero3D } from "@/components/Hero3D";
import { useNavigate } from "react-router-dom";

const services = [
  { icon: Speech, title: "Speech/Language", desc: "Expert therapy for communication clarity and language development." },
  { icon: Brain, title: "Behavioural", desc: "Specialized behavioral support and modification programs." },
  { icon: Activity, title: "Occupational", desc: "Enhancing daily living skills and motor coordination." },
  { icon: GraduationCap, title: "Special Ed", desc: "Coming Soon - Individualized learning support for special needs.", comingSoon: true },
  { icon: Users, title: "Social Skills", desc: "Interactive group sessions for social development." },
  { icon: HeartPulse, title: "Psychoeducational", desc: "Comprehensive assessments and educational planning." },
  { icon: Stethoscope, title: "Psychological", desc: "Professional counseling and psychological evaluations." },
  { icon: Puzzle, title: "Psychotherapy", desc: "Depth therapy for emotional and psychological growth." },
  { icon: HeartPulse, title: "Counselling", desc: "Supportive counseling for individuals and families." },
];

const missionGoals = [
  { icon: Target, title: "Precision Care", text: "Deliver individualized intervention tailored to each child’s needs" },
  { icon: Users, title: "Family Synergy", text: "Partner closely with families through guidance, training, and collaboration" },
  { icon: Footprints, title: "Functional Growth", text: "Build functional skills that support independence in everyday life" },
  { icon: Heart, title: "Safe Haven", text: "Create structured yet nurturing environments that encourage engagement" },
  { icon: Sparkles, title: "Holistic Play", text: "Use play, interaction, and therapeutic strategies for development" },
];

const Index = () => {
  const navigate = useNavigate();

  const handleWhatsAppRedirect = (message: string) => {
    const phoneNumber = "917842495577";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="w-full">
      {/* --- NEW CREATIVE HERO SECTION --- */}
<section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/3.jpg" 
            alt="Compassionate Care" 
            className="w-full h-full object-cover object-center grayscale-[5%] brightness-[90%]"
          />
          {/* Deep gradient to blend hero into navbar at the top */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white dark:to-[#0a0a0b]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-black/90" />
        </div>

        <div className="container mx-auto px-6 lg:px-20 z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              {/* Refined, smaller brand identifier */}
              <h1 className="text-3xl md:text-4xl font-telugu font-bold text-[#c95994] mb-4 tracking-tight flex items-baseline gap-1">
                స<span className="font-sans font-semibold tracking-tighter">KALA</span>
              </h1>
              
              {/* Heading with fixed line-height to prevent overlap */}
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-8">
                Empowering <br />
                <span className="text-[#4cbbcc] italic font-medium">every ability.</span>
              </h2>

              {/* Creative "Scientific Harmony" Message */}
              <div className="max-w-md mb-10 space-y-4">
                
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  A space where every ability is valued and every step forward matters
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppRedirect("Hello! I want to take the first step toward therapeutic care.")}
                  className="bg-[#4cbbcc] text-white px-10 py-4 rounded-full font-bold text-base shadow-2xl shadow-[#4cbbcc]/40 flex items-center justify-center gap-3 transition-all"
                >
                  Take the first step
                  <ArrowRight size={20} />
                </motion.button>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/30 text-foreground px-10 py-4 rounded-full font-bold text-base hover:bg-white/60 transition-all"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.4 }} 
              transition={{ delay: 0.5 }} 
              className="hidden lg:block relative h-[600px]"
            >
              <Hero3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION (SAME AS BEFORE) --- */}
      <section className="py-24 px-6 relative overflow-hidden bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-[2px] bg-[#4cbbcc]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#4cbbcc]">The Future</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.1]">
                Our Vision for an <span className="text-[#c95994]">Inclusive</span> World
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                To create an inclusive and compassionate space where every individual is supported to grow, communicate, learn, and thrive in their own unique way.
              </p>
              <div className="p-6 bg-[#4cbbcc]/5 rounded-3xl border-l-4 border-[#4cbbcc]">
                <p className="text-base font-medium text-foreground italic">
                  సKALA envisions a community where differences are understood, strengths are nurtured, and meaningful independence becomes achievable for every child and family.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-[4/3] md:w-[80%] ml-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
                <img src="/1.png" alt="Vision" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#c95994]/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#4cbbcc]/20 rounded-full blur-2xl" />
            </motion.div>
          </div>

          <div className="bg-[#f5f5f7] dark:bg-white/5 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#c95994]/5 blur-[100px] rounded-full" />
             <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#c95994]/10 text-[#c95994] text-[10px] font-bold uppercase tracking-widest mb-6">Our Mission</span>
                <p className="text-xl md:text-3xl font-medium text-foreground leading-snug">
                  "At సKALA, we provide personalized, evidence-based rehabilitational support that enhances communication, behavior, learning, and daily functioning."
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                {missionGoals.map((goal, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black/40 shadow-xl flex items-center justify-center text-[#4cbbcc] mb-6 group-hover:bg-[#4cbbcc] group-hover:text-white transition-all duration-500">
                      <goal.icon size={24} />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2">{goal.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed px-2">
                      {goal.text}
                    </p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-24 px-6 bg-[#f5f5f7] dark:bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#c95994] uppercase tracking-tight">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }}>
                <GlassCard className="h-full group hover:bg-white dark:hover:bg-black/60 hover:shadow-2xl transition-all duration-500 border-none p-8 text-left">
                  <div className="w-12 h-12 bg-[#4cbbcc]/10 rounded-xl flex items-center justify-center text-[#4cbbcc] mb-6 group-hover:bg-[#4cbbcc] group-hover:text-white transition-all">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#c95994] transition-colors text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[14px]">{service.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 px-6">
        <GlassCard className="max-w-5xl mx-auto bg-[#c95994] text-white border-none p-12 md:p-20 text-center overflow-hidden relative shadow-2xl rounded-[3rem]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f6b040]/30 blur-[100px] rounded-full -mr-40 -mt-40" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">Ready to start?</h2>
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