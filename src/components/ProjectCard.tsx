import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  imgPath: string;
  imgAlt: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const ProjectCard = ({
  imgPath,
  imgAlt,
  title,
  description,
  tags,
  link,
}: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-5 flex-col items-center lg:flex-row hover:bg-tertiary hover:scale-105 transition-all duration-300 rounded p-5 group"
    >
      <div className="h-[400px] lg:w-[500px] lg:h-auto flex items-center justify-center overflow-hidden shadow-2xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={imgPath}
          alt={imgAlt}
        />
      </div>
      <div className="flex flex-col gap-3 text-left basis-70 ">
        <div className="flex gap-2 items-center">
          <h1 className="font-bold text-highlight text-2xl group-hover:text-foreground">
            {title}
          </h1>
          <ArrowUpRight
            className="text-highlight group-hover:text-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
            size={15}
          />
        </div>
        <p className="text-secondary">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="text-highlight bg-primary py-0.5 px-2 rounded-xl"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};
