import SectionHeader from "../ui/sectionHeader";
import { CardTypeList } from "@/utils/types/cardType";
import WhyDikshantCard from "../card/whyDikshantCard";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function WhyDikshant() {
  const whyDikshantData: SectionHeaderType = {
    title: "why dikshant?",
    subtitle: "why students trust us",
    description:
      "Discover what makes Dikshant Institute the right choice for your education journey.",
  };

  const whyDikshantCardsData: CardTypeList = [
    {
      icon: "Users",
      title: "experienced faculty",
      description: "Learn from qualified and dedicated professionals.",
    },
    {
      icon: "Wrench",
      title: "practical training",
      description: "Hands-on practice with real-world project and tools.",
    },
    {
      icon: "UserCheck",
      title: "small batch size",
      description: "Personalized attention with limited seats per batch.",
    },
    {
      icon: "IndianRupee",
      title: "affordable fees",
      description: "Quality education at prices that respect your budget.",
    },
    {
      icon: "Compass",
      title: "career guidance",
      description: "Mentorship and placement support for your career path.",
    },
    {
      icon: "CircleCheck",
      title: "certified courses",
      description: "Recognized certifications to boost your professional profile.",
    },
  ];
  return (
    <>
      <div className="section-wrapper">
        {/* Header */}
        <SectionHeader
          title={whyDikshantData.title}
          subtitle={whyDikshantData.subtitle}
          description={whyDikshantData.description}
        />
        {/* Body */}
        <div className="w-full flex flex-col sm:flex-row justify-center flex-wrap gap-6 lg:gap-8 mt-14">
          {whyDikshantCardsData.map((item, idx) => (
            <WhyDikshantCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
