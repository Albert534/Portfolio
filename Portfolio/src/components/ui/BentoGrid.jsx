import { cn } from "../../utils/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  imageSrc,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-black1 opacity-0.5 border border-transparent justify-between flex flex-col  overflow-hidden",
        className
      )}
    >
      {header}
      {imageSrc && (
        <div className="mb-4 w-full flex-shrink-0">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-text dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-text text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
