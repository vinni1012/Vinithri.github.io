import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Brain, Smartphone, Database, Cloud, Zap } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, modern web applications using React, Next.js, and cutting-edge technologies.",
      features: [
        "Responsive design for all devices",
        "Modern UI/UX implementation",
        "Performance optimization",
        "SEO-friendly architecture",
      ],
      color: "primary",
    },
    {
      icon: Brain,
      title: "AI/ML Model Development",
      description: "Developing and deploying sophisticated AI/ML models tailored to solve complex business problems.",
      features: [
        "Custom neural network design",
        "NLP solutions",
        "Predictive analytics",
        "Model training & optimization",
      ],
      color: "secondary",
    },
    {
      icon: Database,
      title: "Data Science Solutions",
      description: "Transforming raw data into actionable insights through advanced analytics and visualization.",
      features: [
        "Data preprocessing & cleaning",
        "Statistical analysis",
        "Data visualization",
        "Pattern recognition",
      ],
      color: "accent",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Deploying scalable applications on cloud platforms with robust architecture and security.",
      features: [
        "AWS/Azure deployment",
        "Containerization (Docker)",
        "CI/CD pipelines",
        "Infrastructure automation",
      ],
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Product Design",
      description: "Creating intuitive, user-centered designs that enhance user experience and engagement.",
      features: [
        "UI/UX research",
        "Wireframing & prototyping",
        "User flow optimization",
        "Design system creation",
      ],
      color: "secondary",
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Seamlessly integrating AI capabilities into existing systems to unlock new possibilities.",
      features: [
        "API development",
        "Third-party AI services",
        "Custom chatbot solutions",
        "Automation workflows",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Services <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">I Offer</span>
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full glass-effect border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-7 h-7 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${service.color} mt-1.5 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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

export default Services;