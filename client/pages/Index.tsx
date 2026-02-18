import { motion } from "framer-motion";
import { 
  Speech, 
  Brain, 
  Activity, 
  Users, 
  HeartPulse, 
  Puzzle, 
  Stethoscope, 
  GraduationCap, 
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Star,
  Layers,
  MessageCircle
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

const Index = () => {
  const navigate = useNavigate();

  const handleWhatsAppRedirect = (message: string) => {
    const phoneNumber = "917842495577";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="w-full">
      {/* --- HERO SECTION (Updated: Reference-based Minimalist Aesthetic) --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image Layer - Empathy & Connection */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/3.jpg" 
            alt="Connection and Support" 
            className="w-full h-full object-cover object-center grayscale-[20%] brightness-[95%]"
          />
          {/* Reference-style Gradient Overlay (Ensures text readability like Ramp/11x) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-black/80 dark:via-black/20" />
        </div>

        <div className="container mx-auto px-6 lg:px-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              {/* Trust Badge - Reference: Ramp 2,000+ reviews */}
              <div className="flex items-center gap-2 mb-6 bg-primary/10 w-fit px-4 py-1.5 rounded-full border border-primary/20">
                <Star size={14} className="fill-primary text-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Trusted by 500+ Families</span>
              </div>

              <motion.h1 
                className="text-6xl md:text-8xl font-telugu font-bold text-foreground mb-6 leading-[1.1]"
              >
                స-kala
              </motion.h1>
              
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground/80 max-w-xl mb-8 leading-tight">
                Digital care, <span className="text-primary italic">Human results.</span>
                <span className="block text-lg md:text-xl font-normal mt-4 text-muted-foreground">
                  Nurturing abilities and building confidence through personalized therapy for every stage of life.
                </span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleWhatsAppRedirect("Hello! I want to take the first step. Please guide me about your consultation process.")}
                  className="bg-accent text-accent-foreground px-10 py-5 rounded-xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3 transition-all hover:bg-accent/90"
                >
                  Take the first step
                  <ArrowRight size={20} />
                </motion.button>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white/50 backdrop-blur-md border border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/80 transition-all shadow-sm"
                >
                  Contact Us
                </button>
              </div>

              {/* Reference-style Subtext */}
              <p className="mt-8 text-sm text-muted-foreground font-medium flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                Evidence-based practices & Compassionate care
              </p>
            </motion.div>

            {/* Subtle 3D Interactive Layer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block relative h-[500px]"
            >
              <div className="absolute inset-0 opacity-40">
                 <Hero3D />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- OUR MISSION (Updated with Background Image) --- */}
<section className="py-24 px-6 bg-gradient-to-b from-transparent to-primary/5">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <GlassCard className="p-8 md:p-12 border-l-8 border-primary shadow-2xl border-none bg-white/60">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A space where every ability is valued.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At స-kala, we believe in a holistic approach to development. Our multidisciplinary team works collaboratively to provide personalized care that nurtures growth and empowers individuals to reach their full potential.
          </p>
          <div className="flex flex-wrap items-center gap-6">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-secondary flex items-center justify-center text-sm font-bold shadow-md group hover:z-50 transition-all cursor-default">
                    {i}
                  </div>
                ))}
             </div>
             <div className="space-y-1">
                <p className="font-bold text-lg">Trusted Experts</p>
                <div className="flex gap-1 text-accent fill-accent">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
             </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* --- Mission Card with Background Image --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white/50"
      >
        {/* Background Image Layer */}
        <img 
          src="/1.png" 
          alt="Mission Background" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Dark/Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500" />
        
        {/* Text Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 md:p-12 text-white">
           
           <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block drop-shadow-md">Core Philosophy</span>
           <h3 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Our Mission</h3>
           <p className="text-lg md:text-xl font-medium italic leading-relaxed drop-shadow-md">
             "To create a supportive ecosystem where therapeutic excellence meets empathetic care, fostering independence and confidence."
           </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* --- SERVICES (Icon Hover Logic) --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting communication, behaviour, learning, and emotional well-being across all stages of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <GlassCard className={`h-full group hover:bg-white hover:shadow-2xl transition-all duration-500 border-none ${service.comingSoon ? "opacity-75" : ""}`}>
                  <div className="w-16 h-16 bg-secondary/30 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
                    {service.title}
                    {service.comingSoon && (
                      <span className="text-[10px] uppercase tracking-widest bg-accent/30 text-accent-foreground px-2 py-1 rounded-full font-bold">Soon</span>
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  {!service.comingSoon && (
                    <button className="text-primary font-bold flex items-center gap-2 group/btn mt-auto">
                      Explore Service 
                      <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOLISTIC APPROACH (Side-by-Side Reveal) --- */}
      <section className="py-32 px-6 bg-white/50 dark:bg-black/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-5xl font-bold mb-20 text-center">Our Approach</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-4">
                 {[
                   { name: "Personalized", icon: ShieldCheck, color: "bg-purple-100", desc: "Individualized, goal-based therapy plans tailored to your pace." },
                   { name: "Functional", icon: Zap, color: "bg-blue-100", desc: "Focus on real-life skills that build immediate independence." },
                   { name: "Family-Centered", icon: Users, color: "bg-yellow-100", desc: "Collaborative work with families to ensure long-term success." },
                   { name: "Supportive", icon: HeartPulse, color: "bg-purple-100", desc: "A warm, inclusive environment where every milestone is celebrated." }
                 ].map((item, i) => (
                   <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-6 p-6 rounded-3xl hover:bg-white transition-colors group cursor-default shadow-sm hover:shadow-md"
                   >
                      <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform`}>
                         <item.icon size={28} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                         <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
              <div className="relative">
                 <div className="aspect-square glass rounded-[4rem] overflow-hidden relative border-8 border-white/50 shadow-2xl">
                    <img 
                      src="/2.png" 
                      alt="Professional Therapy" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-12 left-12 text-white">
                       <p className="text-4xl font-telugu font-bold">స-kala Core</p>
                       <p className="uppercase tracking-[0.3em] text-sm font-bold opacity-90">Methodology</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- WHO WE SUPPORT (Yellow Hover Fill) --- */}
      <section className="py-32 px-6 overflow-hidden bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 italic">Who We Support</h2>
          <p className="text-xl text-muted-foreground mb-20">Empowering growth across all developmental stages.</p>
          
          <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
            {[
              "Children with delays", "Speech challenges", "Neuro-developmental", "Learning differences", 
              "Emotional concerns", "Adolescents", "Adults", "Couples & Families"
            ].map((item, i) => (
              <GlassCard 
                key={i} 
                className="min-w-[300px] p-12 text-center flex-shrink-0 group hover:border-accent transition-all duration-500 shadow-lg border-none bg-white/40"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item}</h3>
              </GlassCard>
            ))}
            {/* Infinite Scroll Re-mapping */}
            {[
              "Children with delays", "Speech challenges", "Neuro-developmental", "Learning differences", 
              "Emotional concerns", "Adolescents", "Adults", "Couples & Families"
            ].map((item, i) => (
              <GlassCard 
                key={`dup-${i}`} 
                className="min-w-[300px] p-12 text-center flex-shrink-0 group hover:border-accent transition-all duration-500 shadow-lg border-none bg-white/40"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item}</h3>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA (WhatsApp Redirect) --- */}
      <section className="py-32 px-6">
        <GlassCard className="max-w-5xl mx-auto bg-primary text-white border-none p-12 md:p-20 text-center overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 blur-[100px] rounded-full -mr-40 -mt-40 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full -ml-40 -mb-40" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 leading-tight">Ready to start?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Join the స-kala family and start a journey of growth and empowerment for you or your loved ones.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
            <button 
              onClick={() => handleWhatsAppRedirect("Hello! I would like to book a consultation for a therapy session.")}
              className="bg-white text-primary px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              <Phone size={24} />
              Book Consultation
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white/10 backdrop-blur-md border border-white/30 px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Contact Us
            </button>
          </div>
        </GlassCard>
      </section>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;