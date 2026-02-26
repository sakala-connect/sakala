import { motion } from "framer-motion";
import { 
  Speech, MessageSquare, Users, Heart, ClipboardCheck, 
  Search, FileText, PlayCircle, ShieldCheck, Home, 
  Smartphone, BookOpen, Calendar, ArrowRight, Sparkles, Target
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const SpeechTherapy = () => {
  const handleConsultation = () => {
    window.open(`https://wa.me/917842495577?text=${encodeURIComponent("Hello! I am interested in Speech Therapy services for my child.")}`, "_blank");
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
                Speech Therapy <br/><span className="text-[#c95994] italic font-medium">at సKALA</span>
             </h1>
             <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-medium mb-10 max-w-lg">
               <p>
                 At సKALA, speech therapy is centered on helping children develop meaningful and effective ways to communicate in everyday life.
               </p>
               <p className="text-lg">
                 Communication is viewed as more than speech alone — it includes understanding language, expressing thoughts and needs, engaging with others, and participating confidently in daily experiences.
               </p>
             </div>
             <button 
                onClick={handleConsultation}
                className="bg-[#4cbbcc] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-[#4cbbcc]/20"
             >
               <Calendar size={18} /> Book Consultation
             </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10"
          >
             <img src="/speech.jpg" alt="Speech Therapy" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#4cbbcc]/10" />
          </motion.div>
        </div>
      </section>

      {/* --- UNDERSTANDING COMMUNICATION --- */}
      <section className="py-24 px-6 bg-[#f5f5f7] dark:bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase tracking-widest text-[#c95994]">Understanding Communication</h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground max-w-4xl mx-auto font-medium">
              <p>Our goal is to support each child in developing communication that is functional, meaningful, and personally relevant, enabling them to connect with the people and environments around them.</p>
              <p>Speech therapy supports children in developing reliable and meaningful ways to communicate, guided by their individual characteristics, strengths, and developmental needs.</p>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold mb-12 text-center">Why Speech Therapy Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard className="p-8 border-none bg-white dark:bg-black/40 rounded-[2.5rem]">
                <p className="text-sm leading-relaxed text-muted-foreground">Communication is a fundamental part of human development. When communication is challenging, it can influence many areas of a child’s life, including learning, social interaction, emotional expression, and behaviour.</p>
              </GlassCard>
              <GlassCard className="p-8 border-none bg-white dark:bg-black/40 rounded-[2.5rem]">
                <p className="text-sm leading-relaxed text-muted-foreground">Children who struggle to communicate may experience frustration or difficulty expressing their needs.</p>
              </GlassCard>
              <GlassCard className="p-8 border-none bg-white dark:bg-black/40 rounded-[2.5rem]">
                <p className="text-sm leading-relaxed text-muted-foreground">Supporting communication development helps children participate more confidently in daily routines and relationships. At సKALA, speech therapy focuses on building communication that supports real-life participation, independence, and confidence.</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO WE SUPPORT --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Who We <span className="text-[#4cbbcc] italic">Support</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Speech therapy services at సKALA support children with a wide range of communication needs, including speech and language delays, autism spectrum differences, developmental delays, intellectual disabilities, articulation difficulties, social communication challenges, and complex communication needs.
            </p>
            <p className="p-6 bg-[#4cbbcc]/5 rounded-2xl border-l-4 border-[#4cbbcc] font-bold italic">
              "Each child is viewed as an individual, and therapy is designed to reflect their unique developmental profile and communication style."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {/* Decorative icons for support areas */}
             {[Speech, MessageSquare, Users, Heart].map((Icon, i) => (
               <div key={i} className="aspect-square rounded-[2rem] bg-[#f5f5f7] dark:bg-white/5 flex items-center justify-center text-[#c95994]">
                  <Icon size={48} strokeWidth={1.5} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- OUR CLINICAL PROCESS --- */}
      <section className="py-32 px-6 bg-[#0a0a0b] text-white rounded-[4rem] mx-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">Our Clinical Process</h2>
          
          <div className="space-y-20">
            {[
              { 
                t: "Parent Consultation", 
                d: "The therapy journey begins with a detailed parent consultation. This process allows us to understand the child’s developmental history, communication patterns, behavioural concerns, and everyday experiences. Parents play a central role in the assessment process, as communication is best understood within the child’s natural environment." 
              },
              { 
                t: "Clinical Observation", 
                d: "Children are observed in a comfortable and supportive environment where spontaneous communication and interaction can be understood. Observation helps us identify how the child engages with people, responds to interaction, and communicates naturally. This stage provides valuable insight into the child’s strengths and communication style." 
              },
              { 
                t: "Assessment", 
                d: "Assessment is conducted using a combination of clinical observation and structured evaluation methods. When needed, standardized tools are used to understand receptive language, expressive language, speech development, social communication, and functional communication abilities. Assessment focuses on developing a comprehensive understanding of the child rather than identifying isolated difficulties." 
              },
              { 
                t: "Comprehensive Report", 
                d: "Following assessment, families receive a detailed and meaningful report that outlines the child’s communication profile. The report includes interpretation of findings, identified strengths, areas requiring support, and recommendations for intervention. Therapy goals are developed based on both clinical findings and everyday communication needs." 
              }
            ].map((step, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
                <div className="md:col-span-1 text-4xl font-bold text-[#4cbbcc]/40 group-hover:text-[#4cbbcc] transition-colors">0{i+1}</div>
                <div className="md:col-span-11 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{step.t}</h4>
                  <p className="text-white/60 leading-relaxed font-medium">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THERAPEUTIC APPROACH --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center uppercase tracking-widest text-[#c95994]">Our Therapeutic Approach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, t: "Evidence-Based Intervention", d: "Speech therapy at సKALA is guided by evidence-based practice, integrating research-supported methods with clinical expertise and the individual needs of the child. This ensures that intervention is both scientifically grounded and personally meaningful." },
            { id: 2, t: "Child-Led and Play-Based Therapy", d: "Therapy sessions are guided by the child’s interests and engagement. A child-led approach allows communication to develop within meaningful interactions rather than structured performance demands. Play serves as a natural and developmentally appropriate context for learning. Therapy is relationship-based rather than compliance-driven." },
            { id: 3, t: "Strength-Based Perspective", d: "Intervention focuses on recognising and building upon each child’s strengths. By supporting existing abilities, therapy promotes confidence and sustained engagement. A strength-based approach allows children to experience success while gradually developing new skills." },
            { id: 4, t: "Neurodiversity-Affirming Practice", d: "Speech therapy at సKALA follows a neurodiversity-affirming philosophy. Children may communicate and interact in different ways, and these differences are respected as part of natural human variation. The goal is not to change who the child is, but to support their ability to communicate." },
            { id: 5, t: "Functional and Meaningful Goals", d: "Therapy goals are developed based on the child’s everyday communication needs. Intervention focuses on communication that supports daily routines, social interaction, emotional expression, and participation in learning environments." },
            { id: 6, t: "Certified Professionals", d: "Speech therapy services at సKALA are provided by qualified Speech-Language Pathologists who are trained and certified under the Rehabilitation Council of India (RCI). Professional training ensures accurate assessment and ethical clinical practice." }
          ].map((item) => (
            <div key={item.id} className="p-10 rounded-[3rem] bg-[#f5f5f7] dark:bg-white/5 flex flex-col h-full border border-transparent hover:border-[#4cbbcc]/20 transition-all">
               <span className="text-xs font-bold text-[#4cbbcc] mb-4">0{item.id}</span>
               <h4 className="text-xl font-bold mb-6 leading-tight">{item.t}</h4>
               <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-10 rounded-[3rem] bg-[#c95994]/5 border-none flex flex-col md:flex-row items-center gap-8">
           <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black flex items-center justify-center text-[#c95994] shrink-0">
             <Users size={32} />
           </div>
           <div>
             <h4 className="text-xl font-bold mb-2">7. Parent Partnership and Open-Door Policy</h4>
             <p className="text-muted-foreground font-medium">At సKALA, parents are valued partners in the therapy process. We follow an open-door approach that encourages transparency, collaboration, and shared understanding. Parents are supported in understanding therapy goals and progress, creating continuity between sessions and everyday life.</p>
           </div>
        </div>
      </section>

      {/* --- HOME BASED SUPPORT --- */}
      <section className="py-32 px-6 bg-[#f5f5f7] dark:bg-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Home-Based Support and <span className="text-[#4cbbcc] italic">Generalization.</span></h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
                <p>Communication development does not occur only during therapy sessions. Families are supported through practical strategies that can be incorporated into everyday routines. Parent coaching helps caregivers create meaningful opportunities for communication throughout the day.</p>
                <p>Therapy at సKALA is not limited to the therapy room. Communication is a part of everyday life, and intervention focuses on helping children use communication skills across home, school, and community environments. Generalization of communication skills beyond structured sessions is an essential part of therapy.</p>
              </div>
           </div>
           <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" alt="Home Support" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#c95994]/10" />
           </div>
        </div>
      </section>

      {/* --- AAC SECTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="p-12 md:p-24 rounded-[4rem] bg-[#0a0a0b] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4cbbcc]/10 blur-[120px] rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
               <Smartphone size={80} className="text-[#4cbbcc] mb-8" strokeWidth={1} />
               <h3 className="text-2xl md:text-3xl font-bold">Augmentative and Alternative Communication (AAC)</h3>
            </div>
            <div className="lg:col-span-8 space-y-6 text-white/70 font-medium leading-relaxed">
              <p>For children who experience difficulty using speech as their primary mode of communication, Augmentative and Alternative Communication may be introduced as part of intervention.</p>
              <p>AAC systems are carefully selected based on the child’s communication profile and developmental needs. These may include visual supports, picture-based systems, communication boards, and speech-genering applications such as Avaz AAC.</p>
              <p>AAC provides children with reliable ways to express themselves and participate in interaction, particularly when verbal communication is challenging. AAC is integrated into therapy in a manner that supports the child’s communication development and is adapted over time as the child progresses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY CLOSING --- */}
      <section className="py-32 px-6 text-center max-w-5xl mx-auto">
         <h2 className="text-[#c95994] font-bold uppercase tracking-widest text-xs mb-8">Our Philosophy</h2>
         <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
           "Communication is not optional — <br/> it is a <span className="text-[#4cbbcc] italic">fundamental</span> part of life."
         </h3>
         <p className="text-xl text-muted-foreground font-medium leading-relaxed">
           Our role is to support children in developing communication systems that allow them to connect, participate, and grow with confidence while respecting their individual developmental pathways.
         </p>
         <div className="w-20 h-1 bg-gradient-to-r from-[#c95994] to-[#4cbbcc] mx-auto rounded-full mt-16" />
      </section>

      {/* --- FINAL CTA --- */}
      <section className="pb-32 px-6">
        <GlassCard className="max-w-4xl mx-auto p-12 md:p-24 text-center bg-gradient-to-br from-[#c95994] to-[#4cbbcc] text-white border-none rounded-[4rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Start finding <br/> their voice.</h2>
          <button 
            onClick={handleConsultation}
            className="relative z-10 bg-white text-[#c95994] px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl"
          >
            Request Speech Assessment
          </button>
        </GlassCard>
      </section>

    </div>
  );
};

export default SpeechTherapy;