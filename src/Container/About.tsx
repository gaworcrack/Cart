/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full h-fit p-4">
      <h2 className="text-3xl text-center mt-3 mb-12 font-semibold">
        About Us
      </h2>
      <p className="text-lg text-justify leading-relaxed mb-12 px-6">
        Welcome to Mohammad Shop! We are a passionate team dedicated to making a
        difference between other shopping pages. Since our founding, we've
        focused on delivering quality, sustainable, customized solutions that
        meet the unique needs of our customers. We believe in building
        meaningful relationships and creating value through our commitment to
        excellence and innovation. Our team is made up of experts in design,
        technology, customer support, and sustainable development, all working
        together to make a positive impact. We aim to go beyond expectations,
        ensuring that every experience with us is trustworthy, transparent, and
        fulfilling. Thank you for being part of our journey!
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
