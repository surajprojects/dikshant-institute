import clsx from "clsx";
import { getIcon } from "@/utils/iconsData";
import { CardType } from "@/utils/types/cardType";

export default function ContactCard({
  icon = "Goal",
  title = "title",
  description = "description",
  secondaryContactNo = false,
}: Partial<CardType & { secondaryContactNo?: boolean }>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="flex gap-3 items-start">
        {/* Icon */}
        <div className="text-white bg-secondary w-fit p-3 rounded-xl">
          {currentIcon && <currentIcon.icon className="size-4" />}
        </div>
        <div>
          {/* Title */}
          <p className="font-semibold mb-0.5 capitalize text-sm">{title}</p>
          {/* Description */}
          <p className={clsx("text-gray-600 text-xs", secondaryContactNo ? "w-28" : "")}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
