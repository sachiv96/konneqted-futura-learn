import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Daily live coding sessions",
  "Full-featured LMS access",
  "Custom school landing page",
  "Monthly inter-school contests",
  "AI, Cybersecurity & Web Dev courses",
  "IITian mentorship",
  "2 dedicated 24/7 TAs per school",
  "Government recognized certificates",
  "Career guidance & placement prep",
  "Access to all future features",
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
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
            Simple <span className="gradient-text">Pricing</span> for Schools
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything your school needs to modernize computer education — all-inclusive, transparent pricing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto pt-8 px-4"
        >
          <div className="glass rounded-3xl p-8 md:p-12 glow-cyan border-2 border-primary/30 relative">
            {/* Popular Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-auto z-10"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 bg-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glow-pink whitespace-nowrap">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">MOST POPULAR</span>
              </div>
            </motion.div>

            <div className="text-center mb-6 md:mb-8 pt-4">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Complete School Package</h3>
              
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">₹9,999</span>
                <span className="text-lg md:text-xl text-muted-foreground">/month</span>
              </div>
              
              <p className="text-sm text-muted-foreground">per school · billed monthly</p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan text-base md:text-lg py-5 md:py-6 font-semibold"
              >
                Join the Future of Learning
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="mt-8 pt-8 border-t border-border text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">
                ✨ No setup fees · Cancel anytime · 30-day money-back guarantee
              </p>
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <span>🔒 Secure Payment</span>
                <span>📞 Dedicated Support</span>
                <span>🎓 Trusted by 50+ Schools</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom plan for multiple schools or districts?
          </p>
          <a href="#contact" className="text-primary hover:underline font-semibold">
            Contact us for enterprise pricing →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
