import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, LineChart, Users2, Sparkles } from "lucide-react";

const upcomingFeatures = [
  {
    icon: Rocket,
    title: "Konneqted LMS 2.0",
    description: "Next-generation learning management system with AI-powered analytics",
    eta: "Q2 2025",
  },
  {
    icon: LineChart,
    title: "AI-Powered Career Tracker",
    description: "Personalized career guidance and skill development roadmaps",
    eta: "Q3 2025",
  },
  {
    icon: Users2,
    title: "Parent Dashboard",
    description: "Real-time insights into student progress and achievements",
    eta: "Q2 2025",
  },
  {
    icon: Sparkles,
    title: "Virtual Labs",
    description: "Hands-on coding practice with cloud-based development environments",
    eta: "Q4 2025",
  },
];

export const ComingSoonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(45deg, hsl(190 100% 50% / 0.1) 0%, hsl(280 80% 60% / 0.1) 100%)",
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What's <span className="gradient-text">Coming Next</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're constantly innovating to bring you cutting-edge features that enhance the learning experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group hover:glow-purple transition-all"
            >
              {/* Animated gradient overlay */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none"
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 glow-purple group-hover:animate-float">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <span className="text-sm font-semibold text-accent px-3 py-1 rounded-full bg-accent/20">
                    {feature.eta}
                  </span>
                </div>

                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground">
            Want to be the first to know?{" "}
            <a href="#contact" className="text-primary hover:underline font-semibold">
              Join our waitlist
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
