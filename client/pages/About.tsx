import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { 
  Heart, ShieldCheck, Users, Sparkles, CheckCircle2, 
  ArrowRight, Leaf, Eye, Target, Zap 
} from "lucide-react";

const philosophyPoints = [
  "Person-centred practice across the lifespan",
  "Strength-based understanding rather than deficit focus",
  "Collaboration with families, caregivers, and systems",
  "Structured support balanced with flexibility and compassion",
  "Functional, real-life skill building",
  "Emotional safety as the foundation for learning"
];

const values = [
  { id: 1, title: "Respect for individuality", desc: "Every person’s journey is unique" },
  { id: 2, title: "Person-centred care", desc: "Support is tailored, not standardised" },
  { id: 3, title: "Strength-based approach", desc: "We build on abilities, not just challenges" },
  { id: 4, title: "Collaboration", desc: "Families and caregivers are partners in the process" },
  { id: 5, title: "Emotional safety", desc: "Connection comes before learning" },
  { id: 6, title: "Meaningful outcomes", desc: "Focus on real-life functional progress" },
  { id: 7, title: "Consistency with flexibility", desc: "Adaptive support structures" }
];

const differentiators = [
  { title: "Personalised & Standardised", desc: "Every intervention is thoughtfully tailored to individual strengths, needs, and goals." },
  { title: "Across the Lifespan", desc: "Support for children, adolescents, adults, and families — ensuring continuity of care." },
  { title: "Real-life Functional Focus", desc: "Prioritizing skills that improve everyday participation, independence, and confidence." },
  { title: "Person-centred & Strength-based", desc: "Building on abilities while gently supporting areas of difficulty." },
  { title: "Collaborative Approach", desc: "Families are active partners, ensuring consistency beyond sessions." },
  { title: "Balanced Structure", desc: "Evidence-based strategies delivered within a warm, emotionally safe environment." },
  { title: "Regulation before Performance", desc: "Emotional safety and readiness are foundational to learning." },
  { title: "Thoughtful, Integrative Practice", desc: "Multidisciplinary perspectives coming together for holistic growth." }
];

const About = () => {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0b] font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4cbbcc]/5 via-transparent to-white dark:to-[#0a0a0b]" />
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text[10px] font-bold uppercase tracking-[0.4em] text-[#4cbbcc] mb-4">Discovery</h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8 leading-tight">
              About <span className="font-telugu text-[#c95994]">సKALA</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Empowering every ability through genuine human connection and therapeutic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CORE BELIEF --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Growth is not linear. Progress happens when you feel <span className="text-[#4cbbcc] italic">safe.</span>
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                సKALA was created with the belief that ability exists in many forms — sometimes visible, sometimes emerging, and sometimes waiting for the right support.
              </p>
              <p>
                We bring together therapeutic knowledge, thoughtful practice, and genuine human connection to support individuals and families across different stages of life.
              </p>
              <p className="font-semibold text-foreground">
                Our work focuses on helping people build skills, confidence, and independence in ways that are practical, respectful, and sustainable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80" 
              alt="Therapeutic Community" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#c95994]/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section className="py-32 px-6 bg-[#f5f5f7] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#c95994] font-bold text-s uppercase tracking-widest">Foundation</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">Our Philosophy</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              At సKALA, we believe growth is relational, contextual, and deeply individual.
There is no single pathway to development, and meaningful change happens when support respects the person — not just the difficulty

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophyPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-white dark:bg-black/40 shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-[#4cbbcc]/20"
              >
                <div className="w-10 h-10 rounded-full bg-[#4cbbcc]/10 flex items-center justify-center text-[#4cbbcc] mb-6 group-hover:bg-[#4cbbcc] group-hover:text-white transition-all">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-lg font-bold text-foreground leading-tight tracking-tight">{point}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#c95994] italic font-semibold text-lg">
              "We value progress that is sustainable, meaningful, and integrated into everyday life."
            </p>
          </div>
        </div>
      </section>

      {/* --- VALUES --- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-12 rounded-2xl bg-[#c95994]/10 flex items-center justify-center text-[#c95994]">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Our Values</h2>
          </div>

          <div className="space-y-4">
            {values.map((value) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-[#f5f5f7] dark:bg-white/5 flex flex-col md:flex-row md:items-center justify-between hover:bg-white dark:hover:bg-black transition-all border border-transparent hover:border-[#c95994]/20 shadow-sm"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-bold text-[#c95994]/20 group-hover:text-[#c95994]/40 transition-colors">0{value.id}</span>
                  <div>
                    <h4 className="text-xl font-bold text-foreground tracking-tight">{value.title}</h4>
                    <p className="text-muted-foreground font-medium">{value.desc}</p>
                  </div>
                </div>
                <Zap className="hidden md:block text-[#4cbbcc] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-32 px-6 bg-white dark:bg-transparent border-t border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <span className="text-[#4cbbcc] font-bold text-xs uppercase tracking-widest">Why సKALA</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight tracking-tighter">
                Support designed around <span className="text-[#4cbbcc] italic font-medium">the person</span> — not just the concern.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed font-medium">
                We focus on meaningful progress that fits real life, respects individuality, and involves the people who matter most.
              </p>
              <button className="mt-10 flex items-center gap-2 text-[#c95994] font-bold uppercase text-[11px] tracking-[0.2em] hover:gap-4 transition-all">
                OUR APPROACH <ArrowRight size={14} />
              </button>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((item, idx) => (
                <GlassCard key={idx} className="p-10 border-none bg-[#f5f5f7] dark:bg-white/5 rounded-[3rem] hover:bg-white transition-all shadow-none hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 text-[#c95994] leading-tight tracking-tight">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-[13px] font-medium">{item.desc}</p>
                </GlassCard>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- CLOSING --- */}
      <section className="py-32 px-6 text-center border-t border-foreground/5">
         <h2 className="text-xl md:text-3xl font-bold mb-8 italic tracking-tight text-foreground/90">
           "At సKALA, progress is not measured only by outcomes — but by confidence, connection, and meaningful change."
         </h2>
         <div className="w-20 h-1 bg-gradient-to-r from-[#c95994] to-[#4cbbcc] mx-auto rounded-full" />
      </section>

    </div>
  );
};

export default About;