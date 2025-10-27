import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Users, Calendar, IndianRupee } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const winners = [
  { name: "Aarav Sharma", school: "DPS Delhi", prize: "₹12,000", position: "1st", initials: "AS" },
  { name: "Diya Patel", school: "DAV Mumbai", prize: "₹8,000", position: "2nd", initials: "DP" },
  { name: "Rohan Kumar", school: "KV Bangalore", prize: "₹5,000", position: "3rd", initials: "RK" },
];

export const ContestSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contest" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Monthly <span className="gradient-text">Coding Contests</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete with students from 30+ schools across India. Win prizes, recognition, and glory!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contest Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 glow-cyan"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Contest Highlights</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <IndianRupee className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Prize Pool: ₹25,000</h4>
                  <p className="text-sm text-muted-foreground">
                    Top 3 winners receive cash prizes every month
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">30+ Schools Participating</h4>
                  <p className="text-sm text-muted-foreground">
                    Students from all partner schools compete together
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Monthly Events</h4>
                  <p className="text-sm text-muted-foreground">
                    New challenges and themes every month
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certificates & Recognition</h4>
                  <p className="text-sm text-muted-foreground">
                    All participants receive participation certificates
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Winners Podium */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8 glow-purple"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Last Month's Winners</h3>

            <div className="space-y-4">
              {winners.map((winner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${
                    index === 0
                      ? "from-primary/20 to-primary/5 glow-cyan"
                      : index === 1
                      ? "from-secondary/20 to-secondary/5"
                      : "from-accent/20 to-accent/5"
                  }`}
                >
                  <div className="relative">
                    <Avatar className="w-14 h-14">
                      <AvatarFallback className="bg-primary/20 text-primary font-bold">
                        {winner.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0
                          ? "bg-primary text-primary-foreground"
                          : index === 1
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-accent text-accent-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{winner.name}</h4>
                    <p className="text-sm text-muted-foreground">{winner.school}</p>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-lg gradient-text">{winner.prize}</div>
                    <div className="flex items-center gap-1 justify-end">
                      {index === 0 ? (
                        <Trophy className="w-4 h-4 text-primary" />
                      ) : index === 1 ? (
                        <Medal className="w-4 h-4 text-secondary" />
                      ) : (
                        <Award className="w-4 h-4 text-accent" />
                      )}
                      <span className="text-xs text-muted-foreground">{winner.position} Place</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Confetti Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="mt-6 text-center"
            >
              <p className="text-sm text-muted-foreground">
                🎉 Congratulations to all winners! 🎉
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
