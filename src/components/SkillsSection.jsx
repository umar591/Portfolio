import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap5", level: 80, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express", level: 95, category: "backend" },
  { name: "MongoDB", level: 90, category: "backend" },
  { name: "PostgreSQL", level: 95, category: "backend" },
  { name: "Supabase", level: 85, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "RESTful", level: 80, category: "backend" },
  { name: "Socket.io", level: 80, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "RabbitMQ/Kafka", level: 75, category: "tools" },
  { name: "Data Scrapping", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.name} label={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ label, level }) => {
  const containerRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (barRef.current) {
          if (entry.isIntersecting) {
            // Animate bar fill
            barRef.current.style.setProperty("--final-width", `${level}%`);
            barRef.current.classList.add("animate-grow-bar");
            barRef.current.style.width = `${level}%`;
          } else {
            // Reset bar
            barRef.current.classList.remove("animate-grow-bar");
            barRef.current.style.width = "0%";
          }
        }
      },
      {
        threshold: 0.4,
      }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [level]);

  return (
    <div
      ref={containerRef}
      className="mb-6 bg-card p-6 rounded-lg shadow-xs card-hover"
    >
      <div className="flex justify-between mb-1">
        <h3 className="font-semibold text-lg text-left">{label}</h3>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="bg-primary h-2 rounded-full"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

