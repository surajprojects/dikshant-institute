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
      abbreviation: "ab",
      name: "mr. anuj singh bhadoriya",
      position: "founder & director",
      experience:
        "Visionary educator with 10+ years of experience in academic excellence and student career development.",
    },
    {
      abbreviation: "ab",
      name: "mr. ashish singh bhadoriya",
      position: "co-founder & director",
      experience:
        "Passionate educator with 8+ years of experience in computer education and institute management.",
    },
    {
      abbreviation: "sc",
      name: "mr. suraj chauhan",
      position: "senior faculty",
      experience:
        "Expert in Tally and Full-Stack Development, with hands-on experience building modern web applications.",
    },
  ];
  return (
    <>
      <div id="faculty" className="bg-foreground">
        <div className="section-wrapper">
          {/* Header */}
          <SectionHeader
            title={facultyData.title}
            subtitle={facultyData.subtitle}
            description={facultyData.description}
            capitalize={false}
          />
          {/* Body */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">
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
