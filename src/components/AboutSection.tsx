import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-10 bg-background text-secondary"
    >
      <div className="container max-w-5xl flex flex-col items-center min-h-screen">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          About <span className="text-highlight">Me</span>
        </motion.h2>
        <div className="flex">
          <div className="flex flex-col gap-4 max-w-lg justify-center items-center">
            <motion.p
              className="text-highlight text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              I'm a developer driven by creating products that make a real
              difference whether that's enhancing user experiences or automating
              the tedious tasks nobody wants to handle.
              <br />
              <br />
              My passion for technology started early, sparked by simple
              discoveries like tweaking HTML in browser dev tools and the thrill
              of setting up game servers and connecting friends through Hamachi.
              That curiosity never left me.
              <br />
              <br />
              These days, you'll find me tinkering with my homelab setup: a
              Proxmox VM running on a compact mini PC that hosts various
              containers with open-source tools like OpenTofu, Penpot, GitLab,
              PlantUML, and more. It's my playground for experimenting with new
              technologies and workflows.
              <br />
              <br />
              When I'm not coding, I'm either hitting the gym or playing video
              games, both help me recharge and stay creative.
            </motion.p>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <button className="border rounded-full hover:[box-shadow:var(--shadow-glow)] active:scale-95 hover:scale-105 py-2 px-6">
                <a href="#projects">Check Out My Projects</a>
              </button>
              <button className="rounded-full py-2 px-6 bg-primary text-highlight transition-all hover:[box-shadow:var(--shadow-glow)] active:scale-95 hover:scale-105">
                <a href="#contact">Contact Me</a>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
