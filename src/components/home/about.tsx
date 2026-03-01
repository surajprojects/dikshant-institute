import Card from "../card/card";
import SectionHeader from "../ui/sectionHeader";
import { CardTypeList } from "@/utils/types/cardType";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function About() {
  const aboutData: SectionHeaderType = {
    title: "about us",
    subtitle: "building careers since day one",
    description:
      "Dikshant Institute is a trusted computer education and academic coaching center dedicated to providing quality education. We empower students with industry-relevant skills and strong academic foundations.",
  };

  const cardsData: CardTypeList = [
    {
      icon: "Goal",
      title: "our mission",
      description:
        "To deliver affordable, high-quality computer and academic education that prepares students for real-world challenges.",
    },
    {
      icon: "Eye",
      title: "our vision",
      description:
        "To become the regions's most trusted institute for computer education and academic excellence.",
    },
    {
      icon: "Award",
      title: "our values",
      description:
        "Integrity, practical learning, student-first approach, and continuous improvement in teaching standards.",
    },
    {
      icon: "Users",
      title: "our community",
      description:
        "A growing family of students, parents, and educators working together to shape brighter futures.",
    },
  ];
  return (
    <>
      <div className="section-wrapper">
        {/* Header */}
        <SectionHeader
          title={aboutData.title}
          subtitle={aboutData.subtitle}
          description={aboutData.description}
        />
        {/* Body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-14">
          {cardsData.map((item, idx) => (
            <Card key={idx} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </>
  );
}
