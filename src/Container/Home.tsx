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
          Welcome to Tofik Shopping Page
        </h2>

        <p className="bg-white p-6 rounded-lg shadow-md text-gray-700 text-justify leading-relaxed">
          KAMI MENJUAL DOMAIN UNTUK WEBSITE DAN BISNIS ANDA, .com .xyz .my.id .shop .online
          {/* Add more content as needed */}
        </p>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all ease-in-out duration-200 active:scale-95 text-lg font-medium"
          >
            Baca Lebih Lanjut Tentang Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
