import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div></div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">WHY CHOOSE US </span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg"></p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-3">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <Icon icon="mdi:neighbourhood" className="w-10 h-10 " />
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Good Neighborhoods
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              We offer land listings in desirable neighborhoods known for their
              safety, amenities, and quality of life.
            </p>
            <Link
              href="/about"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <Icon icon="carbon:group-security" className="w-10 h-10 " />
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Reliable Agents
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Our experienced agents are dedicated to helping you find the
              perfect land and guide you through the buying process.
            </p>
            <Link
              href="/about"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <Icon
                icon="eos-icons:pod-security"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Housing Security
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              We prioritize your safety and ensure that all land listings adhere
              to proper legal regulations and security measures.
            </p>
            <Link
              href="/about"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
