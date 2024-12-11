/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full h-fit p-4">
      <h2 className="text-3xl text-center mt-3 mb-12 font-semibold">
        Tentang Kami
      </h2>
      <p className="text-lg text-justify leading-relaxed mb-12 px-6">
        Welcome to Tofik Shop!
      </p>
      <Image
        alt="About shopping"
        src="https://i.pcmag.com/imagery/articles/07Hm155HQLUB0VhzcIsrou8-12..v1717434783.jpg"
        width={550}
        height={250}
        className="mx-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default About;
