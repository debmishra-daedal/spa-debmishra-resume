"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[92vh] px-8">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center text-center lg:text-left">
        <img
          src="/image/debmishra.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mb-4"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Deb Mishra, FRM
        </Typography>
        <Typography variant="lead" color="gray" className="mb-8">
          An ardent entrepreneur with a penchant for technology.
        </Typography>
        <div className="flex flex-col items-center lg:items-start mb-8">
          <Typography className="mb-4 text-blue-gray-900 font-medium uppercase">
            Download my latest CVs:
          </Typography>
          <div className="flex gap-4">
            <a
              href="/files/freelancer.pdf"
              download
              className="flex items-center gap-2 text-blue-500 hover:underline"
            >
              <img
                src="/image/cloud-download.svg"
                alt="Download freelancer CV"
                className="w-6 h-6"
              />
              <span>Highlighting my freelancer work</span>
            </a>
            <a
              href="/files/entrepreneur.pdf"
              download
              className="flex items-center gap-2 text-blue-500 hover:underline"
            >
              <img
                src="/image/cloud-download.svg"
                alt="Download entrepreneur CV"
                className="w-6 h-6"
              />
              <span>Based on my start-up work</span>
            </a>
          </div>
        </div>
        <Typography className="mb-4 text-blue-gray-900 font-medium uppercase">
          Connect me on:
        </Typography>
        <div className="gap-2 flex">
            <a href="https://www.linkedin.com/in/whoisdebmishra" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            </a>
          <a href="https://github.com/debmishra-daedal" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="gray">
            <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center">
        <div className="container mx-auto text-justify max-w-[75%]">
          <Typography variant="h4" color="blue-gray" className="text-center">
        Experienced Financial Technology Professional
          </Typography>
          <Typography
        variant="lead"
        color="gray"
        className="mt-4 mb-12 w-full"
          >
        Having spent over 15 years working in financial technology sector, 
        I have worked extensively in managing existing data management platforms, 
        migration of data management platforms, maintaining various 
        enterprise data management system and providing techno-functional assistance
        in overall management of reference data management. Having delivered more than
        a few large projects across both buy-side and sell-side financial entities, 
        I have garnered a well formed acumen of various financial entities 
        e.g. instrument static data, price management, legal entities, ratings etc.
          </Typography>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
