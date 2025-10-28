import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Message {
  type: "user" | "system";
  text: string;
}

export const TerminalSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: "system", text: "Konneqted Terminal v1.0.0" },
    { type: "system", text: "Type 'help' for available commands or ask about our services..." },
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const responses: Record<string, string> = {
    help: `Available commands:
- contact: Get our contact information
- price/pricing: View course pricing
- certificate: Learn about certifications
- courses: Explore our courses
- mission: Our mission and vision
- community: Join our community
- contest: Coding competitions info
- clear: Clear terminal`,
    contact: `📞 Contact Information:
WhatsApp: +91 870 961 8912
Call: +91 870 961 8912
Click to connect: https://wa.me/918709618912`,
    price: `💰 Pricing:
Course Price: ₹9999
Includes: Live classes, certifications, community access, and more
Type 'courses' for more details`,
    pricing: `💰 Pricing:
Course Price: ₹9999
Includes: Live classes, certifications, community access, and more
Type 'courses' for more details`,
    certificate: `🎓 Certifications:
✓ Government Recognized Certificates
✓ Industry-standard certifications
✓ Blockchain-verified credentials
✓ Shareable on LinkedIn and resume`,
    courses: `📚 Available Courses:
✓ Web Development (HTML, CSS, JavaScript, React)
✓ Python Programming & Data Science
✓ Mobile App Development
✓ Cybersecurity Fundamentals
✓ AI & Machine Learning
All courses include live sessions, projects, and certifications`,
    mission: `🎯 Our Mission:
Empowering the next generation with cutting-edge tech education
- Democratizing quality education
- Building a strong tech community
- Preparing students for future careers
- Making learning accessible and affordable`,
    community: `👥 Community Benefits:
✓ 24/7 doubt resolution
✓ Peer-to-peer learning
✓ Networking opportunities
✓ Exclusive workshops and events
✓ Job placement assistance`,
    contest: `🏆 Coding Contests:
- Regular hackathons and coding challenges
- Win prizes and certifications
- Showcase your skills
- Build your portfolio
Contact us to participate!`,
    clear: "CLEAR_TERMINAL",
  };

  const processCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: `> ${cmd}` }]);

    // Handle clear command
    if (responses[command] === "CLEAR_TERMINAL") {
      setMessages([
        { type: "system", text: "Konneqted Terminal v1.0.0" },
        { type: "system", text: "Terminal cleared. Type 'help' for commands..." },
      ]);
      return;
    }

    // Check for exact matches
    if (responses[command]) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "system", text: responses[command] }]);
      }, 300);
      return;
    }

    // Check for partial matches
    for (const [key, value] of Object.entries(responses)) {
      if (command.includes(key) && value !== "CLEAR_TERMINAL") {
        setTimeout(() => {
          setMessages((prev) => [...prev, { type: "system", text: value }]);
        }, 300);
        return;
      }
    }

    // Default response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "system",
          text: `Command not recognized: "${cmd}". Type 'help' for available commands.`,
        },
      ]);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    processCommand(input);
    setInput("");
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="py-20 px-4 bg-background hidden md:block">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Access Terminal
          </h2>
          <p className="text-muted-foreground text-lg">
            Query our system for instant information
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Terminal Window */}
          <div className="rounded-lg overflow-hidden border border-green-500/30 shadow-2xl bg-black">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 px-4 py-3 flex items-center gap-2 border-b border-green-500/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-green-400 text-sm font-mono">
                  konneqted@terminal:~$
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              className="bg-black p-6 h-[400px] overflow-y-auto font-mono text-sm scrollbar-thin scrollbar-thumb-green-500/50 scrollbar-track-transparent"
              onClick={() => inputRef.current?.focus()}
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`mb-2 whitespace-pre-wrap ${
                    msg.type === "user"
                      ? "text-green-400"
                      : "text-green-300/80"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {/* Input Line */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
                <span className="text-green-400">{">"}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono caret-green-400"
                  autoFocus
                  placeholder="Enter command..."
                />
              </form>

              {/* Blinking Cursor */}
              <div className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></div>
            </div>
          </div>

          {/* Glowing Effect */}
          <div className="absolute inset-0 -z-10 bg-green-500/10 blur-3xl rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
};
