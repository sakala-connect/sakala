import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { HeartPulse, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="pt-1">
      <section className="py-10 px-6 text-center">
        <h1 className="text-6xl font-bold mb-8">About స-kala</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Nurturing abilities, building confidence. We are a multidisciplinary therapy and learning center dedicated to empowering individuals across all stages of life.
        </p>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At స-kala, we believe that every individual has a unique path to growth. Our space is designed to be warm, supportive, and therapeutic, ensuring that both children and adults feel valued from the moment they walk in.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We integrate evidence-based practices with empathetic care to create functional outcomes that matter in everyday life.
            </p>
          </div>
          {/* Change: Swapped empty card for an interactive image container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50 group"
          >
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80" 
              alt="Therapy and Support" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Our Mission", icon: Target, text: "To provide high-quality, personalized therapeutic interventions that foster independence." },
            { title: "Our Vision", icon: HeartPulse, text: "To be a leading center of excellence in multidisciplinary therapy and holistic development." },
            { title: "Our Community", icon: Users, text: "Building a supportive ecosystem for families and individuals to thrive together." }
          ].map((item, i) => (
            <GlassCard key={i} className="text-center p-10 group">
              {/* Change: Icon container now fills with color on card hover */}
              <div className="w-16 h-16 bg-secondary/30 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-primary/5 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 italic">"A space where every ability is valued and every milestone is celebrated."</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>
    </div>
  );
};

export default About;