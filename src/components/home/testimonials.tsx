import SectionHeader from "../ui/sectionHeader";
import TestimonialCard from "../card/testimonialCard";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";
import { TestimonialCardTypeList } from "@/utils/types/testimonialCardType";

export default function Testimonials() {
  const testimonialsData: SectionHeaderType = {
    title: "testimonials",
    subtitle: "what our students say",
    description: "Real feedback from our students about their learning journey with us.",
  };

  const testimonialCardsData: TestimonialCardTypeList = [
    {
      testimonial:
        "Dikshant Institute gave me the practical skills I needed to land my first IT job. The faculty is incredibly supportive.",
      name: "ankit patel",
      course: "DCA",
    },
    {
      testimonial:
        "The PGDCA program was thorough and well-structured. I feel confident in my computer skills now.",
      name: "sneha tiwari",
      course: "PGDCA",
    },
    {
      testimonial:
        "I completed Tally here and immediately got placed in an accounting firm. Excellent training!",
      name: "rahul jain",
      course: "TALLY",
    },
    {
      testimonial:
        "Thanks to Dikshant Institute, I cleared CPCT in my first attempt. Their preparation strategy is unmatched.",
      name: "priya kushwaha",
      course: "CPCT prep",
    },
  ];
  return (
    <>
      <div className="bg-foreground">
        <div className="section-wrapper">
          {/* Header */}
          <SectionHeader
            title={testimonialsData.title}
            subtitle={testimonialsData.subtitle}
            description={testimonialsData.description}
          />
          {/* Body */}
          <div className="w-full flex flex-col sm:flex-row justify-center flex-wrap gap-4 lg:gap-6 mt-14">
            {testimonialCardsData.map((item, idx) => (
              <TestimonialCard
                key={idx}
                testimonial={item.testimonial}
                name={item.name}
                course={item.course}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
