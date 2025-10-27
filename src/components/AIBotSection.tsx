import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AIBotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // TODO: Insert Gemini API key here
    // TODO: Write your custom Gemini prompt here
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <section id="ai-bot" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Powered by Gemini AI</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet Your <span className="gradient-text">AI Assistant</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant answers, personalized learning recommendations, and 24/7 support from our AI-powered assistant
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* AI Chat Interface */}
          <div className="glass rounded-3xl p-8 glow-cyan border-2 border-primary/20">
            {/* Chat Header */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Konneqted AI</h3>
                <p className="text-sm text-muted-foreground">Always here to help</p>
              </div>
              <div className="ml-auto">
                <span className="flex items-center gap-2 text-xs text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  Online
                </span>
              </div>
            </div>

            {/* Sample Messages */}
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 bg-muted/50 rounded-2xl rounded-tl-none p-4">
                  <p className="text-sm">
                    👋 Hello! I'm your AI learning assistant. I can help you with course recommendations, 
                    answer questions about our programs, or guide you through the enrollment process. How can I assist you today?
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-3 justify-end"
              >
                <div className="flex-1 bg-primary/20 rounded-2xl rounded-tr-none p-4 max-w-sm">
                  <p className="text-sm">
                    What courses do you offer for beginners in AI?
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 bg-muted/50 rounded-2xl rounded-tl-none p-4">
                  <p className="text-sm">
                    Great question! Our "AI Basics" course is perfect for beginners. It covers fundamental concepts 
                    of artificial intelligence and machine learning, with hands-on projects. The course is designed 
                    for students with no prior AI experience. Would you like to know more about the curriculum or enrollment process?
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Input Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-2"
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message here... (Demo only)"
                className="glass border-primary/30 focus:border-primary"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-primary hover:bg-primary/90 glow-cyan flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Note */}
            <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-xs text-muted-foreground text-center">
                💡 <strong>Developer Note:</strong> This is a UI placeholder. 
                Insert your Gemini API key and custom prompt in the component code to activate AI functionality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
