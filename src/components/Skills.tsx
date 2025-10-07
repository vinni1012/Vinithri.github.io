import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Cpu, Globe, Server } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "Python", level: 95, icon: Code2 },
    { name: "SQL", level: 85, icon: Database },
    { name: "JavaScript", level: 90, icon: Code2 },
    { name: "Java", level: 80, icon: Code2 },
    { name: "HTML/CSS", level: 92, icon: Globe },
  ];

  const aiSkills = [
    { name: "AI/ML", level: 95, icon: Brain },
    { name: "NLP", level: 90, icon: Cpu },
    { name: "Neural Networks", level: 88, icon: Brain },
    { name: "Product Design", level: 85, icon: Cpu },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Server className="w-6 h-6 text-primary" />
                Programming Languages
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid md:grid-cols-2 gap-6"
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="glass-effect p-6 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full gradient-primary"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* AI/ML Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Brain className="w-6 h-6 text-secondary" />
                AI & Machine Learning
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid md:grid-cols-2 gap-6"
              >
                {aiSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="glass-effect p-6 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-secondary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full gradient-secondary"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;