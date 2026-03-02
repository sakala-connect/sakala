import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { 
  Speech, Smile, Shapes, Lightbulb, GraduationCap, 
  ArrowRight, Calendar, MessageCircle 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const serviceList = [
  { 
    title: "Behavioral Therapy", 
    icon: Smile, 
    path: "/services/behavioral", 
    img: "/behavioral.jpg",
    side: "left"
  },
  { 
    title: "Psychotherapies", 
    icon: Lightbulb, 
    path: "/services/psychotherapy", 
    img: "/speech1.jpeg",
    side: "right"
  },
  { 
    title: "Speech Therapy", 
    icon: Speech, 
    path: "/services/speech", 
    img: "/sp.jpeg",
    side: "left"
  },
  { 
    title: "Occupational Therapy", 
    icon: Shapes, 
    path: "/services/occupational", 
    img: "/oc.jpeg",
    side: "right"
  },
  { 
    title: "Special Education", 
    icon: GraduationCap, 
    path: "/services/special-education", 
    img:"/sped.jpeg",
    side: "left"
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Hello! I would like to book a consultation for ${service}.`);
    window.open(`https://wa.me/917842495577?text=${message}`, "_blank");
  };

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0b] pt-32 pb-24 font-sans overflow-x-hidden">
      <section className="px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text[10px] font-bold uppercase tracking-[0.4em] text-[#4cbbcc] mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            Specialized <span className="text-[#c95994] italic font-medium">Support.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Personalized therapy and holistic support services designed to empower growth at every stage of life.
          </motion.p>
        </div>

        {/* Bento Grid with Directional Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {serviceList.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ 
                opacity: 0, 
                x: service.side === "left" ? -100 : 100 
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative overflow-hidden rounded-[2.5rem] shadow-xl border border-black/5 dark:border-white/5 ${
                idx === 0 || idx === 1 ? "md:col-span-3 h-[450px]" : "md:col-span-2 h-[400px]"
              }`}
            >
              <img 
                src={service.img} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#4cbbcc] flex items-center justify-center text-white mb-4 shadow-lg">
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                  {service.title}
                 </h3>

                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => navigate(service.path)}
                    className="px-5 py-2.5 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#c95994] hover:text-white transition-all shadow-md"
                  >
                    Explore More <ArrowRight size={14} />
                  </button>
                  <button 
                    onClick={() => handleWhatsApp(service.title)}
                    className="px-5 py-2.5 rounded-full bg-[#4cbbcc] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 hover:brightness-110 transition-all shadow-md"
                  >
                    <Calendar size={14} /> Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Footer */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-32 px-6 max-w-5xl mx-auto"
      >
        <GlassCard className="max-w-2xl mx-auto p-6 md:p-10 rounded-[2.5rem] text-center bg-[#f5f5f7] dark:bg-white/5 border-none shadow-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Meaningful progress starts here.</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-lg mx-auto font-medium leading-relaxed">
            At స-kala, progress is not measured only by outcomes — but by confidence, connection, and meaningful change.
          </p>
          <button 
            onClick={() => handleWhatsApp("General Inquiry")}
            className="px-8 py-3.5 rounded-full bg-[#4cbbcc] text-white font-bold text-[11px] md:text-[12px] uppercase tracking-widest flex items-center gap-3 mx-auto hover:scale-105 transition-transform shadow-xl hover:shadow-[#4cbbcc]/20"
          >
            <MessageCircle size={18} /> Speak with our clinical team
          </button>
        </GlassCard>
      </motion.section>
    </div>
  );
};

export default Services;