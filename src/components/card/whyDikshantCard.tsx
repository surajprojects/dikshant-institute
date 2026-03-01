import { getIcon } from "@/utils/iconsData";
import { CardType } from "@/utils/types/cardType";

export default function WhyDikshantCard({
  icon = "Goal",
  title = "title",
  description = "description",
}: Partial<CardType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="w-full sm:w-72 rounded-xl bg-white p-4 hover:bg-gray-100/90 transition-effect flex items-start justify-center gap-3">
        {/* Icon */}
        <div className="text-white bg-primary w-fit p-2.5 rounded-xl">
          {currentIcon && <currentIcon.icon className="size-5" />}
        </div>
        <div>
          {/* Title */}
          <p className="font-semibold mb-1 capitalize text-sm">{title}</p>
          {/* Description */}
          <p className="text-gray-600 text-xs max-w-48">{description}</p>
        </div>
      </div>
    </>
  );
}
