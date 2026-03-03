import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, Music, Users, HeartPulse, ShieldCheck, 
  MessageSquare, Anchor, GraduationCap, Search, 
  Smile, Zap, Compass, Globe, Calendar, ArrowRight,
  Sparkles, Paintbrush, Mic2, Home
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const Workshops = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const handleJoinCircle = () => {
    window.open(`https://wa.me/917842495577?text=${encodeURIComponent("Hello! I am interested in joining the సKALA Workshop Circle.")}`, "_blank");
  };

  return (
    <div ref={containerRef} className="w-full bg-white dark:bg-[#0a0a0b] font-sans selection:bg-[#4cbbcc]/30 overflow-x-hidden">
      
      {/* --- PREMIUM HERO: SCROLL-REVEAL --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]), scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.9]) }}
          className="container mx-auto px-6 z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4cbbcc] mb-6 block">Beyond the Therapy Room</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none text-[#2d2d2d] dark:text-white">
              Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c95994] to-[#4cbbcc] italic">Horizons.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Where learning, expression, and connection converge for every individual.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-[#4cbbcc]/10 blur-[120px] rounded-full" 
          />
        </div>
      </section>

      {/* --- 1. PARENT EMPOWERMENT: BENTO REVEAL --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#c95994] font-bold text-xs tracking-widest mb-4">01. Parent Empowerment Series (PES)</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight dark:text-white">From "Managing" <br/> to <span className="italic font-medium text-[#4cbbcc]">Connecting.</span></h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Parenting a neurodivergent child requires a unique toolkit. Our workshops move away from clinical jargon to provide practical, heart-centered strategies.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {[
              { icon: Home, t: "The Sensory Home", d: "Transforming your living space into a sensory-friendly sanctuary." },
              { icon: MessageSquare, t: "Communication Beyond Words", d: "Learning to read the subtle cues and \"language\" of behavior." },
              { icon: HeartPulse, t: "The Caregiver’s Anchor", d: "Dedicated sessions on parental mental health, burnout prevention, and mindfulness." },
              { icon: GraduationCap, t: "Advocacy Training", d: "How to effectively collaborate with schools and medical professionals." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 group border-none bg-[#f5f5f7] dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 rounded-[2.5rem] flex items-center gap-8 shadow-none hover:shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black/20 shadow-inner flex items-center justify-center text-[#4cbbcc] group-hover:bg-[#4cbbcc] group-hover:text-white transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight text-[#2d2d2d] dark:text-white">{item.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.d}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. CHILD & ADOLESCENT: LOGO BRANDED SECTION --- */}
      <section className="py-32 px-6 bg-[#c95994]/5 dark:bg-[#c95994]/10 rounded-[4rem] mx-4 overflow-hidden relative border border-[#c95994]/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-[#c95994] font-bold text-xs tracking-[0.3em] mb-4">02. Child & Adolescent Workshops</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2d2d2d] dark:text-white">Skill-Building Through <span className="italic text-[#c95994]">Play.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Search, t: "Social Detectives", d: "Navigating social nuances, making friends, and understanding \"the hidden rules\" of play." },
              { icon: Smile, t: "Emotion Lab", d: "Helping children identify \"big feelings\" and building a personalized \"cool-down\" toolkit." },
              { icon: Zap, t: "Executive Function", d: "Game-based sessions on time management, organization, and planning for teens." }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -20 }}
                className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-[#c95994]/10 backdrop-blur-xl flex flex-col items-center text-center group shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4cbbcc] to-[#c95994] p-[1px] mb-8 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full rounded-full bg-white dark:bg-[#0a0a0b] flex items-center justify-center">
                    <card.icon size={32} className="text-[#4cbbcc]" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-[#2d2d2d] dark:text-white">{card.t}</h4>
                <p className="text-muted-foreground leading-relaxed font-medium">{card.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. CREATIVE STUDIO --- */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ y: 20 }} whileInView={{ y: -20 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl bg-[#f5f5f7] dark:bg-white/5 overflow-hidden border border-[#4cbbcc]/20">
                  <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Art Workshop" />
                </div>
                <div className="aspect-square rounded-3xl bg-[#c95994]/10 flex items-center justify-center text-[#c95994]">
                  <Paintbrush size={48} strokeWidth={1} />
                </div>
              </motion.div>
              <motion.div initial={{ y: -20 }} whileInView={{ y: 20 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="space-y-4 pt-12">
                <div className="aspect-square rounded-3xl bg-[#4cbbcc]/10 flex items-center justify-center text-[#4cbbcc]">
                  <Mic2 size={48} strokeWidth={1} />
                </div>
                <div className="aspect-[3/4] rounded-3xl bg-[#f5f5f7] dark:bg-white/5 overflow-hidden border border-[#c95994]/20">
                  <img src="/music.jpeg" className="w-full h-full object-cover" alt="Rhythm Workshop" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <h2 className="text-[#4cbbcc] font-bold text-xs tracking-widest mb-4">03. The Creative Expression Studio</h2>
              <h3 className="text-5xl font-bold mb-6 text-[#2d2d2d] dark:text-white">Where Words Aren't <br/><span className="italic text-[#c95994]">the Only Way.</span></h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">For many, traditional talk therapy has limits. Our creative workshops provide alternative pathways for the soul to speak.</p>
            </div>

            <div className="space-y-8">
              {[
                { t: "Art-Speak", d: "Guided process-art sessions focused on the act of creating, not the final product." },
                { t: "Movement & Rhythm", d: "Using dance and percussion to improve motor coordination and emotional release." },
                { t: "Narrative Journeys", d: "Storytelling and role-play workshops to \"script\" success stories." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group cursor-default">
                  <div className="text-2xl font-bold text-[#c95994]/30 group-hover:text-[#c95994] transition-colors">0{i+1}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 tracking-tight text-[#2d2d2d] dark:text-white">{item.t}</h4>
                    <p className="text-muted-foreground font-medium text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. MENTAL HEALTH: CYAN THEMED --- */}
      <section className="py-32 px-6 bg-[#4cbbcc]/5 dark:bg-[#4cbbcc]/10 rounded-[4rem] mx-4 overflow-hidden border border-[#4cbbcc]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[#4cbbcc] font-bold text-xs tracking-widest mb-4">04. Mental Health & Wellness for All</h2>
            <h3 className="text-4xl font-bold text-[#2d2d2d] dark:text-white">Demystifying Mind’s Health</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, t: "Neurodiversity 101", d: "Sensitizing the community to the beauty of different minds." },
              { icon: Compass, t: "Stress Management", d: "Practical tools for exam anxiety and social media pressure." },
              { icon: HeartPulse, t: "The Power of Inclusion", d: "Workshops for educators on how to be a \"safe person\" for children." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-12 rounded-[4rem] bg-white dark:bg-white/5 shadow-xl shadow-[#4cbbcc]/5 flex flex-col items-start gap-8 border border-[#4cbbcc]/5"
              >
                <item.icon size={40} className="text-[#4cbbcc]" strokeWidth={1.5} />
                <h4 className="text-2xl font-bold leading-tight text-[#2d2d2d] dark:text-white">{item.t}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOIN THE CIRCLE --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto p-10 md:p-20 rounded-[4rem] bg-gradient-to-br from-[#fdfdfd] to-[#f5f5f7] dark:from-white/5 dark:to-white/10 border border-[#c95994]/20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#c95994]/5 to-[#4cbbcc]/5 opacity-50" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-[#2d2d2d] dark:text-white">Join the <br/><span className="italic text-[#4cbbcc]">సKALA Circle.</span></h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether seeking clarity, a friend, or creative release, our workshops are the bridge to your next breakthrough.
            </p>
            <button 
              onClick={handleJoinCircle}
              className="px-8 py-4 rounded-full bg-[#c95994] text-white font-bold text-sm hover:bg-[#4cbbcc] transition-all duration-500 shadow-xl shadow-[#c95994]/30 group flex items-center justify-center gap-3 mx-auto"
            >
              Explore Upcoming Workshops <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="mt-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#2d2d2d]/30 dark:text-white/30">
              We cultivate the confidence to use your skills
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Workshops;