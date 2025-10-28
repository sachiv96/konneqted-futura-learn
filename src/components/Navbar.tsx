import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Vision", href: "#mission" },
  { name: "Courses", href: "#courses" },
  { name: "Contest", href: "#contest" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass glow-cyan py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl md:text-3xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Konneqted
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary glow-cyan"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle - Unique Animated Design */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center group"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              {/* Top Line */}
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-primary rounded-full glow-cyan origin-center"
              />
              {/* Middle Line */}
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-full h-0.5 bg-primary rounded-full glow-cyan"
              />
              {/* Bottom Line */}
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-primary rounded-full glow-cyan origin-center"
              />
            </div>
            
            {/* Animated Circle Background */}
            <motion.div
              animate={isOpen ? { scale: 1.2, opacity: 0.3 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-full bg-primary/20 blur-sm"
            />
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden fixed inset-0 top-20 glass backdrop-blur-2xl z-40"
            >
              {/* Animated Background Gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(190 100% 50% / 0.2) 0%, hsl(280 80% 60% / 0.2) 50%, hsl(190 100% 50% / 0.2) 100%)",
                  backgroundSize: "200% 200%",
                }}
              />
              
              <div className="container mx-auto px-8 py-12 flex flex-col gap-2 relative z-10">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`text-2xl font-bold py-4 px-6 rounded-xl transition-all relative overflow-hidden group ${
                      activeSection === link.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {/* Hover Effect Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Active Indicator */}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="mobileActiveSection"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary glow-cyan"
                      />
                    )}
                    
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};
