import { FacultyCardType } from "@/utils/types/facultyType";

export default function FacultyCard({
  abbreviation = "na",
  name = "name",
  position = "position",
  experience = "experience",
}: Partial<FacultyCardType>) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-effect">
        {/* Logo Wrapper */}
        <div className="bg-secondary flex justify-center items-center h-28 rounded-t-xl">
          <div className="bg-white/30 text-white border-2 border-white/40 w-fit p-7 font-semibold uppercase text-lg rounded-full flex items-center justify-center">
            <span className="absolute">{abbreviation}</span>
          </div>
        </div>
        {/* Content Wrapper */}
        <div className="flex flex-col items-center p-6">
          {/* Name */}
          <p className="font-semibold text-lg capitalize text-center">{name}</p>
          {/* Position */}
          <p className="text-primary text-sm font-medium my-1.5 capitalize">{position}</p>
          {/* Experience */}
          <p className="text-gray-600 text-xs text-center">{experience}</p>
        </div>
      </div>
    </>
  );
}
