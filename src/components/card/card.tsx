import { getIcon } from "@/utils/iconsData";
import { CardType } from "@/utils/types/cardType";

export default function Card({
  icon = "Goal",
  title = "title",
  description = "description",
}: Partial<CardType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="w-full rounded-2xl bg-white border border-gray-50 p-4 shadow-sm hover:shadow-md transition-effect">
        {/* Icon */}
        <div className="text-white bg-secondary w-fit p-2.5 rounded-xl">
          {currentIcon && <currentIcon.icon className="size-5" />}
        </div>
        {/* Title */}
        <p className="font-semibold my-1.5 mt-2.5 capitalize">{title}</p>
        {/* Description */}
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </>
  );
}
