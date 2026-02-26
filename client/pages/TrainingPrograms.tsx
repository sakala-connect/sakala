import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Heart, Lightbulb, ShieldCheck, 
  GraduationCap, Waypoints, School, 
  Target, BookOpen, Search,
  ClipboardList, MessageCircle, UserCheck, FileText,
  Sparkles, ArrowRight, MousePointerClick, Microscope
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const programs = [
  {
    id: "collaborative",
    title: "Parent Training",
    label: "Our Collaborative Approach",
    color: "#c95994",
    icon: Users
  },
  {
    id: "shadow",
    title: "Shadow Teacher",
    label: "Shadow Teacher Support",
    color: "#4cbbcc",
    icon: Waypoints
  },
  {
    id: "internship",
    title: "Internships",
    label: "Internship Opportunities",
    color: "#4ecc74",
    icon: GraduationCap
  }
];

const TrainingPrograms = () => {
  const [activeTab, setActiveTab] = useState("collaborative");

  const handleContact = (subject: string) => {
    window.open(`https://wa.me/917842495577?text=${encodeURIComponent(`Hello! I am interested in the ${subject} program.`)}`, "_blank");
  };

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0b] min-h-screen pt-32 font-sans overflow-hidden">
      
      {/* --- HERO / INSTRUCTION --- */}
      <section className="px-6 max-w-7xl mx-auto mb-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Growth & <span className="text-[#4cbbcc] italic font-medium">Capacity.</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-[#c95994] font-bold animate-pulse">
            <MousePointerClick size={20} />
            <span className="text-sm uppercase tracking-widest font-inter tracking-tighter">Select a program below to explore</span>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-32">
        
        {/* --- NAVIGATION: SIDEBAR (Desktop) / TOP BAR (Mobile) --- */}
        <aside className="lg:col-span-3">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 sticky top-32">
            {programs.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`flex-shrink-0 flex items-center gap-4 p-6 rounded-[2rem] transition-all duration-500 border ${
                  activeTab === prog.id 
                  ? "bg-white dark:bg-white/5 shadow-xl border-black/5 scale-105" 
                  : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: activeTab === prog.id ? prog.color : "#cbd5e1" }}
                >
                  <prog.icon size={24} />
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 leading-none mb-1">Explore</p>
                  <h3 className="font-bold text-sm leading-tight">{prog.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* --- CONTENT AREA --- */}
        <main className="lg:col-span-9 relative min-h-[600px]">
          <AnimatePresence mode="wait">
            
            {/* 1. COLLABORATIVE APPROACH CONTENT */}
            {activeTab === "collaborative" && (
              <motion.div
                key="collab"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-12"
              >
                <section>
                  <h2 className="text-3xl font-bold mb-6 text-[#c95994]">Our Collaborative Approach</h2>
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-medium max-w-3xl">
                    <p>We don't just give advice; we build capacity. Our training sessions are led by experienced specialists who understand the complexities of neurodiversity and emotional development.</p>
                    <p>We offer a non-judgmental space where your experiences are validated and your expertise on your own child is respected.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Empowering & Skill-Based</h3>
                  <p className="text-muted-foreground mb-6">Our training modules are evidence-based and tailored to your family's unique lifestyle. We focus on:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { t: "Hands-On Strategies", d: "Practice specific techniques for transitions, mealtime, or social outings before applying them at home." },
                      { t: "Neuro-Affirming Perspectives", d: "Moving away from \"compliance\" toward \"connection,\" respecting your child's unique way of experiencing the world." },
                      { t: "Sustainable Habits", d: "We focus on small, manageable changes that prevent burnout and create long-term harmony." },
                      { t: "The \"Why\" Behind the \"What\"", d: "Understanding the neurology of development so you can respond with empathy rather than frustration." }
                    ].map((item, i) => (
                      <GlassCard key={i} className="p-6 border-none bg-[#f5f5f7] dark:bg-white/5 rounded-2xl">
                        <h4 className="font-bold text-sm mb-2 text-[#c95994]">{item.t}</h4>
                        <p className="text-[12px] text-muted-foreground leading-relaxed">{item.d}</p>
                      </GlassCard>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">The Circle of Support</h3>
                  <p className="text-muted-foreground mb-6">Integrated within our Learning & Development Center, caregiver training ensures that the progress made in therapy is carried over into the home. We utilize:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { icon: Lightbulb, t: "Visual Strategy Workshops", d: "Learn how to create custom visual schedules and choice boards for your home." },
                      { icon: Heart, t: "Sensory Integration Coaching", d: "Understand your child's sensory profile and how to adapt your home environment to meet their needs." },
                      { icon: Waypoints, t: "Communication Bridge", d: "Tools to ensure that the goals set in the center are consistently supported by the family." }
                    ].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <item.icon className="text-[#4cbbcc]" size={24} />
                        <h4 className="font-bold text-sm">{item.t}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="p-10 rounded-[3rem] bg-[#0a0a0b] text-white">
                  <h3 className="text-xl font-bold mb-4">Family-Led Growth</h3>
                  <div className="space-y-4 text-sm text-white/60 leading-relaxed max-w-3xl">
                    <p>We believe that when parents feel supported, children flourish. Our training provides a community of understanding, giving you the tools to not only support your child’s development but also to protect your own well-being and the health of the entire family unit.</p>
                    <p className="text-[#4cbbcc] font-bold text-lg italic pt-4">
                      "At సKALA, we don’t just work with children; we empower families to grow together, building a legacy of understanding and unconditional support."
                    </p>
                  </div>
                </section>
              </motion.div>
            )}

            {/* 2. SHADOW TEACHER CONTENT */}
            {activeTab === "shadow" && (
              <motion.div
                key="shadow"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-12"
              >
                <section>
                  <h2 className="text-3xl font-bold mb-6 text-[#4cbbcc]">Shadow Teacher Support</h2>
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-medium max-w-3xl">
                    <p>At సKALA, we believe every child deserves to participate fully in their educational journey. Our Shadow Teacher Support (also known as Learning Support Assistants) provides the essential bridge between a child’s individual needs and the classroom environment.</p>
                    <p>We don't just provide a "helper"; we provide a skilled facilitator of independence.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">The Bridge to Inclusion</h3>
                  <p className="text-muted-foreground mb-6">A shadow teacher at సKALA acts as a vital link, ensuring that the classroom becomes a space of success rather than a source of stress. Our focus is on helping the child:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { t: "Navigate the Curriculum", d: "Adapting classroom instructions in real-time to match the child's learning style." },
                      { t: "Foster Social Integration", d: "Facilitating meaningful interactions with peers while fading support as the child gains confidence." },
                      { t: "Maintain Focus & Regulation", d: "Implementing sensory and behavioral strategies discreetly within the school day." },
                      { t: "Build Executive Function", d: "Helping the child organize their materials, manage transitions, and follow school routines." }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-[#f5f5f7] dark:bg-white/5 rounded-2xl border-l-4 border-[#c95994]">
                        <h4 className="font-bold text-sm mb-1">{item.t}</h4>
                        <p className="text-xs text-muted-foreground">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Our Professional Standards</h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-8">
                    Our shadow teachers are trained professionals who operate under the guidance of our senior therapists. We believe in "empowerment over hovering"—the goal is never to make the child dependent on the shadow, but to build the skills necessary for the child to eventually thrive independently.
                  </p>
                  <h4 className="text-lg font-bold mb-4 text-[#4cbbcc]">A Collaborative & Targeted Approach</h4>
                  <p className="text-muted-foreground mb-6">We work in total sync with schools, teachers, and parents to create a unified support system. Our approach is:</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { t: "IEP Driven", d: "We actively work toward specific academic and social milestones." },
                      { t: "Discreet Support", d: "Using \"least intrusive\" methods to ensure the child feels natural." },
                      { t: "Data-Informed", d: "Tracking progress daily to adjust strategies based on what is working." },
                      { t: "Strengths-Based", d: "Highlighting child’s abilities to foster a culture of true inclusion." }
                    ].map((item, i) => (
                      <div key={i} className="text-center p-4">
                        <h5 className="font-bold text-[10px] uppercase tracking-widest text-[#c95994] mb-2">{item.t}</h5>
                        <p className="text-[10px] text-muted-foreground">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-[#f5f5f7] dark:bg-white/5 p-10 rounded-[3rem]">
                  <h3 className="text-xl font-bold mb-6">Integrated School Support</h3>
                  <p className="text-muted-foreground mb-6">Beyond physical presence in the classroom, our shadow teaching program is backed by the full resources of our Learning & Development Center:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { icon: School, t: "Environmental Audits", d: "We help schools modify classroom settings (lighting, seating, visuals) to better suit needs." },
                      { icon: Users, t: "Peer Sensitivity Training", d: "We provide guidance on fostering an inclusive culture among classmates." },
                      { icon: ClipboardList, t: "Regular Progress Reviews", d: "Monthly meetings with parents and staff to ensure alignment on growth." }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <item.icon className="text-[#4cbbcc]" size={20} />
                        <h4 className="font-bold text-sm">{item.t}</h4>
                        <p className="text-xs text-muted-foreground">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4">Empowering the Future</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-6">The ultimate success of a shadow teacher is measured by their becoming unnecessary. We celebrate the "small wins" of independence, from a child raising their hand for the first time to them navigating the playground without assistance.</p>
                  <p className="text-[#c95994] font-bold italic text-lg leading-relaxed">
                    "At సKALA, our shadow teachers are the scaffolding that allows a child to build their own bridge to a bright, inclusive future."
                  </p>
                </section>
              </motion.div>
            )}

            {/* 3. INTERNSHIP CONTENT */}
            {activeTab === "internship" && (
              <motion.div
                key="intern"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-12"
              >
                <section>
                  <h2 className="text-3xl font-bold mb-2 text-[#4ecc74]">Internship Opportunities</h2>
                  <h3 className="text-xl font-bold mb-6 italic text-muted-foreground">Shaping the Next Generation of Clinicians</h3>
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-medium max-w-3xl">
                    <p>At సKALA, we believe that the future of neuro-affirming care lies in the hands of passionate, well-trained students. Our internship programs in Psychology, Behavior Therapy, and Speech-Language Therapy are designed to bridge the gap between academic theory and compassionate, real-world clinical practice.</p>
                    <p>We don't offer "observation-only" roles; we provide a structured immersion into a multidisciplinary environment where interns learn to see the person behind the diagnosis.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-6">The Pillars of Our Internship Program</h3>
                  <p className="text-muted-foreground mb-6">An internship at సKALA is a rigorous journey of professional and personal growth. Our interns are trained to:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { t: "Master Clinical Observation", d: "Learn to identify nuanced behavioral patterns through a strengths-based lens." },
                      { t: "Bridge Theory to Practice", d: "Apply evidence-based protocols in a dynamic, child-centric setting." },
                      { t: "Contribute to IEPs", d: "Participate in development and tracking of Plans under expert supervision." },
                      { t: "Understand multidisciplinary Care", d: "Work alongside a diverse team of Speech, Behavior, and Occupational therapies." }
                    ].map((item, i) => (
                      <div key={i} className="p-6 border border-black/5 rounded-2xl flex flex-col items-center text-center bg-[#f5f5f7] dark:bg-white/5">
                        <h4 className="font-bold text-xs mb-2 text-[#4ecc74] uppercase tracking-widest">{item.t}</h4>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-6">Our Professional Standards: Mentorship Over Monitoring</h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-8">
                    Our interns operate under the direct mentorship of senior therapists. We believe in "guided autonomy"—as you prove your competence, you are given greater responsibility in session facilitation and data collection.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { t: "Evidence-Based Learning", d: "Regular \"Case Study Circles\" where interns present findings and receive clinical feedback." },
                      { t: "Ethics & Sensitivity", d: "Deep-dive training into ethics of pediatric care and parental counseling." },
                      { t: "Resource Creation", d: "Interns help design visual aids and sensory tools used in active therapy." }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="font-bold text-sm text-[#4ecc74]">{item.t}</h4>
                        <p className="text-xs text-muted-foreground">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-[#0a0a0b] text-white p-10 rounded-[3rem]">
                  <h3 className="text-xl font-bold mb-6">A Collaborative & Data-Driven Experience</h3>
                  <p className="text-sm text-white/60 mb-6">We treat our interns as a vital part of our clinical engine. Your experience at సKALA will be:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { icon: UserCheck, t: "Discreet & Respectful", d: "Learning how to provide support without stigmatizing the child." },
                      { icon: MessageCircle, t: "Feedback-Rich", d: "Weekly 1-on-1 supervision meetings to discuss professional development." },
                      { icon: School, t: "Community Focused", d: "Involvement in Peer Sensitivity and school audit programs." }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <item.icon className="text-[#4cbbcc]" size={20} />
                        <h4 className="font-bold text-sm">{item.t}</h4>
                        <p className="text-xs text-white/40">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="text-center py-8 border-t border-black/5">
                  <h3 className="text-2xl font-bold mb-4">Empowering Your Career</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">The ultimate success of a సKALA internship is seeing a student transform into a confident, empathetic professional. We celebrate your milestones—from your first successful rapport-building session to the moment you accurately interpret a complex clinical data set.</p>
                  <p className="text-[#4cbbcc] font-bold text-lg italic leading-relaxed mb-10">
                    "At సKALA, our interns are not just observers; they are the future architects of a more inclusive world."
                  </p>
                  <button 
                    onClick={() => handleContact("Internship")}
                    className="bg-[#c95994] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                  >
                    Apply for Internship
                  </button>
                </section>
              </motion.div>
            )}

          </AnimatePresence>
        </main>
      </div>

      {/* --- PARALLAX FLOATING DECO --- */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed bottom-10 right-10 w-24 h-24 bg-[#4cbbcc]/10 blur-3xl rounded-full -z-10"
      />
    </div>
  );
};

export default TrainingPrograms;