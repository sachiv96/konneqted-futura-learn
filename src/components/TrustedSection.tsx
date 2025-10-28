import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users } from "lucide-react";

const recognitions = [
  {
    icon: Award,
    title: "IIT Dhanbad",
    description: "Officially recognised by one of India's premier technical institutions",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "NEP Aligned",
    description: "Curriculum aligned with National Education Policy guidelines",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Taught by alumni from IIT Madras, IIM Hyderabad & industry leaders",
    color: "accent",
  },
];

export const TrustedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Trusted & <span className="gradient-text">Recognized</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform is backed by leading institutions and aligned with government initiatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass rounded-2xl p-6 md:p-8 text-center hover:glow-cyan transition-all group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-${item.color}/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform glow-${item.color === 'primary' ? 'cyan' : item.color === 'secondary' ? 'purple' : 'pink'}`}>
                <item.icon className={`w-8 h-8 md:w-10 md:h-10 text-${item.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-3 gradient-text">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
