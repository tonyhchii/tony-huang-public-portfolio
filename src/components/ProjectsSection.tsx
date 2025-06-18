import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
type Projects = {
  imgPath: string;
  imgAlt: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const projects: Projects[] = [
  {
    imgPath: "/images/future-fest.png",
    imgAlt: "Screenshot of Future Fest",
    title: "Future Fest",
    description:
      "An image recognition application that identifies in-game items and displays their corresponding wiki information when users hover over objects in The Bazaar video game.",
    tags: ["React", "Go", "Tailwind", "Auth0", "Storybook"],
    link: "https://www.futurefest.io/",
  },
  {
    imgPath: "/images/bazaar-buddy-client.png",
    imgAlt: "Screenshot of BazaarBuddy",
    title: "Bazaar Buddy",
    description:
      "An image recognition application that identifies in-game items and displays their corresponding wiki information when users hover over objects in The Bazaar video game.",
    tags: [
      "Python",
      "OpenCV",
      "Tesseract",
      "Selenium",
      "BeautifulSoap",
      "PyQT",
    ],
    link: "https://github.com/stonehenge-collective/bazaar-buddy-client",
  },
  {
    imgPath: "/images/tony-huang-portfolio.png",
    imgAlt: "Screenshot of Tony Huang Portfolio",
    title: "Tony Huang Portfolio",
    description:
      "Full-stack personal portfolio application with integrated email backend, deployed on self-hosted LXC containers managed through Proxmox virtualization, featuring Nginx reverse proxy with automated TLS certificate management and DNS routing",
    tags: ["React", "Tailwind", "NodeJS", "ProxMox", "Nginx", "VM"],
    link: "https://github.com/tonyhchii/tony-huang-public-portfolio",
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-[80vh] py-24 px-4 relative">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
        className="text-secondary text-3xl md:text-4xl font-bold"
        viewport={{ once: true, amount: 0.4 }}
      >
        {" "}
        My <span className="text-highlight">Projects</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.4 }}
        className="grid mx-auto max-w-5xl p-5"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgPath={project.imgPath}
            imgAlt={project.imgAlt}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </motion.div>
    </section>
  );
};
