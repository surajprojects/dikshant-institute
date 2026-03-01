import FacultyCard from "../card/facultyCard";
import SectionHeader from "../ui/sectionHeader";
import { FacultyCardTypeList } from "@/utils/types/facultyType";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function Faculty() {
  const facultyData: SectionHeaderType = {
    title: "our faculty",
    subtitle: "Learn from the Best",
    description: "Our experienced team is dedicated to your growth and success.",
  };

  const facultyCardsData: FacultyCardTypeList = [
    {
      abbreviation: "rs",
      name: "mr. rajesh sharma",
      position: "founder & director",
      experience:
        "Visionary educator with 10+ years in computer education and institute management.",
    },
    {
      abbreviation: "ps",
      name: "mrs. priya sharma",
      position: "co-founder & director",
      experience: "Passionate about academic excellence and student career development.",
    },
    {
      abbreviation: "av",
      name: "mr. amit verma",
      position: "senior faculty",
      experience: "Expert in Tally, DCA, and PGDCA with hands-on industry experience.",
    },
    {
      abbreviation: "ng",
      name: "ms. neha gupta",
      position: "faculty member",
      experience: "Specializes in CPCT preparation and computer fundamentals training.",
    },
  ];
  return (
    <>
      <div className="bg-foreground">
        <div className="section-wrapper">
          {/* Header */}
          <SectionHeader
            title={facultyData.title}
            subtitle={facultyData.subtitle}
            description={facultyData.description}
            capitalize={false}
          />
          {/* Body */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-14">
            {facultyCardsData.map((item, idx) => (
              <FacultyCard
                key={idx}
                abbreviation={item.abbreviation}
                name={item.name}
                position={item.position}
                experience={item.experience}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
