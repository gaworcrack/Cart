/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-[67.7vh] flex flex-col items-center py-10">
      <div className="w-full max-w-3xl px-5">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to Mohammad's Shopping Page
        </h2>

        <p className="bg-white p-6 rounded-lg shadow-md text-gray-700 text-justify leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ab
          soluta excepturi maiores eveniet nulla quae optio nihil culpa quidem
          illo quaerat suscipit mollitia eius labore amet dolor, officia porro
          sequi ea molestiae! Laboriosam in ea voluptatem. Quisquam quibusdam
          quae explicabo, ab eos totam exercitationem assumenda sapiente, sit,
          rerum et est ut asperiores?
          {/* Add more content as needed */}
        </p>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push("/about-us")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all ease-in-out duration-200 active:scale-95 text-lg font-medium"
          >
            Read More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
