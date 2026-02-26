import { motion } from "framer-motion";
import { 
  Heart, ShieldCheck, Sparkles, Users, MessageCircle, 
  Leaf, Smile, Brain, Lightbulb, Zap, Calendar, ArrowRight,
  UserCircle, Baby, Activity, Info,CheckCircle2
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const Psychotherapy = () => {
  const handleConsultation = () => {
    window.open(`https://wa.me/917842495577?text=${encodeURIComponent("Hello! I would like to learn more about Psychotherapy services.")}`, "_blank");
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
             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05]">
                Psychotherapies
             </h1>
             <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-medium mb-10 max-w-lg">
               <p>
                 At సKALA, we understand that everyone goes through emotional ups and downs. 
               </p>
               <p>
                 Sometimes children and adults need a safe place to talk, reflect, and make sense of what they are feeling. 
               </p>
               <p>
                 Our Psychotherapy services provide a calm and supportive space where individuals can share their thoughts without fear of judgment.
               </p>
               <p className="text-foreground font-bold">
                 We work with children, adolescents, and adults, helping them understand themselves better and find healthier ways to cope with everyday challenges.
               </p>
             </div>
             <button 
                onClick={handleConsultation}
                className="bg-[#4cbbcc] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-[#4cbbcc]/20"
             >
               <Calendar size={18} /> Book a Session
             </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10"
          >
             <img src="/8.jpg" alt="Psychotherapy" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#c95994]/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* --- WHO CAN BENEFIT --- */}
      <section className="py-24 px-6 bg-[#f5f5f7] dark:bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#c95994]">Who Can Benefit</h2>
            <p className="mt-4 text-lg text-muted-foreground">Psychotherapy can be helpful in many situations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Children & Adolescents */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4cbbcc]/10 text-[#4cbbcc] flex items-center justify-center">
                  <Baby size={24} />
                </div>
                <h3 className="text-2xl font-bold">For Children and Adolescents</h3>
              </div>
              <p className="text-muted-foreground font-medium italic">We support children who may be:</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Struggling with emotions such as anger, worry, or sadness",
                  "Finding it difficult to adjust to changes",
                  "Having trouble making friends or interacting with others",
                  "Experiencing school-related stress",
                  "Showing low confidence",
                  "Finding it hard to express their feelings",
                  "Facing behavioural or emotional challenges"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-black/20 shadow-sm border border-black/5">
                    <CheckCircle2 size={18} className="text-[#4cbbcc] shrink-0" />
                    <p className="text-sm font-medium text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
              <p className="p-6 bg-white dark:bg-black/20 rounded-2xl border-l-4 border-[#c95994] text-sm italic font-medium">
                "Some children may not easily talk about their feelings, and that is okay. Therapy provides them with comfortable and supportive ways to express themselves."
              </p>
            </div>

            {/* Adults */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#c95994]/10 text-[#c95994] flex items-center justify-center">
                  <UserCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold">For Adults</h3>
              </div>
              <p className="text-muted-foreground font-medium italic">Adults may seek therapy when they:</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Feel stressed or emotionally overwhelmed",
                  "Experience anxiety or depression",
                  "Face relationship or family challenges",
                  "Need support with parenting",
                  "Feel stuck or uncertain about life decisions",
                  "Experience low confidence or self-doubt",
                  "Want to understand themselves better"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-black/20 shadow-sm border border-black/5">
                    <CheckCircle2 size={18} className="text-[#c95994] shrink-0" />
                    <p className="text-sm font-medium text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
              <p className="p-6 bg-white dark:bg-black/20 rounded-2xl border-l-4 border-[#4cbbcc] text-sm italic font-medium">
                "Sometimes people come to therapy not only during difficult times, but also when they want personal growth and emotional balance."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THERAPEUTIC PHILOSOPHY --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Therapeutic <span className="text-[#4cbbcc] italic">Philosophy</span></h2>
             <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
                <p>
                  At సKALA, we believe therapy should feel safe, respectful, and supportive.
                </p>
                <p>
                  Building trust is an important part of the therapy process, and we take time to understand each individual’s experiences and needs.
                </p>
                <p>
                  Our therapists provide a warm and non-judgmental environment where individuals feel comfortable sharing at their own pace.
                </p>
                <p className="text-foreground font-bold">
                  We believe that each person is unique, and therapy is always tailored to individual needs and life situations.
                </p>
             </div>
          </div>

          <div className="lg:col-span-7 bg-[#f5f5f7] dark:bg-white/5 p-10 md:p-16 rounded-[4rem]">
            <h3 className="text-3xl font-bold text-[#c95994] mb-10">Evidence-Based and Growth-Oriented</h3>
            <p className="text-muted-foreground mb-10 font-medium leading-relaxed">
              Our psychotherapy services are based on well-established and research-supported approaches. Therapy is planned carefully to suit the age, needs, and goals of each individual. We focus not only on reducing difficulties but also on helping individuals develop emotional strength and long-term coping skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Cognitive-based strategies for thinking patterns",
                "Play and activity-based methods",
                "Techniques for stress and anxiety",
                "Emotional awareness and expression",
                "Building confidence and self-understanding",
                "Developing healthy coping skills",
                "Supporting positive personal growth"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4cbbcc] group-hover:scale-125 transition-transform" />
                  <p className="text-sm font-bold text-foreground/80">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INTEGRATED MENTAL WELLNESS --- */}
      <section className="py-24 px-6 bg-[#0a0a0b] text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c95994]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Integrated Mental Wellness</h2>
          <div className="space-y-8 text-lg text-white/70 leading-relaxed font-medium">
            <p>At సKALA, psychotherapy is part of a broader approach to overall well-being.</p>
            <p>
              We look at the individual as a whole, considering emotional, social, and developmental needs together. Our integrated approach may include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-6">
              {[
                "Helping individuals understand emotions",
                "Awareness of body-behavior connection",
                "Supporting social & relationship skills",
                "Encouraging healthy routines & balance",
                "Coordinating support across services"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                  <ShieldCheck size={20} className="text-[#4cbbcc] shrink-0" />
                  <p className="text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="pt-10 text-white/60 text-base italic">
              "This holistic approach helps ensure that emotional growth is supported in a meaningful and practical way."
            </p>
          </div>
        </div>
      </section>

      {/* --- EMPOWERING THE SUPPORT SYSTEM --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">Empowering the Support System</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
              <p>We believe that meaningful progress happens when individuals feel supported in their everyday environments.</p>
              <p>We guide parents, caregivers, and family members in understanding emotional needs and responding in supportive ways.</p>
              <p>Creating a positive and understanding environment at home and in daily life helps strengthen the benefits of therapy.</p>
              <p className="font-bold text-[#c95994]">Support and understanding from close relationships can make a lasting difference in emotional well-being.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-12 bg-[#4cbbcc]/5 rounded-[4rem] text-center">
             <Heart size={64} className="text-[#c95994] mb-8" />
             <p className="text-2xl md:text-4xl font-bold tracking-tight italic leading-tight text-foreground">
               "At సKALA, we don't just treat symptoms — we nurture the soul, empowering every young person to walk through the world with a courageous heart."
             </p>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="pb-32 px-6">
        <GlassCard className="max-w-4xl mx-auto p-12 md:p-24 text-center bg-gradient-to-br from-[#c95994] to-[#4cbbcc] text-white border-none rounded-[4rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 tracking-tight">Ready to begin your journey?</h2>
          <button 
            onClick={handleConsultation}
            className="relative z-10 bg-white text-[#c95994] px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
          >
            Schedule a Consultation
          </button>
        </GlassCard>
      </section>

    </div>
  );
};

export default Psychotherapy;