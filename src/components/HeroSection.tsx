import { ArrowDown } from "lucide-react";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen justify-center items-center relative flex text-left"
    >
      <div className="mw-6xl flex flex-col gap-2">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary opacity-0 animate-fade-in-delay-1 transition duration-300">
          Hi I'm
        </h1>
        <h1 className="text-6xl md:text-8xl text-highlight font-bold opacity-0 animate-fade-in-delay-2 transition duration-300">
          Tony <span className="">Huang</span>
        </h1>
        <p className="mt-6 max-w-xl text-left text-secondary opacity-0 animate-fade-in-delay-3 transition duration-300">
          {" "}
          Web apps, side quests, and constant curiosity — I build and I learn.
          Whether it’s a dashboard, an idea validator, or a full-stack app, I’m
          here to ship clean UI and scalable code.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-highlight mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
