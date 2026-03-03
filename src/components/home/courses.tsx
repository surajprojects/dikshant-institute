import CourseCard from "../card/courseCard";
import SectionHeader from "../ui/sectionHeader";
import { CourseCardTypeList } from "@/utils/types/courseCardType";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function Courses() {
  const coursesData: SectionHeaderType = {
    title: "our courses",
    subtitle: "programs designed for your success",
    description:
      "From computer fundamentals to advanced diplomas, we have the right course for every learner.",
  };

  const courseCardsData: CourseCardTypeList = [
    {
      icon: "Monitor",
      name: "DCA",
      fullName: "Diploma in Computer Applications",
      description: "Comprehensive diploma covering MS Office, internet, and basic programming.",
    },
    {
      icon: "GraduationCap",
      name: "PGDCA",
      fullName: "Post Graduation Diploma in Computer Applications",
      description: "Advanced diploma for graduates covering databases, web design, and more.",
    },
    {
      icon: "BookCheck",
      name: "CPCT Preparation",
      fullName: "Computer Proficiency Certification Test",
      description: "Focused coaching for government computer proficiency certification test.",
    },
    {
      icon: "FileSpreadsheet",
      name: "TALLY",
      fullName: "Accounting Software",
      description: "Master Tally for GST, accounting, inventory, and payroll management.",
    },
    {
      icon: "Laptop",
      name: "CIT",
      fullName: "Certification in Information Technology",
      description: "Foundation course covering essential IT skills and computer operations.",
    },
    {
      icon: "Laptop",
      name: "CCA",
      fullName: "Certification in Computer Applications",
      description: "Short-term course ideal for beginners looking to build computer literacy.",
    },
    {
      icon: "BookOpen",
      name: "Computer Basics",
      fullName: "Fundamentals",
      description: "Learn typing, MS Office, email, and interanet basics from scratch.",
    },
    {
      icon: "School",
      name: "5th-10th Academic",
      fullName: "School Coaching",
      description: "Subject-wise coaching and exam preparation for school students.",
    },
  ];
  return (
    <>
      <div id="courses" className="bg-foreground">
        <div className="section-wrapper">
          {/* Header */}
          <SectionHeader
            title={coursesData.title}
            subtitle={coursesData.subtitle}
            description={coursesData.description}
          />
          {/* Body */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-14">
            {courseCardsData.map((item, idx) => (
              <CourseCard
                key={idx}
                icon={item.icon}
                name={item.name}
                fullName={item.fullName}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
