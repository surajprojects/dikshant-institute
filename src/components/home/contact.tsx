import ContactCard from "../card/contactCard";
import SectionHeader from "../ui/sectionHeader";
import { CardTypeList } from "@/utils/types/cardType";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function Contact() {
  const contactData: SectionHeaderType = {
    title: "contact us",
    subtitle: "Get in Touch",
    description: "Reach out to us for course details, fees, or admission guidance.",
  };

  const contactCardsData: CardTypeList = [
    {
      icon: "MapPin",
      title: "address",
      description: "Basement of Bank of India, Pali Road Sheopur (M.P.) - 476337",
    },
    {
      icon: "Phone",
      title: "phone",
      description: "+91 98989 98988",
    },
    {
      icon: "Mail",
      title: "email",
      description: "dikshantinstitute@gmail.com",
    },
    {
      icon: "Clock",
      title: "working hours",
      description: "Mon-Sat, 7:00 AM - 7:00 PM",
    },
  ];
  return (
    <>
      <div id="contact" className="bg-foreground">
        <div className="section-wrapper">
          {/* Header */}
          <SectionHeader
            title={contactData.title}
            subtitle={contactData.subtitle}
            description={contactData.description}
            capitalize={false}
          />
          {/* Body */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col flex-wrap gap-6 mt-14">
              {contactCardsData.map((item, idx) => (
                <ContactCard
                  key={idx}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
