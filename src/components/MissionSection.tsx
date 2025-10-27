import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Users, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Modern Curriculum",
    description: "From Excel to AI, Cybersecurity, and Web Development",
  },
  {
    icon: Zap,
    title: "Live Sessions",
    description: "Daily interactive coding sessions with expert mentors",
  },
  {
    icon: Users,
    title: "IITian Mentorship",
    description: "24/7 active TAs and career guidance from top institutions",
  },
  {
    icon: Award,
    title: "Recognized Certificates",
    description: "Government of India approved certifications",
  },
];

export const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to transform how Indian schools teach computer science. 
            Most schools already have computers and teachers — they just need the right tools and curriculum to prepare students for the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl hover:glow-cyan transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 glow-cyan">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass p-8 md:p-12 rounded-3xl glow-purple"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 gradient-text">
              Empowering Schools, Not Just Students
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We partner directly with schools to provide a complete ecosystem: daily live coding sessions, 
              a full-featured LMS, custom school landing pages, monthly inter-school contests with ₹12,000 prizes, 
              and courses aligned with current market trends — all for just ₹9,999/month per school.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
