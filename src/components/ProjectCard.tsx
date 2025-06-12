type ProjectCardProps = {
  imgPath: string;
  imgAlt: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
};

export const ProjectCard = ({
  imgPath,
  imgAlt,
  title,
  description,
  links,
}: ProjectCardProps) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded overflow-hidden">
      {/* Background image */}
      <img src={imgPath} alt={imgAlt} className="w-full object-cover" />

      {/* Overlay text */}
      <div className="absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-background/80 text-secondary p-6 rounded z-10 shadow-lg">
        <h3 className="text-highlight text-sm uppercase mb-2 tracking-widest">
          Featured Project
        </h3>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight underline text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
