
import { Briefcase, Code, User } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCard = ({ icon, title, description, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 100 }); // from right to left
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className="gradient-border p-6 card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">{icon}</div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer &amp; Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I&#39;m passionate about creating elegant solutions to complex
              problems, and I&#39;m constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/M.Umar Cv.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <AnimatedCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Web Development"
              description="Creating responsive websites and web applications with modern frameworks."
              delay={0}
            />
            <AnimatedCard
              icon={<User className="h-6 w-6 text-primary" />}
              title="UI/UX Design"
              description="Designing intuitive user interfaces and seamless user experiences."
              delay={0.2}
            />
            <AnimatedCard
              icon={<Briefcase className="h-6 w-6 text-primary" />}
              title="Project Management"
              description="Leading projects from conception to completion with agile methodologies."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};






