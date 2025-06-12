import { GithubIcon, LinkedinIcon } from "lucide-react";
export const IconBar = () => {
  return (
    <div className="fixed z-10 bottom-0 left-15 flex flex-col items-center gap-4">
      <a
        href=""
        className="text-secondary hover:text-highlight transition-colors duration-300"
      >
        <GithubIcon size={20} />
      </a>
      <a
        href=""
        className="text-secondary hover:text-highlight transition-colors duration-300"
      >
        <LinkedinIcon size={20} />
      </a>
      <div className="w-px h-24 bg-secondary"></div>
    </div>
  );
};
