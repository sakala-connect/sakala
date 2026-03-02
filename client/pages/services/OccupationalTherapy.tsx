import { motion } from "framer-motion";
import { 
  Activity, Sparkles, Smile, ShieldCheck, Home, 
  Settings, Heart, Calendar, ArrowRight, Users, 
  PlayCircle, Target, Focus
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const OccupationalTherapy = () => {
  const handleConsultation = () => {
    window.open(`https://wa.me/917842495577?text=${encodeURIComponent("Hello! I am interested in Occupational Therapy for my child.")}`, "_blank");
  };

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0b] pt-32 font-sans overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1]">
               Occupational Therapy
             </h1>
             <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-medium mb-8 max-w-lg">
               <p>
                 At సKALA, we believe that every child’s "occupation" is to play, learn, and grow.
               </p>
               <p className="text-base">
                 Our Occupational Therapy (OT) services help children develop the physical, sensory, and cognitive skills they need to perform everyday tasks with independence and joy.
               </p>
             </div>
             <button 
                onClick={handleConsultation}
                className="bg-[#4cbbcc] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-[#4cbbcc]/20"
             >
               <Calendar size={16} /> Book Consultation
             </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10"
          >
             <img src="/oc.jpeg" alt="Occupational Therapy" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#4cbbcc]/10" />
          </motion.div>
        </div>
      </section>

      {/* --- BUILDING LIFE SKILLS --- */}
      <section className="py-20 px-6 bg-[#f5f5f7] dark:bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] text-[#c95994] mb-6">Building Life Skills</h2>
            <div className="space-y-4 text-base text-muted-foreground max-w-3xl mx-auto font-medium">
              <p>Occupational therapy focuses on the "functional" side of childhood.</p>
              <p>We help children master the skills they need for daily living.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR PROFESSIONAL APPROACH --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
             <h2 className="text-3xl font-bold tracking-tight">Our Professional Approach</h2>
             <p className="text-base text-muted-foreground leading-relaxed font-medium">
               Our therapy is delivered by certified Occupational Therapists with expertise in neurodevelopment. We look at the whole child—their physical abilities, their sensory needs, and the environment around them—to create a path toward success that feels achievable and rewarding.
             </p>
             <div className="w-12 h-1 bg-[#4cbbcc] rounded-full" />
          </div>

          <div className="lg:col-span-7">
             <h3 className="text-xl font-bold text-[#c95994] mb-8 uppercase tracking-widest">Sensory-Integrated & Play-Based</h3>
             <p className="text-sm text-muted-foreground mb-8 font-medium italic">We use evidence-based techniques that make hard work feel like fun. Our approach includes:</p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    icon: PlayCircle, title: "Sensory Integration", 
                    text: "Using specialized equipment to help children feel regulated and 'just right' in their bodies." 
                  },
                  { 
                    icon: Activity, title: "Purposeful Activity", 
                    text: "Every game or exercise is designed to build a specific skill, from core strength to hand-eye coordination." 
                  },
                  { 
                    icon: Settings, title: "Adaptive Strategies", 
                    text: "We teach children how to modify tasks so they can participate fully, regardless of their challenges." 
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-[2rem] bg-[#f5f5f7] dark:bg-white/5 border border-transparent hover:border-[#4cbbcc]/20 transition-all group">
                     <item.icon className="text-[#c95994] mb-4 group-hover:scale-110 transition-transform" size={24} />
                     <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                     <p className="text-[12px] text-muted-foreground leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- SUPPORTING THE WHOLE CHILD: BENTO --- */}
      <section className="py-20 px-6 bg-[#0a0a0b] text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Supporting the Whole Child</h2>
            <p className="text-white/60 font-medium text-sm">At సKALA, OT doesn't happen in a vacuum. We work alongside speech and behavior therapists to ensure:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Focus & Attention", text: "Helping children sit and attend to tasks comfortably." },
              { icon: Heart, title: "Emotional Regulation", text: "Providing the sensory input a child needs to stay calm and ready to learn." },
              { icon: Home, title: "Environmental Comfort", text: "Identifying tools that make the world a more accessible place." }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <card.icon className="text-[#4cbbcc] mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="text-lg font-bold mb-3">{card.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed font-medium">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP WITH FAMILIES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-video">
             <img src="/oc2.jpeg" alt="Family Partnership" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#c95994]/20" />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#c95994]/10 text-[#c95994] flex items-center justify-center">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">Partnership with Families</h3>
            </div>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-medium">
              <p>We empower parents with "sensory diets" and home-based activities.</p>
              <p>By working together, we ensure that the progress made in the gym translates into more independence at school and at the dinner table.</p>
            </div>
            <div className="pt-8">
              <p className="text-xl md:text-2xl font-bold text-[#4cbbcc] italic leading-tight">
                "At సKALA, we don’t just build skills—we build the independence that allows every child to participate in the magic of daily life."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="pb-16 px-6">
        <GlassCard className="max-w-3xl mx-auto p-8 md:p-12 text-center bg-gradient-to-br from-[#c95994] to-[#4cbbcc] text-white border-none rounded-[3rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />
          <h2 className="text-2xl md:text-4xl font-bold mb-6 relative z-10 leading-tight">Empowering growth <br/> through play today.</h2>
          <button 
            onClick={handleConsultation}
            className="relative z-10 bg-white text-[#c95994] px-8 py-3 rounded-full font-bold text-sm md:text-base hover:scale-105 transition-all shadow-xl"
          >
            Schedule Assessment
          </button>
        </GlassCard>
      </section>

    </div>
  );
};

export default OccupationalTherapy;