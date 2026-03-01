import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Courses from "@/components/home/courses";
import Timings from "@/components/home/timings";
import Faculty from "@/components/home/faculty";
import Contact from "@/components/home/contact";
import WhyDikshant from "@/components/home/whyDikshant";
import Testimonials from "@/components/home/testimonials";
import AdmissionEnquiry from "@/components/home/admissionEnquiry";

export default function Home() {
  return (
    <>
      <section className="w-full pt-[3.8rem]">
        {/* Hero Section */}
        <Hero />
        {/* About Us */}
        <About />
        {/* Courses */}
        <Courses />
        {/* Timings */}
        <Timings />
        {/* Faculty */}
        <Faculty />
        {/* Why Dikshant */}
        <WhyDikshant />
        {/* Testimonials */}
        <Testimonials />
        {/* Admission Enquiry */}
        <AdmissionEnquiry />
        {/* Contact */}
        <Contact />
      </section>
    </>
  );
}
