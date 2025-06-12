import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-[80vh] py-24 px-4 relative">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
        className="text-secondary text-3xl md:text-4xl font-bold"
        viewport={{ once: true, amount: 0.4 }}
      >
        {" "}
        My <span className="text-highlight">Projects</span>
      </motion.h1>
      <div>
        <ProjectCard
          imgPath="/images/halcyon-theme.png"
          imgAlt="Screenshot of Halcyon Theme"
          title="Halcyon Theme"
          description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more."
          links={[
            {
              label: "Visual Studio Marketplace",
              href: "https://marketplace.visualstudio.com",
            },
            { label: "Package Control", href: "https://packagecontrol.io" },
            { label: "Atom Package Manager", href: "https://atom.io/packages" },
            { label: "npm", href: "https://www.npmjs.com" },
          ]}
        />
      </div>
    </section>
  );
};
