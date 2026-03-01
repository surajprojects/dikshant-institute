import TimingCard from "../card/timingCard";
import SectionHeader from "../ui/sectionHeader";
import { TimingCardTypeList } from "@/utils/types/timingCardType";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function Timings() {
  const timingsData: SectionHeaderType = {
    title: "batch timings",
    subtitle: "flexible schedules for everyone",
    description: "Choose a batch that fits your daily routine.",
  };

  const timingData: TimingCardTypeList = [
    {
      icon: "Sun",
      title: "morning batch",
      timing: "7:00 AM - 12:00 PM",
      description: "Ideal for early learners and working professionals.",
      className: "text-primary bg-primary/15",
    },
    {
      icon: "Sunset",
      title: "evening batch",
      timing: "7:00 AM - 12:00 PM",
      description: "Perfect for afternoon and evening learners.",
    },
    {
      icon: "School",
      title: "5th-10th Students",
      timing: "4:00 PM - 7:00 PM",
      description: "Dedicated coaching sessions for school students.",
      className: "text-teal-700 bg-teal-100/60",
    },
  ];
  return (
    <>
      <div className="section-wrapper">
        {/* Header */}
        <SectionHeader
          title={timingsData.title}
          subtitle={timingsData.subtitle}
          description={timingsData.description}
        />
        {/* Body */}
        <div className="w-full flex flex-col sm:flex-row justify-center gap-6 lg:gap-8 mt-14">
          {timingData.map((item, idx) => (
            <TimingCard
              key={idx}
              icon={item.icon}
              title={item.title}
              timing={item.timing}
              description={item.description}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </>
  );
}
