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
  { icon: Speech, title: "Speech/Language", desc: "Expert therapy for communication clarity and language development. We help children and adults find their voice through personalized vocal exercises and language tools.", img: "/speech.jpg" },
  { icon: Brain, title: "Behavioural", desc: "Specialized behavioral support and modification programs. Our experts work on identifying triggers and developing positive coping mechanisms.", img: "/behavioral.jpg" },
  { icon: Activity, title: "Occupational", desc: "Enhancing daily living skills and motor coordination. We focus on physical, cognitive, and sensory skills to improve independence.", img: "/3s.jpg" },
  { icon: GraduationCap, title: "Special Ed", desc: "Preparing children for academic success through specialized curriculum tailored to unique learning needs.", comingSoon: true, img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" },
  { icon: Users, title: "Social Skills", desc: "Interactive group sessions for social development. Teaching children how to navigate social cues and build meaningful relationships.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80" },
  { icon: HeartPulse, title: "Psychoeducational", desc: "Comprehensive assessments and educational planning to identify learning styles and potential challenges.", img: "/6.jpg" },
  { icon: Stethoscope, title: "Psychological", desc: "Professional counseling and psychological evaluations for a deeper understanding of emotional well-being.", img: "7.jpg" },
  { icon: Puzzle, title: "Psychotherapy", desc: "Depth therapy for emotional and psychological growth, providing a safe space for healing and self-discovery.", img: "/8.jpg" },
  { icon: HeartPulse, title: "Counselling", desc: "Supportive counseling for individuals and families facing life's transitions and emotional hurdles.", img: "/9.jpg" },
];

const Services = () => {
  const handleWhatsApp = (serviceName: string) => {
    const phoneNumber = "917842495577";
    const message = `Hello! I would like to book a consultation for the ${serviceName} service.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="pt-5 overflow-hidden">
      <section className="py-10 px-6 text-center bg-secondary/10">
        <h1 className="text-6xl font-bold mb-8 italic">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          At స-kala, we provide a wide range of specialized therapeutic services tailored to meet the unique needs of every individual.
        </p>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto relative">
        {/* The Central Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/10 hidden lg:block -translate-x-1/2" />

        <div className="space-y-24">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full">
                  <GlassCard className="p-8 group hover:border-primary transition-all duration-500 relative">
                    {/* Connecting line to the center on Desktop */}
                    <div className={`hidden lg:block absolute top-1/2 w-12 h-0.5 bg-primary/20 ${isEven ? '-right-12' : '-left-12'}`} />
                    
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <service.icon size={32} />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                      {service.title}
                      {service.comingSoon && (
                        <span className="text-[10px] uppercase tracking-widest bg-accent px-2 py-1 rounded-full text-foreground font-bold">Soon</span>
                      )}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    <button 
                      onClick={() => handleWhatsApp(service.title)}
                      className="bg-primary text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      Book Consultation
                      <ArrowRight size={18} />
                    </button>
                  </GlassCard>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50"
                  >
                    <img 
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 text-center">
        <GlassCard className="max-w-4xl mx-auto p-12 bg-accent/20 border-none shadow-none">
          <h2 className="text-3xl font-bold mb-6">Not sure which service is right?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our experts can help you determine the best therapeutic path during an initial consultation.
          </p>
          <button 
            onClick={() => handleWhatsApp("General Inquiry")}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 mx-auto"
          >
            <Phone size={20} />
            Talk to an Expert
          </button>
        </GlassCard>
      </section>
    </div>
  );
};

export default Services;