import SectionHeader from "../ui/sectionHeader";
import AdmissionEnquiryCard from "../card/admissionEnquiryCard";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function AdmissionEnquiry() {
  const admissionEnquiryData: SectionHeaderType = {
    title: "admission enquiry",
    subtitle: "start your journey today",
    description: "Fill out the form below and we'll reach out to you shortly.",
  };
  return (
    <>
      <div id="admissionenquiry" className="section-wrapper">
        {/* Header */}
        <SectionHeader
          title={admissionEnquiryData.title}
          subtitle={admissionEnquiryData.subtitle}
          description={admissionEnquiryData.description}
        />
        {/* Admission Enquiry Form */}
        <div className="w-full flex items-center justify-center mt-8">
          <AdmissionEnquiryCard />
        </div>
      </div>
    </>
  );
}
