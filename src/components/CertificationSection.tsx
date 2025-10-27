import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, Shield } from "lucide-react";

export const CertificationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6 glow-pink"
            >
              <Award className="w-10 h-10 text-accent" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Government Recognized</span> Certificates
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Industry-recognized certifications that add real value to your students' profiles
            </p>
          </div>

          {/* Certificate Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8 md:p-12 glow-pink relative overflow-hidden"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/50 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/50 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/50 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/50 rounded-br-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="w-6 h-6 text-accent" />
                <span className="text-sm font-semibold text-accent">GOVERNMENT OF INDIA RECOGNIZED</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 gradient-text">
                Certificate of Excellence
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  "Verified by Govt. of India",
                  "Industry Recognized",
                  "Lifetime Validity",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 justify-center"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-8 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  Every student who completes a course receives an official certificate recognized by educational institutions and employers across India.
                </p>
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 text-accent font-semibold"
                >
                  <Award className="w-5 h-5" />
                  <span>Build Credibility, Unlock Opportunities</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
