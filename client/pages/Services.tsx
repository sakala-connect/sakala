import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
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
  ArrowRight
} from "lucide-react";

const services = [
  { icon: Speech, title: "Speech/Language", desc: "Expert therapy for communication clarity and language development. We help children and adults find their voice through personalized vocal exercises and language tools." },
  { icon: Brain, title: "Behavioural", desc: "Specialized behavioral support and modification programs. Our experts work on identifying triggers and developing positive coping mechanisms." },
  { icon: Activity, title: "Occupational", desc: "Enhancing daily living skills and motor coordination. We focus on physical, cognitive, and sensory skills to improve independence." },
  { icon: GraduationCap, title: "Special Ed", desc: "Coming Soon - Individualized learning support for special needs. Preparing children for academic success through specialized curriculum.", comingSoon: true },
  { icon: Users, title: "Social Skills", desc: "Interactive group sessions for social development. Teaching children how to navigate social cues and build meaningful relationships." },
  { icon: HeartPulse, title: "Psychoeducational", desc: "Comprehensive assessments and educational planning to identify learning styles and potential challenges." },
  { icon: Stethoscope, title: "Psychological", desc: "Professional counseling and psychological evaluations for a deeper understanding of emotional well-being." },
  { icon: Puzzle, title: "Psychotherapy", desc: "Depth therapy for emotional and psychological growth, providing a safe space for healing and self-discovery." },
  { icon: HeartPulse, title: "Counselling", desc: "Supportive counseling for individuals and families facing life's transitions and emotional hurdles." },
];

const Services = () => {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 text-center bg-secondary/10">
        <h1 className="text-6xl font-bold mb-8">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          At స-kala, we provide a wide range of specialized therapeutic services tailored to meet the unique needs of every individual.
        </p>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6 shrink-0">
                  <service.icon size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  {service.title}
                  {service.comingSoon && (
                    <span className="text-[10px] uppercase tracking-widest bg-accent px-2 py-1 rounded-full text-foreground">Soon</span>
                  )}
                </h2>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <button className="mt-8 text-primary font-bold flex items-center gap-2 group w-fit">
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <GlassCard className="max-w-4xl mx-auto p-12 bg-accent/20 border-none">
          <h2 className="text-3xl font-bold mb-6">Not sure which service is right?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our experts can help you determine the best therapeutic path during an initial consultation.
          </p>
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
            <Phone size={20} />
            Book a Consultation
          </button>
        </GlassCard>
      </section>
    </div>
  );
};

export default Services;
