import clsx from "clsx";
import { Clock } from "lucide-react";
import { getIcon } from "@/utils/iconsData";
import { TimingCardType } from "@/utils/types/timingCardType";

export default function TimingCard({
  icon = "Goal",
  title = "title",
  timing = "timing",
  description = "description",
  className = "text-secondary bg-secondary/15",
}: Partial<TimingCardType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="w-full sm:w-64 rounded-2xl bg-white border border-gray-50 p-8 pb-20 shadow-sm hover:shadow-md transition-effect flex flex-col items-center gap-1">
        {/* Icon */}
        <div className={clsx("w-fit p-3 rounded-full", className)}>
          {currentIcon && <currentIcon.icon className="size-5" />}
        </div>
        {/* Title */}
        <p className="font-semibold text-base mt-2.5 capitalize">{title}</p>
        {/* Timing */}
        <p className="text-xs my-2 font-semibold flex items-center w-fit bg-gray-100 py-2 px-3.5 rounded-2xl">
          <Clock className="size-3 mr-1.5" /> {timing}
        </p>
        {/* Description */}
        <p className="text-gray-600 text-xs text-center">{description}</p>
      </div>
    </>
  );
}
