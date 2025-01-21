import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around gap-16 bg-[#0a0f43] p-16">
      <h1 className="text-3xl font-sans font-bold text-white">GET IN TOUCH</h1>

      <div className="relative flex w-3/4 items-center justify-center">
        <div className="absolute top-10 h-[1px] w-[70%] border-b border-white" />

        <div className="flex w-full flex-col items-center gap-4 font-bold font-display text-white">
          <div className="z-10 flex flex-col items-center justify-center rounded-full bg-blue-700 p-7 hover:bg-orange-500">
            <MapPinIcon className="w-6" />
          </div>
          <h1>Our Location</h1>
        </div>

        <div className="flex w-full flex-col items-center gap-4 font-display font-bold text-white">
          <div className="z-10 flex flex-col items-center justify-center rounded-full bg-blue-700 p-7 hover:bg-orange-500">
            <PhoneIcon className="w-6" />
          </div>
          <h1>Our Phone Number</h1>
        </div>

        <div className="flex w-full flex-col items-center gap-4 font-display font-bold text-white">
          <div className="z-10 flex flex-col items-center justify-center rounded-full bg-blue-700 p-7 hover:bg-orange-500">
            <MailIcon className="w-6" />
          </div>
          <h1>Our Email Address</h1>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-bold text-white">FOLLOW US</h1>
        <div className="flex items-center justify-center gap-4">
          <img src="/facebook.svg" alt="facebook" />
          <img src="/github.svg" alt="github" />
          <img src="/youtube.svg" alt="youtube" />
          <img src="/twitter.svg" alt="twitter" />
        </div>
      </div>

      <div className="h-[1px] w-11/12 border-b border-white" />
      <p className="text-sm font-semibold font-sans text-white">
        © 2024 All Rights Reserved By The Empowering PWDs
      </p>
    </div>
  );
};
export default Footer;
