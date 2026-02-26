import { motion } from "framer-motion";
import { 
  Brain, Heart, Puzzle, Users, CheckCircle2, MessageCircle, 
  PlayCircle, ShieldCheck, Search, ClipboardList, TrendingUp, 
  GraduationCap, Stethoscope, Briefcase, UserCheck, Calendar,
  ArrowRight, FileText, Activity,Sparkles
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const Behavioral = () => {
  const handleConsultation = () => {
    window.open(`https://wa.me/917842495577?text=${encodeURIComponent("Hello! I am interested in Behavior Therapy and Psychological Assessments.")}`, "_blank");
  };

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0b] pt-32 font-sans overflow-x-hidden">
      
      {/* --- SECTION 1: BEHAVIOR THERAPY HERO --- */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05]">
                Behavior <br/><span className="text-[#c95994] italic font-medium">Therapy</span>
             </h1>
             <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-medium mb-10 max-w-lg">
               <p>
                 At సKALA, we view behavior as a form of communication.
               </p>
               <p className="text-lg">
                 Our Behavior Therapy services are designed to help children navigate the world with emotional balance, independence, and a sense of belonging.
               </p>
             </div>
             <div className="p-6 rounded-3xl bg-[#4cbbcc]/5 border-l-4 border-[#4cbbcc] mb-10">
                <p className="text-sm font-bold uppercase tracking-widest text-[#4cbbcc] mb-2">Who we support:</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Autism Spectrum Disorder (ASD), Attention Deficit Hyperactivity Disorder (ADHD), Cognitive Skill Deficits, Emotional and Social challenges, sensory processing needs, and various behavioral challenges.
                </p>
             </div>
             <button 
                onClick={handleConsultation}
                className="bg-[#4cbbcc] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-[#4cbbcc]/20"
             >
               <Calendar size={18} /> Book Consultation
             </button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10">
             <img src="/behavioral.jpg" alt="Behavior Therapy" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#4cbbcc]/10" />
          </motion.div>
        </div>
      </section>

      {/* --- UNDERSTANDING THE WHY --- */}
      <section className="py-24 px-6 bg-[#f5f5f7] dark:bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase tracking-widest text-[#c95994]">Understanding the "Why"</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Behavior therapy is not about control; it is about understanding the underlying needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Self-Regulate", text: "Emotions and manage big feelings effectively" },
              { icon: Puzzle, title: "Develop Independence", text: "In daily routines and self-care" },
              { icon: Users, title: "Master Social Skills", text: "To interact meaningfully with others" },
              { icon: CheckCircle2, title: "Functional Skills", text: "Replace challenges with skills that build confidence" }
            ].map((item, i) => (
              <GlassCard key={i} className="p-8 border-none bg-white dark:bg-black/40 rounded-[2.5rem] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#4cbbcc]/10 text-[#4cbbcc] flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROFESSIONAL APPROACH & EVIDENCE --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <h3 className="text-3xl md:text-4xl font-bold">Our Professional Approach</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
              <p>
                Our therapy is provided by certified professionals who specialize in neurodevelopmental care.
              </p>
              <p>
                With a focus on ethical, compassionate practice, we create a safe environment where children feel understood rather than judged.
              </p>
              <p>
                We ensure that every intervention respects the child’s dignity and personality.
              </p>
            </div>
            
            <div className="pt-10 border-t border-black/5">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4cbbcc] mb-6">Holistic Development</h4>
              <p className="text-muted-foreground mb-8">Integrated within our Learning & Development Center, behavior therapy works hand-in-hand with other supports. We utilize:</p>
              <div className="space-y-4">
                {[
                  { title: "Visual Schedules", desc: "To provide predictability and reduce anxiety" },
                  { title: "Sensory Strategies", desc: "To help children stay calm and focused" },
                  { title: "Social Scripts", desc: "To help navigate complex social interactions" }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#4cbbcc] group-hover:scale-125 transition-transform" />
                    <p className="text-foreground/80 font-bold text-sm">{item.title}: <span className="font-medium text-muted-foreground">{item.desc}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f7] dark:bg-white/5 p-10 md:p-16 rounded-[4rem]">
            <h3 className="text-3xl font-bold text-[#c95994] mb-10">Evidence-Based & Neuro-Affirming</h3>
            <p className="text-muted-foreground mb-10">We use modern, research-supported strategies that prioritize the child's well-being. Our approach is:</p>
            <div className="space-y-8">
              {[
                { title: "Positive Reinforcement", desc: "We focus on celebrating strengths and small wins" },
                { title: "Child-Led & Play-Based", desc: "We use the child's natural interests to teach new skills, ensuring therapy is engaging and never forced" },
                { title: "Neuro-Affirming", desc: "We celebrate different ways of thinking and moving, focusing on support rather than 'fixing' the child" }
              ].map((point, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-xl font-bold text-foreground flex items-center gap-3">
                    <Sparkles size={20} className="text-[#c95994]" /> {point.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-8">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAMILY CENTERED SUPPORT --- */}
      <section className="py-24 px-6 bg-[#0a0a0b] text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4cbbcc]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Family-Centered Support</h2>
          <div className="space-y-8 text-lg text-white/70 leading-relaxed font-medium">
            <p>We believe parents and caregivers are the true experts on their children.</p>
            <p>
              We provide families with the tools and strategies needed to create a supportive environment at home, ensuring that positive changes are sustainable and life-changing.
            </p>
            <div className="pt-10">
              <p className="text-2xl md:text-3xl font-bold text-[#4cbbcc] italic">
                "At సKALA, we don’t just modify behavior—we empower children to grow into their most authentic selves."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PSYCHOLOGICAL ASSESSMENTS --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#c95994]/10 text-[#c95994] mb-6">
              <Search size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Psychological Assessments</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto leading-tight mb-8">
               A journey of <span className="text-[#4cbbcc] italic font-medium">Discovery.</span>
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              <p>At సKALA, we view assessment as a journey of discovery — a way to understand each person better, not just to define them by a label.</p>
              <p className="text-lg">It is about identifying strengths, understanding challenges, and creating a clear plan for growth.</p>
              <p className="text-lg">We work with children, adolescents, and adults, helping families and individuals move from confusion to clarity from “What is happening?” to “What can we do next?”.</p>
              <p className="text-foreground font-bold italic">Our goal is to provide practical guidance, not just a report.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
            <div>
              <h3 className="text-3xl font-bold mb-10">Our Assessment Philosophy</h3>
              <p className="text-lg text-muted-foreground mb-10">We approach every evaluation with empathy, clinical precision, and deep respect for the child’s comfort.</p>
              <div className="space-y-4">
                {[
                  { t: "Strength-Based Approach", d: "We focus not only on difficulties but also on natural abilities, talents, and strengths" },
                  { t: "Individualized Evaluation", d: "Each person is unique. Assessments are customized based on age, concerns, and needs" },
                  { t: "Holistic Understanding", d: "We consider emotional, behavioral, cognitive, social, and environmental factors — not just symptoms" },
                  { t: "Clear and Practical Reports", d: "Reports are easy to understand and include clear recommendations for home, school, workplace, or therapy" },
                  { t: "Parent & Family Guidance", d: "We provide feedback sessions to explain results and next steps" },
                  { t: "Confidential & Ethical Practice", d: "All assessments are conducted with strict confidentiality and professional ethics" },
                  { t: "Online & Offline Options", d: "We offer in-person and selected online assessments where appropriate" },
                  { t: "Follow-Up Planning", d: "Assessment is the first step. We guide you toward therapy, training, or intervention" }
                ].map((item) => (
                  <div key={item.t} className="flex gap-4 group">
                    <CheckCircle2 size={18} className="text-[#4cbbcc] mt-1 shrink-0" />
                    <p className="text-sm font-bold text-foreground/80">{item.t}: <span className="font-medium text-muted-foreground">{item.d}</span></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-10 rounded-[3rem] bg-[#f5f5f7] dark:bg-white/5 border border-black/5">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="text-[#4cbbcc]" /> The Assessment Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our licensed psychologists use standardized, evidence-based tools to understand each individual clearly and accurately. We assess children, adolescents, and adults with care, professionalism, and respect.
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-[#c95994]/5 border border-[#c95994]/10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#c95994] mb-8">Types of Assessments We Offer</h4>
                <div className="space-y-4">
                  {[
                    "Developmental & Diagnostic Assessments : For Autism (ASD), ADHD, developmental delays, and attention or executive functioning concerns", "Cognitive & IQ Testing: To understand intellectual abilities, strengths, memory, and learning styles.", 
                    "Educational & Psycho-educational Assessments:To identify Dyslexia, Dyscalculia, Dysgraphia, and academic challenges", "Social, Emotional & Behavioral Assessment:To evaluate anxiety, depression, mood, stress, anger, and behavioral concerns.",
                    "Adult Psychological Assessments:For workplace stress, burnout, personality patterns, relationship difficulties, and mental health screening", "Personality Assessment:To understand personality traits, coping styles, and interpersonal patterns.",
                    "Career & Vocational Guidance:To identify interests, aptitude, and suitable career paths", "Parenting & Family Assessment:To understand family dynamics and child-parent interactions.",
                    "Screening & Early Identification:Early detection of developmental, emotional, or behavioral concerns."
                  ].map((type) => (
                    <div key={type} className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-wide">
                      <ArrowRight size={14} className="text-[#c95994]" /> {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PROCESS TABLE */}
          <div className="mb-32">
            <h3 className="text-3xl font-bold mb-16 text-center">What the Process Looks Like</h3>
            <div className="overflow-x-auto rounded-[2rem] border border-black/5">
              <table className="w-full text-left border-collapse bg-white dark:bg-black/20">
                <thead>
                  <tr className="bg-[#f5f5f7] dark:bg-white/5">
                    <th className="p-8 text-sm font-bold uppercase tracking-widest text-[#4cbbcc]">Stage</th>
                    <th className="p-8 text-sm font-bold uppercase tracking-widest text-[#4cbbcc]">What to Expect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {[
                    { s: "Initial Consultation", e: "Understanding concerns, history, strengths, and goals (with parents for children; directly with adolescents and adults)" },
                    { s: "Clinical Interview", e: "In-depth discussion of emotional, behavioral, academic, social, or workplace concerns" },
                    { s: "Observation", e: "Natural or structured observation for children; functional observation for adults" },
                    { s: "Standardized Testing", e: "Age-appropriate tools to assess cognitive abilities, learning, attention, personality, and emotional functioning" },
                    { s: "Analysis & Interpretation", e: "Professional scoring and interpretation to identify strengths and areas needing support" },
                    { s: "Comprehensive Report", e: "Clear, easy-to-understand report with practical recommendations" },
                    { s: "Feedback & Guidance Session", e: "Collaborative discussion to plan therapy, accommodations, skill-building, or referrals" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#4cbbcc]/5 transition-colors">
                      <td className="p-8 font-bold text-foreground">{row.s}</td>
                      <td className="p-8 text-muted-foreground leading-relaxed">{row.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* BEYOND THE DIAGNOSIS */}
          <div className="text-center max-w-4xl mx-auto py-20 border-t border-black/5">
             <h3 className="text-3xl font-bold mb-8">Beyond the Diagnosis</h3>
             <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
               <p>Assessment is not just about giving a label. Our reports are practical and actionable.</p>
               <p>Recommendations can be implemented at home, in school or college, at the workplace, in relationships, and in therapy or intervention programs.</p>
               <p>We focus on strengths, growth, and long-term well-being. We don’t just provide answers — we provide direction.</p>
               <div className="pt-10">
                 <p className="text-3xl font-bold text-[#c95994] tracking-tight italic">
                    "At సKALA, we don't just provide answers; we provide a way forward."
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="pb-32 px-6">
        <GlassCard className="max-w-4xl mx-auto p-12 md:p-24 text-center bg-gradient-to-br from-[#c95994] to-[#4cbbcc] text-white border-none rounded-[4rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Start your discovery journey today.</h2>
          <button 
            onClick={handleConsultation}
            className="relative z-10 bg-white text-[#c95994] px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
          >
            Request an Evaluation
          </button>
        </GlassCard>
      </section>

    </div>
  );
};

export default Behavioral;