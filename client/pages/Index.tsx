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
  Layers
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Hero3D } from "@/components/Hero3D";

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
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <Hero3D />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-telugu font-bold text-primary mb-6 drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            స-kala
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl font-light tracking-wide max-w-3xl mx-auto text-foreground/80 mb-12"
          >
            Nurturing abilities, building confidence... Personalized therapy for every stage of life.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFFACD] text-[#2C3E50] px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 mx-auto border-2 border-primary/20"
          >
            Take the first step
            <ArrowRight size={24} />
          </motion.button>
        </motion.div>
      </section>

      {/* About Snippet */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-10 border-l-8 border-primary">
                <h2 className="text-4xl font-bold mb-6">A space where every ability is valued.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  At స-kala, we believe in a holistic approach to development. Our multidisciplinary team works collaboratively to provide personalized care that nurtures growth and empowers individuals to reach their full potential.
                </p>
                <div className="flex gap-4">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-secondary/50 flex items-center justify-center text-xs font-bold">
                          {i}
                        </div>
                      ))}
                   </div>
                   <p className="text-sm font-semibold flex items-center">Trusted by 500+ Families</p>
                </div>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square glass rounded-[3rem] overflow-hidden flex items-center justify-center"
            >
               <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
               <Layers size={120} className="text-primary opacity-20" />
               <div className="relative z-10 text-center p-8">
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground italic">"To create a supportive ecosystem where therapeutic excellence meets empathetic care, fostering independence and confidence in every individual we serve."</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Comprehensive Therapy Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our specialized programs are designed to address a wide range of developmental and psychological needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className={service.comingSoon ? "opacity-80" : ""}>
                  <div className="w-16 h-16 bg-secondary/30 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    {service.title}
                    {service.comingSoon && (
                      <span className="text-[10px] uppercase tracking-widest bg-primary/20 px-2 py-1 rounded-full animate-pulse">Soon</span>
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                  {!service.comingSoon && (
                    <button className="mt-8 text-primary font-bold flex items-center gap-2 group">
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach (Orbiting Animation) */}
      <section className="py-32 px-6 bg-[#F0F4F8] dark:bg-black/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <h2 className="text-5xl font-bold mb-20 text-center">Our Holistic Approach</h2>
           <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full border-dashed animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-40 h-40 glass rounded-full flex flex-col items-center justify-center text-center p-4">
                    <span className="text-2xl font-telugu font-bold text-primary">స-kala</span>
                    <span className="text-xs font-bold uppercase tracking-tighter">Core</span>
                 </div>
              </div>
              
              {[
                { name: "Personalized", icon: ShieldCheck, color: "#D7BDE2" },
                { name: "Functional", icon: Zap, color: "#AED6F1" },
                { name: "Family-centered", icon: Users, color: "#FFFACD" },
                { name: "Evidence-based", icon: Star, color: "#D7BDE2" }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    rotate: [i * 90, i * 90 + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                   <div 
                    className="relative"
                    style={{ transform: `translateX(${window.innerWidth > 768 ? 200 : 120}px) rotate(-${i * 90}px)` }}
                   >
                     <motion.div
                       animate={{ rotate: [0, -360] }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       className="w-24 h-24 md:w-32 md:h-32 glass rounded-2xl flex flex-col items-center justify-center gap-2 p-2 shadow-2xl"
                     >
                       <item.icon size={24} className="text-primary" />
                       <span className="text-[10px] md:text-xs font-bold text-center uppercase tracking-wider">{item.name}</span>
                     </motion.div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Who We Support Carousel */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Who We Support</h2>
            <p className="text-xl text-muted-foreground">Tailored support for every stage of development and life challenges.</p>
          </div>
          <div className="flex gap-8 animate-scroll">
            {[
              "Children with delays",
              "Speech challenges",
              "Neuro-developmental",
              "Learning differences",
              "Emotional/Behavioral",
              "Adolescents",
              "Adults",
              "Couples & Families"
            ].map((item, i) => (
              <GlassCard key={i} className="min-w-[280px] p-8 text-center bg-secondary/20 flex-shrink-0">
                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold">{item}</h3>
              </GlassCard>
            ))}
            {/* Duplicate for infinite effect */}
            {[
              "Children with delays",
              "Speech challenges",
              "Neuro-developmental",
              "Learning differences",
              "Emotional/Behavioral",
              "Adolescents",
              "Adults",
              "Couples & Families"
            ].map((item, i) => (
              <GlassCard key={`dup-${i}`} className="min-w-[280px] p-8 text-center bg-secondary/20 flex-shrink-0">
                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold">{item}</h3>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Teaser */}
      <section className="py-32 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold mb-6">Specialized Programs</h2>
              <p className="text-xl text-muted-foreground">Beyond individual therapy, we offer community-focused growth opportunities.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 group border-b-2 border-primary pb-1">
              View All Programs
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Parent Sessions", icon: Users },
              { title: "Social Groups", icon: HeartPulse },
              { title: "School Readiness", icon: GraduationCap, soon: true },
              { title: "Workshops", icon: Star, soon: true },
              { title: "Community Events", icon: Activity, soon: true }
            ].map((program, i) => (
              <GlassCard key={i} className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <program.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{program.title}</h3>
                </div>
                {program.soon && (
                   <div className="h-2 w-full bg-border/20 rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent w-1/2 animate-shimmer" />
                   </div>
                )}
                <p className="text-sm text-muted-foreground mt-4">
                  {program.soon ? "Launching soon. Stay tuned for updates." : "Regular sessions available. Contact us to join."}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6">
        <GlassCard className="max-w-5xl mx-auto bg-primary/20 border-none p-12 md:p-20 text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 blur-[100px] rounded-full -ml-32 -mb-32" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Ready to take the first step?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10">
            Join the స-kala family and start a journey of growth, confidence, and empowerment for you or your loved ones.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
            <button className="bg-primary text-primary-foreground px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
              <Phone size={24} />
              Book a Consultation
            </button>
            <button className="glass px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
              Message Us
            </button>
          </div>
          <p className="mt-8 font-semibold text-primary">Call us at: +91 78424 95577</p>
        </GlassCard>
      </section>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
