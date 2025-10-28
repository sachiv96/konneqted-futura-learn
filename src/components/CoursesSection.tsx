import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Shield, Code, TrendingUp, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    icon: Brain,
    title: "AI Basics",
    description: "Introduction to Artificial Intelligence and Machine Learning fundamentals",
    seats: Math.floor(Math.random() * 30) + 70,
    total: 100,
    price: "₹1,499",
    status: "Limited Offer",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Learn to protect digital assets and understand security principles",
    seats: Math.floor(Math.random() * 20) + 50,
    total: 100,
    price: "₹1,799",
    status: "Enrolling Now",
    color: "secondary",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build modern websites and applications from scratch",
    seats: Math.floor(Math.random() * 25) + 60,
    total: 100,
    price: "₹1,599",
    status: "Popular",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Tech Trends 2025",
    description: "Stay ahead with emerging technologies and market insights",
    seats: 0,
    total: 100,
    price: "Coming Soon",
    status: "Launching Q2",
    color: "primary",
  },
];

export const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Our <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern, industry-aligned courses designed to prepare students for the future of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const seatsPercentage = (course.seats / course.total) * 100;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-6 hover:glow-cyan transition-all cursor-pointer group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-${course.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-${course.color === 'primary' ? 'cyan' : course.color === 'secondary' ? 'purple' : 'pink'}`}>
                  <course.icon className={`w-8 h-8 text-${course.color}`} />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                {/* Status Badge */}
                <Badge className={`mb-4 bg-${course.color}/20 text-${course.color} border-${course.color}/30`}>
                  {course.status}
                </Badge>

                {/* Seats or Coming Soon */}
                {course.seats > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Seats Reserved</span>
                      </div>
                      <span className="text-sm font-semibold">{course.seats}/{course.total}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${seatsPercentage}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`h-full bg-${course.color} glow-${course.color === 'primary' ? 'cyan' : course.color === 'secondary' ? 'purple' : 'pink'}`}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
