import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, FileText, Trophy } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Cap Mate – AI-Based Mental Stress Detection Cap",
      description: "A revolutionary wearable device that uses AI and neural networks to detect mental stress levels in real-time through EEG signals. Provides personalized interventions and stress management recommendations.",
      technologies: ["Python", "TensorFlow", "Neural Networks", "IoT", "Signal Processing"],
      achievement: "Patented Innovation",
      icon: Award,
      color: "text-primary",
      highlights: [
        "Patent granted for innovative approach",
        "Won IEEE Hackathon recognition",
        "Real-time stress monitoring with 92% accuracy",
        "Published research findings",
      ],
    },
    {
      title: "AI-Powered Multilingual Talking Tom",
      description: "An advanced AI system that enables real-time multilingual voice interaction and character animation. Leverages NLP and deep learning to provide natural conversations in multiple languages.",
      technologies: ["Python", "NLP", "Deep Learning", "Speech Recognition", "Translation APIs"],
      achievement: "Patented Technology",
      icon: Trophy,
      color: "text-secondary",
      highlights: [
        "Secured patent for unique implementation",
        "Supports 5+ languages seamlessly",
        "Natural language understanding",
        "Character lip-sync animation",
      ],
    },
    {
      title: "Helper – AI Emergency Response Platform",
      description: "A smart emergency response system that uses AI to analyze emergency situations, route calls to appropriate services, and provide real-time assistance recommendations.",
      technologies: ["AI/ML", "React", "Node.js", "MongoDB", "AWS", "Real-time Processing"],
      achievement: "Published Research",
      icon: FileText,
      color: "text-accent",
      highlights: [
        "Published in academic journal",
        "Reduces emergency response time by 40%",
        "AI-powered situation analysis",
        "Integration with emergency services",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <project.icon className={`w-6 h-6 ${project.color}`} />
                          <CardTitle className="text-2xl">{project.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Badge className={`${project.color} whitespace-nowrap`}>
                        {project.achievement}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ExternalLink className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;