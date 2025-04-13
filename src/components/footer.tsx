import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
      <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
        <Typography className="text-center font-normal !text-gray-700">
        &copy; {CURRENT_YEAR} Made by{" "}
        <a href="https://daedal.org" target="_blank">
          Daedal Inc.
        </a>{" "}All rights are reserved.
        </Typography>
        <div className="flex gap-4">
        <a href="/privacy-policy" className="text-gray-700 hover:underline">
          Privacy Policy
        </a>
        <a href="/cookie-policy" className="text-gray-700 hover:underline">
          Cookie Policy
        </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
export default Footer;
