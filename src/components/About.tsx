import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpg";
import { Award, Languages, GraduationCap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30"></div>
                <img 
                  src={profileImage} 
                  alt="Davuluri Vinithri" 
                  className="relative rounded-2xl shadow-card w-full"
                />
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate <span className="text-primary font-semibold">AI and Machine Learning enthusiast</span> with 
                a strong foundation in developing innovative solutions that bridge technology and real-world applications.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech has been marked by groundbreaking projects, including two patented innovations 
                in mental health technology and multilingual AI systems, alongside a published emergency response platform.
              </p>

              <div className="grid gap-4 mt-8">
                <div className="flex items-start gap-4 p-4 glass-effect rounded-lg">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Recognition & Patents</h3>
                    <p className="text-sm text-muted-foreground">
                      2 patents, IEEE Hackathon achievements, and published research
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass-effect rounded-lg">
                  <Languages className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Multilingual</h3>
                    <p className="text-sm text-muted-foreground">
                      Fluent in English and Telugu
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass-effect rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Continuous Learner</h3>
                    <p className="text-sm text-muted-foreground">
                      Dedicated to staying at the forefront of AI and ML innovations
                    </p>
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

export default About;