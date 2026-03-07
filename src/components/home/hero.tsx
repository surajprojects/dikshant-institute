import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="relative w-full">
        {/* Background Image */}
        <div className="w-full h-152">
          <Image
            src={"/students.jpg"}
            fill={true}
            preload={true}
            alt="hero-section"
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-white/65 to-white/15"></div>

        {/* Content */}
        <div className="absolute inset-0 mx-auto w-full xl:max-w-7xl px-4 md:px-8 flex flex-col justify-center">
          {/* Content Wrapper */}
          <div className="flex flex-col items-center gap-y-2.5 sm:gap-y-3.5">
            <span className="flex bg-blue-50/70 w-fit px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl text-blue-600 text-xs font-medium">
              <GraduationCap className="size-4 mr-1.5" /> Computer Education & Academic Coaching
            </span>
            <h1 className="text-4xl sm:text-6xl text-gray-900 font-bold max-w-6xl text-center">
              Empowering Students with <span className="text-secondary">Computer</span> &{" "}
              <span className="text-primary">Academic</span> Excellence
            </h1>
            <p className="text-gray-700 text-sm sm:text-2xl max-w-4xl text-center my-1.5 sm:my-4">
              Professional computer courses and academic coaching for 5th-10th standard students.
              Build your future with Dikshant Institute.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
              <Link
                href="#admissionenquiry"
                className="text-white text-sm bg-primary py-3 px-8 rounded-lg flex justify-center items-center font-semibold hover:bg-primary/90 btn"
              >
                Enroll Now
                <ArrowRightIcon className="size-4 ml-2" />
              </Link>
              <Link
                href="#courses"
                className="text-secondary border border-secondary/60 text-sm bg-white py-3 px-8 rounded-lg flex justify-center items-center font-semibold hover:bg-gray-100 btn"
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
