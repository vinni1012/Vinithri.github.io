import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Professional <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

              {/* Experience card */}
              <div className="md:ml-12 glass-effect p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow">
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1.5 hidden md:block shadow-glow"></div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-primary" />
                      AI Research Intern
                    </h3>
                    <p className="text-xl text-primary font-semibold">Plasmid Innovative Pvt Ltd</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium whitespace-nowrap">Jan 2025 - Mar 2025</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Contributed to cutting-edge AI research projects focusing on machine learning applications 
                    and innovative solutions for real-world challenges.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Developed and optimized machine learning models for data analysis and pattern recognition
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Collaborated with cross-functional teams to implement AI-driven solutions
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Conducted research on emerging AI technologies and their practical applications
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Contributed to the development of innovative prototypes and proof-of-concept models
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {["Python", "TensorFlow", "Data Analysis", "Research", "Team Collaboration"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;