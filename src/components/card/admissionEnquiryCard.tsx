"use client";

import { Send } from "lucide-react";
import Spinner from "../ui/spinner";
import FormField from "../form/formField";
import { useForm } from "@formspree/react";
import { ChangeEvent, useState } from "react";

export default function AdmissionEnquiryCard() {
  const initialData = {
    fullName: "",
    mobileNo: "",
    course: "",
    message: "",
  };

  const [state, handleSubmit] = useForm("xbdankdn");
  const [formData, setFormData] = useState(initialData);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;
    setFormData((prevData) => {
      return {
        ...prevData,
        [fieldName]: fieldValue,
      };
    });
  };
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        {/* Success Message */}
        {showMessage && (
          <p className="text-green-500 border border-gray-100 font-medium px-4 py-2 rounded-xl shadow-sm text-sm absolute bg-white -translate-y-14">
            Congratulations message received 🎉🎉🎉
          </p>
        )}
        {/* Error Message */}
        {showErrorMessage && (
          <p className="text-red-500 border border-gray-100 font-medium px-4 py-2 rounded-xl shadow-sm text-sm absolute bg-white -translate-y-14">
            ❌ Something went wrong!!!
          </p>
        )}
        <form
          onSubmit={async (evt) => {
            evt.preventDefault();
            await handleSubmit(formData);
            if (state.succeeded) {
              setFormData(initialData);
              setShowMessage(true);
            } else {
              setShowErrorMessage(true);
            }
            setTimeout(() => {
              setShowMessage(false);
              setShowErrorMessage(false);
            }, 5000);
          }}
          className="w-full sm:w-lg rounded-2xl bg-white border border-gray-50 p-4 shadow-sm hover:shadow-md transition-effect"
        >
          <div className="flex flex-wrap gap-x-3 sm:gap-x-4">
            {/* Full Name */}
            <FormField
              id="fullName"
              title="Full Name"
              textHolder="Your Name"
              fieldValue={formData.fullName}
              onChangeFunc={handleChange}
            />
            {/* Mobile No */}
            <div className="flex flex-col my-2 md:my-3 flex-1">
              <label htmlFor="mobileNo" className="font-sans font-medium text-sm text-gray-800">
                Mobile No.*
              </label>
              <input
                type="text"
                name="mobileNo"
                id="mobileNo"
                placeholder="1234567890"
                inputMode="numeric"
                maxLength={10}
                value={formData.mobileNo}
                onChange={(e) => {
                  const mobileNoValue = e.target.value.replace(/\D/g, "");
                  setFormData((prevData) => {
                    return {
                      ...prevData,
                      mobileNo: mobileNoValue,
                    };
                  });
                }}
                className="flex border border-gray-300 font-sans font-normal text-gray-800 rounded-xl px-3 py-2 my-2 text-sm outline-none focus-within:ring-secondary focus-within:ring-2 focus-within:ring-offset-2 transition duration-75 ease-out grow"
              />
            </div>
          </div>
          {/* Course */}
          <div className="flex flex-col my-2 md:my-3 flex-1">
            <label htmlFor="course" className="font-sans font-medium text-sm text-gray-800">
              Course Interested In
            </label>
            <select
              required
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="flex border border-gray-300 font-sans font-normal text-gray-800 rounded-xl px-3 py-2 my-2 text-sm outline-none focus-within:ring-secondary focus-within:ring-2 focus-within:ring-offset-2 transition duration-75 ease-out cursor-pointer"
            >
              <option value="" disabled>
                Select Course
              </option>
              <option value="dca">DCA</option>
              <option value="pgdca">PGDCA</option>
              <option value="cpct">CPCT Preparation</option>
              <option value="tally">TALLY</option>
              <option value="cit">CIT</option>
              <option value="cca">CCA</option>
              <option value="computer_basics">Computer Basics</option>
              <option value="5th-10th_academic">5th-10th Academic</option>
            </select>
          </div>
          {/* Message */}
          <div className="flex flex-col my-3 flex-1">
            <label htmlFor="message" className="font-sans font-medium text-sm text-gray-800">
              Message &#40;Optional&#41;
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any questions or details..."
              className="border border-gray-300 font-sans font-normal text-[#2a2522] rounded-xl px-3 py-2 my-2 text-sm outline-none focus-within:ring-secondary focus-within:ring-2 focus-within:ring-offset-2 transition duration-75 ease-out min-h-28"
            ></textarea>
            <button
              type="submit"
              disabled={state.submitting}
              className="text-white text-xs bg-primary py-3 px-8 rounded-lg flex justify-center items-center font-semibold hover:bg-primary/90 btn mt-3 disabled:cursor-not-allowed disabled:bg-primary/90"
            >
              {state.submitting ? (
                <div className="flex justify-center items-center w-full">
                  <Spinner customize={true} />
                </div>
              ) : (
                "Submit Enquiry"
              )}
              <Send className="size-3.5 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
