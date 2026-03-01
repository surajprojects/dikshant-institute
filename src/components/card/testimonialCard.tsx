import { Quote, Star } from "lucide-react";
import { TestimonialCardType } from "@/utils/types/testimonialCardType";

export default function TestimonialCard({
  testimonial = "Testimonial",
  name = "Student Name",
  course = "Course",
}: Partial<TestimonialCardType>) {
  return (
    <>
      <div className="w-full sm:w-96 rounded-2xl bg-white border border-gray-50 p-5 py-6 shadow-sm hover:shadow-md transition-effect grid grid-cols-1 gap-2.5">
        {/* Quote  */}
        <div className="text-primary/40">
          <Quote className="size-6" />
        </div>
        {/* Testimonial */}
        <p className="text-sm/6">{testimonial}</p>
        <div className="flex gap-1">
          <Star className="size-3.5 text-amber-400 fill-amber-400" />
          <Star className="size-3.5 text-amber-400 fill-amber-400" />
          <Star className="size-3.5 text-amber-400 fill-amber-400" />
          <Star className="size-3.5 text-amber-400 fill-amber-400" />
          <Star className="size-3.5 text-amber-400 fill-amber-400" />
        </div>
        <div>
          {/* Name */}
          <p className="text-sm font-semibold capitalize mb-1">{name}</p>
          {/* Course */}
          <p className="text-muted text-xs capitalize">{course} student</p>
        </div>
      </div>
    </>
  );
}
