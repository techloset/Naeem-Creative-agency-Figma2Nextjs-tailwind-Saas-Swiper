import sendIcon from "../../assests/images/send-icon.png";
import logo from "../../assests/images/logo.png";
import liveLocation from "../../assests/images/location-map.png";
import fb from "../../assests/images/fb.png";
import instagram from "../../assests/images/instagram.png";
import linkedin from "../../assests/images/linkedin.png";
import twitter from "../../assests/images/twitter.png";
import curve from "../../assests/images/curve.png";
import rightErrow from "../../assests/images/rightErrow.png";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={`topSection relative dark:bg-[#00113B]`}>
        <Image
          src={curve}
          alt="curve"
          className="w-full absolute top-40 -z-40"
        />
        <Image
          src={curve}
          alt="curve"
          className="w-full absolute bottom-5 -z-40"
        />
        <div className="mx-[24px] lg:mx-[80px] xl:mx-[160px] py-[100px] lg:py-[200px]">
          <div className="rounded-[20px] text-white bg-exact-yellow text-center pt-16 pb-[84px]">
            <p className="pb-2 md:pb-3 xl:pb-4 text-sm md:text-base font-medium">
              Are You Ready For
            </p>
            <h1 className="pb-4 md:pb-6 xl:pb-8 text-[21px] md:text-8 xl:text-[42px] leading-7 xl:leading-[56px] font-semibold">
              Start a New Project
            </h1>
            <div className="flex justify-center">
              <button
                className={`shadow-2xl shadow-exact-red/50 md:max-w-fit py-[19px] px-[42.5px] bg-[#4C40F7] rounded-xl `}
              >
                <span className="flex items-baseline">
                  <p className="text-base font-semibold leading-[26px] text-white">
                    Start Now
                  </p>
                  <Image
                    src={rightErrow}
                    alt="icon"
                    className="w-[20px] h-[14px] ml-4"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer core section */}
        <div className="bg-[#00113B] mt-40">
          <div className="mx-[24px] lg:mx-[80px] xl:mx-[160px] text-white relative pt-40">
            {/* Subscribe section */}
            <div className="w-full mx-auto absolute -top-40">
              <div className="text-center rounded-[20px]  bg-[#4C40F7] pt-[60px] pb-[80px]">
                <p className="pb-2 md:pb-3 xl:pb-4 text-sm md:text-base font-medium">
                  Get Notified About Project
                </p>
                <h1 className="pb-4 md:pb-6 xl:pb-8 text-[21px] md:text-8 xl:text-[42px] leading-7 xl:leading-[56px] font-semibold">
                  Subscribe Now
                </h1>
                <div className="flex justify-center">
                  <div className="flex justify-center text-black/75 items-center w-fit relative">
                    <input
                      type="email"
                      placeholder="Email"
                      maxLength={100}
                      className="py-5 pl-7 pr-14 rounded-[11px] text-lg leading-[32px] font-normal mx-5 md:w-[500px] w-full "
                    />
                    <Image
                      src={sendIcon}
                      alt="send-icon"
                      className="w-[19px] h-[18px] absolute right-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* map section */}
            <div className="grid grid-cols-1 space-y-8  gap-x-16 justify-between lg:grid-cols-10 mt-20 pb-11">
              <div className="col-span-4 space-y-8">
                <div className="p-3 w-fit bg-exact-purple rounded-lg shadow-[-5px_10px_30px_rgba(76,64,247,0.5)]">
                  <Image src={logo} alt="Logo" className="w-5 h-5" />
                </div>
                <p className="text-base max-w-[365px] font-medium opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="col-span-4 space-y-8 ">
                <h2 className="text-xl font-semibold">Our Office</h2>
                <Image src={liveLocation} alt="map" className="w-full" />
              </div>
              <div className="col-span-2 space-y-8 ">
                <h2 className="text-xl">Contact</h2>
                <div className="space-y-5 opacity-75">
                  <p className="text-base font-medium">
                    Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta
                  </p>
                  <p className="text-base font-medium">info@yourdomain .com</p>
                  <div>
                    <Link href={`tel:+92 300 6575536`}>
                      <p className="text-base font-medium">
                        +62 (0) 000 0000 00
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* emty div for underliene */}
            <div className="border-[1px] mb-16 lg:mb-8"></div>
            {/* copy right section */}
            <div className="flex lg:flex-row text-[#ABAFC7] space-y-8  flex-col justify-center lg:justify-between pb-[68px] text-base font-medium items-center">
              <p className="lg:mt-5">© 2021 Creative Agency</p>
              <ul className="flex space-x-4 lg:space-x-9">
                <li>
                  <Link href={"#"}>Home</Link>
                </li>
                <li>
                  <Link href={"#"}>Work</Link>
                </li>
                <li>
                  <Link href={"#"}>About</Link>
                </li>
                <li>
                  <Link href={"#"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"#"}>Contact</Link>
                </li>
              </ul>
              <div className="flex space-x-[10px]">
                <Link href={"#"}>
                  <Image src={fb} alt="fb" />
                </Link>
                <Link href={"#"}>
                  <Image src={instagram} alt="instagram" />
                </Link>
                <Link href={"#"}>
                  <Image src={linkedin} alt="linkedin" />
                </Link>
                <Link href={"#"}>
                  <Image src={twitter} alt="twitter" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
