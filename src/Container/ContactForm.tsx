"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "./schema";

type FormFields = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-10 max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-md space-y-4"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block font-medium mb-1">
          Full Name
        </label>
        <input
          {...register("fullName")}
          type="text"
          id="fullName"
          className="w-full text-black px-3 h-9 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber" className="block font-medium mb-1">
          Phone Number
        </label>
        <input
          {...register("phoneNumber")}
          type="text"
          id="phoneNumber"
          className="w-full text-black px-3 h-9 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phoneNumber && (
          <p className="text-red-600 text-sm mt-1">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-10 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition-transform"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
