import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MessageSquare, Clock, BookOpen } from "lucide-react";

const mentorshipFeatures = [
  {
    icon: GraduationCap,
    title: "IITian Mentors",
    description: "Learn from graduates of India's top technical institutions",
    highlight: "Expert Guidance",
  },
  {
    icon: Clock,
    title: "24/7 Active TAs",
    description: "Two dedicated teaching assistants per school, always available",
    highlight: "Round-the-clock Support",
  },
  {
    icon: MessageSquare,
    title: "Live Doubt Clearing",
    description: "Interactive sessions to resolve queries in real-time",
    highlight: "Instant Help",
  },
  {
    icon: BookOpen,
    title: "Career Guidance",
    description: "Personalized mentorship for future tech careers",
    highlight: "Future-Ready",
  },
];

export const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Community & <span className="gradient-text">Mentorship</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Learning is better together. Get expert guidance and support from IITians and dedicated TAs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {mentorshipFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 hover:glow-cyan transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 glow-cyan">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <span className="text-xs font-semibold text-accent px-2 py-1 rounded-full bg-accent/20">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 glow-purple max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Expert Mentors</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Active TAs</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="text-xl font-bold mb-4 text-center">
              Join Our Thriving Community
            </h4>
            <p className="text-center text-muted-foreground mb-6">
              Connect with peers, mentors, and industry professionals in a supportive learning environment
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-6 py-3 rounded-full font-semibold text-primary hover:glow-cyan transition-all"
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
