import clsx from "clsx";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function SectionHeader({
  title = "title",
  subtitle = "subtitle",
  description = "description",
  capitalize = true,
}: Partial<SectionHeaderType> & { capitalize?: boolean }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <h4 className="text-primary font-bold text-xs text-center uppercase">{title}</h4>
        <p
          className={clsx(
            "text-secondary text-3xl font-bold text-center",
            capitalize ? "capitalize" : "",
          )}
        >
          {subtitle}
        </p>
        <p className="text-gray-600 max-w-2xl text-base text-center">{description}</p>
      </div>
    </>
  );
}
