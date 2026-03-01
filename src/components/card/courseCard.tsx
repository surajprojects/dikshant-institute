import { getIcon } from "@/utils/iconsData";
import { CourseCardType } from "@/utils/types/courseCardType";

export default function CourseCard({
  icon = "Goal",
  name = "title",
  fullName = "full name",
  description = "description",
}: Partial<CourseCardType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="w-full rounded-2xl bg-white border border-gray-50 p-4 shadow-sm hover:shadow-md transition-effect hover:-translate-y-1 group">
        {/* Icon */}
        <div className="text-secondary bg-secondary/10 w-fit p-2.5 rounded-xl group-hover:bg-primary group-hover:text-white transition-effect">
          {currentIcon && <currentIcon.icon className="size-5" />}
        </div>
        {/* Name */}
        <p className="font-semibold mt-2.5 capitalize">{name}</p>
        {/* Full Name */}
        <p className="text-primary text-xs my-1.5">{fullName}</p>
        {/* Description */}
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </>
  );
}
