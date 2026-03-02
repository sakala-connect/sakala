import { motion } from "framer-motion";
import { 
  GraduationCap, BookOpen, ShieldCheck, Sparkles, Brain, 
  ClipboardList, Users, Map, HeartPulse, Target, 
  Calendar, ArrowRight, UserCheck, Search
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const SpecialEducation = () => {
  const handleConsultation = () => {
    window.open(`https://wa.me/917842495577?text=${encodeURIComponent("Hello! I am interested in Special Education and Parent Training.")}`, "_blank");
  };

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0b] pt-32 font-sans overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1]">
               Special Education
             </h1>
             <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-medium mb-8 max-w-lg">
               <p>
                 At సKALA, we believe that every child has a unique way of learning.
               </p>
               <p>
                 Our Special Education services are designed to bridge the gap between a child’s current developmental stage and their full potential, providing a supportive environment where learning feels achievable and exciting.
               </p>
             </div>
             <button 
                onClick={handleConsultation}
                className="bg-[#4cbbcc] text-white px-8 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-[#4cbbcc]/20"
             >
               <Calendar size={16} /> Book Consultation
             </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10"
          >
             <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Special Education" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#4cbbcc]/10" />
          </motion.div>
        </div>
      </section>

      {/* --- OUR PROFESSIONAL APPROACH --- */}
      <section className="py-20 px-6 bg-[#f5f5f7] dark:bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] text-[#c95994] mb-8">Our Professional Approach</h2>
            <h3 className="text-xl font-bold mb-4">Learning Without Pressure</h3>
            <p className="text-base text-muted-foreground max-w-3xl font-medium leading-relaxed">
              We move away from traditional "one-size-fits-all" teaching. Our Special Educators focus on the individual learner, identifying their strengths and tailoring instruction to meet their specific sensory, cognitive, and emotional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: ShieldCheck, title: "Evidence-Based Strategies", 
                text: "We utilize research-backed methods to improve literacy, numeracy, and cognitive skills." 
              },
              { 
                icon: Sparkles, title: "Neurodiversity-Affirming", 
                text: "We celebrate different learning styles. Our goal is to adapt the environment to the child, rather than forcing the child to fit a rigid mold." 
              },
              { 
                icon: Brain, title: "Holistic Skill Building", 
                text: "Beyond academics, we focus on Executive Functioning—helping children with attention, memory, organization, and problem-solving." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-black/20 border border-transparent hover:border-[#4cbbcc]/20 transition-all group">
                 <item.icon className="text-[#4cbbcc] mb-4 group-hover:scale-110 transition-transform" size={24} />
                 <h4 className="font-bold text-sm mb-3 uppercase tracking-wider">{item.title}</h4>
                 <p className="text-[12px] text-muted-foreground leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AREAS OF SUPPORT --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
             <div className="w-10 h-10 rounded-2xl bg-[#c95994]/10 text-[#c95994] flex items-center justify-center">
                <ClipboardList size={20} />
             </div>
             <h2 className="text-3xl font-bold tracking-tight">Areas of Support</h2>
             <p className="text-base text-muted-foreground leading-relaxed font-medium">
               Our certified Special Educators work with children facing various learning and developmental challenges, including:
             </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3">
             {[
               "Learning Difficulties & Disabilities", 
               "Various neuro-developmental conditions", 
               "Intellectual Disabilities", 
               "Academic gaps resulting from Speech or Language delays", 
               "Individualized Educational Plans (IEP)"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-[#f5f5f7] dark:bg-white/5 border border-transparent hover:border-[#c95994]/20 transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4cbbcc] shrink-0" />
                  <p className="text-[13px] font-bold text-foreground/80">{text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP & ROADMAP --- */}
      <section className="py-20 px-6 bg-[#0a0a0b] text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider">A Partnership with Families</h2>
              <div className="space-y-4 text-sm text-white/60 font-medium leading-relaxed">
                <p>We believe that parents are a child’s first teachers.</p>
                <p>Our educators work in close collaboration with families, providing strategies and tools to support your child’s learning journey at home, ensuring that progress is steady, meaningful, and sustainable.</p>
              </div>
            </div>
            <div className="p-8 rounded-[3rem] bg-[#4cbbcc]/10 border border-[#4cbbcc]/20">
               <Map className="text-[#4cbbcc] mb-4" size={32} />
               <p className="text-lg md:text-xl font-bold italic leading-tight text-white/90">
                 "Every child at సKALA receives a customized roadmap. We don’t just teach subjects; we build the foundational blocks of independence."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARENT AND CAREGIVER TRAINING --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] text-[#c95994] mb-6">Parent and Caregiver Training</h2>
          <div className="space-y-4 text-base text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            <p>At సKALA, we recognize that you are the most influential person in your child’s life.</p>
            <p>Our Parent and Caregiver Training is designed to shift the dynamic from "managing" a child to "connecting" with them.</p>
            <p>We provide the bridge between clinical expertise and everyday life, empowering you to become a confident advocate and a steady anchor for your child’s growth.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
             <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
               <Target className="text-[#4cbbcc]" size={24} /> Strengthening the Foundation
             </h3>
             <p className="text-sm text-muted-foreground mb-8 font-medium leading-relaxed">
               Training is not about pointing out what isn't working; it’s about equipping you with a specialized toolkit to handle real-world challenges. We focus on helping families:
             </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
  {[
    { t: "Decipher Communication", d: "Learn to read the 'hidden' messages behind challenging behaviors or emotional withdrawals." },
    { t: "Co-Regulate", d: "Master the art of staying calm so you can help your child find their own balance during 'big feeling' moments." },
    { t: "Create Predictability", d: "Design home environments and routines that reduce anxiety and foster cooperation." },
    { t: "Advocate with Confidence", d: "Gain the vocabulary and knowledge to navigate school meetings and social settings effectively." }
  ].map((item, i) => (
    // Ensure this GlassCard is closed properly at the end
    <GlassCard key={i} className="p-6 border-none bg-[#f5f5f7] dark:bg-white/5 rounded-[2rem] hover:bg-white transition-all">
      <h4 className="font-bold text-sm mb-2 text-[#c95994] tracking-tight">{item.t}</h4>
      <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">{item.d}</p>
    </GlassCard> // <--- Check if this closing tag exists
  ))}
</div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="pb-16 px-6">
        <GlassCard className="max-w-3xl mx-auto p-8 md:p-12 text-center bg-gradient-to-br from-[#c95994] to-[#4cbbcc] text-white border-none rounded-[3rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />
          <h2 className="text-2xl md:text-4xl font-bold mb-6 relative z-10 leading-tight">Empower your child's <br/> learning journey.</h2>
          <button 
            onClick={handleConsultation}
            className="relative z-10 bg-white text-[#c95994] px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:scale-105 transition-all shadow-xl"
          >
            Start Personalized Roadmap
          </button>
        </GlassCard>
      </section>

    </div>
  );
};

export default SpecialEducation;