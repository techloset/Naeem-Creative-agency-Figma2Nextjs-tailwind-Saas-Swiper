import Head from "next/head";
import styles from "../styles/Home.module.scss";
import heroImage from "../assests/images/hero.png";
import thumnailImg from "../assests/images/video-thumnail.png";
import roomImage1 from "../assests/images/room-1.png";
import roomImage2 from "../assests/images/room-2.png";
import roomImage3 from "../assests/images/room-3.png";
import roomImage4 from "../assests/images/room-4.png";
import roomImage5 from "../assests/images/room-5.png";
import roomImage6 from "../assests/images/room-6.png";
import logo1 from "../assests/images/customer-logos/amazon.png";
import logo2 from "../assests/images/customer-logos/jeep.png";
import logo3 from "../assests/images/customer-logos/careem.png";
import logo4 from "../assests/images/customer-logos/hubSpot.png";
import logo5 from "../assests/images/customer-logos/jQuery.png";
import logo6 from "../assests/images/customer-logos/canon.png";
import logo7 from "../assests/images/customer-logos/fedex.png";
import rightErrow from "../assests/images/rightErrow.png";
import logo8 from "../assests/images/customer-logos/bitcoin.png";
import logo9 from "../assests/images/customer-logos/pirelli.png";
import logo10 from "../assests/images/customer-logos/philips.png";
import curve from "../assests/images/curve.png";
import bgHeroSec from "../assests/images/bg-hero-section.png";
import bgService from "../assests/images/bg-service.png";
import Image from "next/image";
import SectionHeader from "@/components/sectionHeader/SectionHeading";
import { serviceCardData } from "@/contents/serviceCardData";
import { useState } from "react";
import Link from "next/link";
import CustomerCard from "@/components/customer-card/CustomerCard";
import ListIcon from "@/components/list-icon/ListIcon";
import SwiperSlider from "@/components/swiper-slider/SwiperSlider";
import { faqContent } from "@/contents/faqContent";
import dropdownIcon from "../assests/images/down-arrow.png";
import ratingStar from "../assests/images/ratingStar.png";
import { testimonialsData } from "@/contents/testimonialsData";

const Home = () => {
  const [stylish, setStylish] = useState(0);
  const [testimonialStyle, setTestimonialStyle] = useState(0);
  // embed youtube video function on puse and play
  const [thumnail, setThumnail] = useState(true);

  // Accordion drop down menu function start
  const [isActive, setIsActive] = useState(["one"]);
  const accordionDropdown = ({ uid }) => {
    if (isActive.indexOf(uid) === -1) {
      setIsActive([...isActive, uid]);
    } else {
      setIsActive((prevState) => prevState.filter((item) => item !== uid));
    }
  };
  // Accordion drop down menu function END
  return (
    <>
      <Head>
        <title>Creative Agency</title>
        <meta name="keywords" content="creative agency, web app" />
        <meta
          name="description"
          content="we provide sevices to grow your bussiness"
        />
      </Head>
      {/* hero Section */}
      <div
        className={`heroSection bg-bottom pb-[100px] lg:pb-[200px] bg-no-repeat lg:bg-none`}
      >
        <div className="absolute right-0 w-fit -z-40 invisible lg:visible">
          <Image src={bgHeroSec} alt="bgHeroSec" />
        </div>
        <div className="mx-[24px] lg:mx-[80px]  xl:mx-[160px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6 xl:mt-28 my-20 dark:text-white">
              <h1 className="text-3xl md:text-[42px] md:leading-[52px] xl:text-[56px] xl:leading-[72px]
               tracking-[-.8px] font-semibold">
                Make your business
                <span className="text-exact-orange dark:text-exact-yellow">
                  {" "}
                  more powerful{" "}
                </span>
               <br/>
                with us
              </h1>
              <p className="text-lg leading-[32px] lg:max-w-[365px] font-normal text-exact-gray">
                We provide various services to make your business grow and get
                bigger. Your satisfaction is our first priority.
              </p>
              <button
                className={`w-fit shadow-[-5px_10px_30px_rgba(76,64,247,0.5)] py-[19px] px-[35px] bg-exact-purple rounded-xl`}
              >
                <span className="flex items-baseline">
                  <p className="text-base font-semibold leading-[26px] text-white">
                    Get Started
                  </p>
                  <Image
                    src={rightErrow}
                    alt="icon"
                    className="w-[20px] h-[14px] ml-4"
                  />
                </span>
              </button>
            </div>
            <div className="order-first lg:order-none w-full">
              <Image src={heroImage} className="lg:invisible w-full" alt="heroImage" />
            </div>
          </div>
        </div>
      </div>

      {/* service section */}
      <div
        className={`servicesSection relative pb-[100px] lg:pb-[200px] -mt-16 bg-no-repeat bg-bottom`}
      >
        <div className="absolute right-0 -z-40 -bottom-56 invisible lg:visible">
          <Image src={bgService} alt="bgService" className="z-40" />
        </div>
        <div className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
          <SectionHeader
            title="Our Services"
            heading="The various services we provide to make your business more powerful"
          />
          <div className="serviceCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center text-center gap-x-8 gap-y-[60px]">
            {serviceCardData.map((cardData, index) => {
              const { svgIcon, title, desc, exactColor } = cardData;
              const isStylish = stylish === index;
              return (
                <div key={index} className="flex justify-center">
                  <div
                    onMouseEnter={() => setStylish(index)}
                    className={`card self-center py-11 px-[30px] shadow-2xl dark:shadow-blue-900/50 
                  space-y-11 max-w-[352px] flex flex-col rounded-2xl items-center ${
                    isStylish
                      ? `bg-${exactColor} shadow-${exactColor}`
                      : "bg-white"
                  }`}
                  >
                    <div
                      className={`p-8 shadow-xl ${`shadow-${exactColor}/50`} ${
                        isStylish
                          ? "bg-white shadow-gray-800/50"
                          : `bg-${exactColor}`
                      } rounded-full`}
                    >
                      <svg
                        className={`${
                          isStylish ? `fill-${exactColor}` : "fill-white"
                        } w-[33px] h-[33px]`}
                        viewBox="0 0 33 33"
                      >
                        {svgIcon}
                      </svg>
                    </div>
                    <div className="info space-y-4">
                      <h3
                        className={`dark:text-white text-xl lg:text-lg xl:text-xl font-semibold ${
                          isStylish ? "text-white" : "text-black"
                        }`}
                      >
                        {title}
                      </h3>
                      <p
                        className={`dark:text-white lg:max-w-[292px] text-lg leading-[32px] lg:text-base xl:text-lg xl:leading-[32px] font-normal ${
                          isStylish
                            ? "text-white"
                            : "text-[#6B6B6B]                          "
                        }`}
                      >
                        {desc}
                      </p>
                    </div>
                    <Link href="#">
                      <div
                        className={`dark:bg-[#020E2D] p-[17px] rounded-full hover:relative hover:left-1 hover:bg-[#F3F4F6] dark:fill-blue-600 fill-blue-600 ${
                          isStylish
                            ? `bg-white ${`fill-${exactColor}`} dark:bg-white/100 ${`dark:fill-${exactColor}`}`
                            : "bg-[#F3F4F6]"
                        } `}
                      >
                        <svg
                          className="font-bold w-[11px] h-[11px]"
                          width="12.000000pt"
                          height="12.000000pt"
                          viewBox="0 0 12.000000 12.000000"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <g transform="translate(0.000000,12.000000) scale(0.100000,-0.100000)">
                            <path d="M65 90 c18 -20 17 -20 -18 -20 -21 0 -37 -4 -37 -10 0 -5 16 -10 37 -10 35 0 36 0 18 -20 -26 -29 -3 -24 25 5 l23 25 -23 25 c-28 29 -51 34 -25 5z" />
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Documentation section */}

      <div className={`docSec mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
        <SectionHeader
          title="Our Documentation"
          heading="See what our profile is like and how we work for your business"
        />
      </div>
      <div
        className={`videoSlideSec ${styles.bgDocSec} grid grid-cols-1 justify-center px-3`}
      >
        <div className="flex justify-center mx-[24px] lg:mx-[80px]  xl:mx-[160px]">
          {thumnail ? (
            <div className="cursor-pointer" onClick={() => setThumnail(false)}>
              <Image src={thumnailImg} alt="image not found" width={15000} />
            </div>
          ) : (
            <div className="w-full cursor-pointer">
              <iframe
                className={`w-full aspect-video ${
                  thumnail ? "hidden" : "block"
                } rounded-[20px] mb-16 lg:mb-20`}
                src="https://www.youtube.com/embed/TGzMSOhdNtQ?autoplay=1&mute=1"
              ></iframe>
            </div>
          )}
        </div>
      </div>

      {/* Documentation worth section */}
      <div className="worthSec mb-[100px] lg:mb-[200px] bg-[#F9F9FD] dark:bg-[#020E2D] py-24">
        <div
          className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px] gap-10 grid grid-col-1 lg:grid-cols-2 justify-center items-center`}
        >
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            <div className="grid gap-10 md:mt-12">
              <CustomerCard
                title="70K+"
                color="text-exact-purple dark:text-white"
                desc="We have more than customers"
              />
              <CustomerCard
                title="10M+"
                color="text-exact-red"
                desc="People who are helped because of our hard work"
              />
            </div>
            <div className="grid gap-10 md:mb-12">
              <CustomerCard
                title="100+"
                color="text-exact-orange"
                desc="Projects we have completed"
              />
              <CustomerCard
                title="200+"
                color="text-exact-green"
                desc="Support from world-renowned companies"
              />
            </div>
          </div>
          <div className="grid justify-center lg:justify-end">
            <div className="space-y-9 max-w-[460px] ">
              <h1 className="text-3xl text-[#111029] dark:text-white md:text-5xl lg:text-[56px] lg:leading-[72px] font-semibold">
                Customer satisfaction is our first priority
              </h1>
              <p className="text-lg dark:text-white text-exact-gray">
                We serve many customers, ranging from small businesses, medium
                entrepreneurs, to world-renowned companies. Their satisfaction
                is our pleasure. We strive to provide the best service by:
              </p>
              {/* list-image tailwindcss class not working */}
              <ul
                className={`list-outside dark:text-white space-y-4 text-exact-gray text-lg`}
              >
                <ListIcon content="Provide idea support from our creative team" />
                <ListIcon content="Provide attractive and professional design services" />
                <ListIcon content="Support for service 24 hours a week" />
                <ListIcon content="Helping our customers to grow their business" />
                <ListIcon content="Provide support to market products through online marketplace" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Working space section */}
      <div
        className={`servicesSection relative lg:pb-[200px] pb-[100px] bg-bottom`}
      >
        <Image
          src={curve}
          alt="curve"
          className="w-full absolute -z-40 top-56"
        />
        <Image
          src={curve}
          alt="curve"
          className="w-full absolute -z-40 -bottom-80
          "
        />
        <div className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
          <SectionHeader
            title="Working space"
            heading="Let’s meet our interior room decoration"
          />
        </div>
        <div className={` mt-10`}>
          <div className="mx-[24px] lg:mx-[80px]  xl:mx-[160px] gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="space-y-8">
              <Image
                src={roomImage1}
                className="w-full"
                alt="image not found"
              />
              <Image
                src={roomImage5}
                className="w-full"
                alt="image not found"
              />
            </div>
            <div className="space-y-8">
              <Image
                src={roomImage4}
                className="w-full"
                alt="image not found"
              />
              <Image
                src={roomImage3}
                className="w-full"
                alt="image not found"
              />
            </div>
            <div className="space-y-8">
              <Image
                src={roomImage2}
                className="w-full"
                alt="image not found"
              />
              <Image
                src={roomImage6}
                className="w-full"
                alt="image not found"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Customer section */}
      <div className={`customersSec mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
        <SectionHeader
          title="Some of Our Great Customers"
          heading="Some of the companies we have worked with"
        />
        <div className=" md:pt-10 pb-20 lg:pb-[200px] space-y-11">
          <div
            className="grid grid-cols-1 md:grid-cols-3 md:-mt-20 lg:-mt-10 lg:grid-cols-5 sm:justify-between  
            justify-around
       lg:gap-y-[60px] lg:gap-x-20 md:gap-x-36 gap-x-auto
           space-y-11 lg:space-y-0"
          >
            <div className="grid items-end md:justify-start justify-center">
              <Image src={logo1} alt="image not found" />
            </div>
            <div className="grid justify-center">
              <Image src={logo2} alt="image not found" />
            </div>
            <div className="grid justify-center md:justify-end">
              <Image src={logo3} alt="image not found" />
            </div>
            <div className="grid justify-center md:justify-start">
              <Image src={logo4} alt="image not found" />
            </div>
            <div className="grid justify-center lg:justify-end">
              <Image src={logo5} alt="image not found" />
            </div>
            <div className="grid justify-center lg:justify-start md:justify-end">
              <Image src={logo6} alt="image not found" />
            </div>
            <div className="grid justify-center md:justify-start">
              <Image src={logo7} alt="image not found" />
            </div>
            <div className="grid justify-center">
              <Image src={logo8} alt="image not found" />
            </div>
            <div className="grid justify-center md:justify-end">
              <Image src={logo9} alt="image not found" />
            </div>
            <div className="grid justify-center lg:justify-end">
              <Image src={logo10} alt="image not found" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FE9602] dark:bg-[#020E2D] py-[100px] px-3 md:px-0">
        <SwiperSlider />
      </div>
      {/* FAQ section */}
      <div className={`customersSec bg-top ${styles.bgFAQsec}`}>
        <div className={`mx-[24px] lg:mx-[80px] xl:mx-[160px] lg:pt-[200px] pt-[100px]`}>
          <SectionHeader
            title="Frequently Ask Question"
            heading="Some of our frequently asked questions"
          />
          <div
            className={`faqGroup pb-16 ${
              isActive.length > 1
                ? "lg:pb-[100px]"
                : isActive.length == 0
                ? "lg:pb-[300px]"
                : "lg:pb-[200px]"
            }  space-y-8`}
          >
            {faqContent.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`faq bg-white dark:bg-[#020E2D] p-8 rounded-lg border space-y-7 border-[#D8D8D8] hover:border-exact-purple`}
                >
                  <div
                    onClick={() => accordionDropdown(item)}
                    className={`question flex cursor-pointer justify-between items-center ${
                      isActive?.indexOf(item.uid) > -1
                        ? "border-b-[1px] pb-7"
                        : "border-none"
                    }`}
                  >
                    <h1 className="dark:text-white text-sm lg:text-base">
                      {item.q}
                    </h1>
                    <Image
                      className={`w-3 h-3 ml-4 filter dark:invert cursor-pointer ${
                        isActive?.indexOf(item.uid) > -1 ? "rotate-180" : ""
                      }`}
                      src={dropdownIcon}
                      alt="icon"
                    />
                  </div>
                  <div
                    className={`${
                      isActive?.indexOf(item.uid) > -1 ? "block" : "hidden"
                    } `}
                  >
                    <p className="text-[#6B6B6B] text-sm lg:text-base dark:text-white/75">
                      {item.ans}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div
        className={`testimonialSec py-[100px] dark:bg-[#020E2D] bg-[#F9F9FD]`}
      >
        <div className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
          <SectionHeader
            title="Testimonials"
            heading="Some testimonials from our customers"
          />
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
            {testimonialsData.map((item, index) => {
              const { imgURL, name, company, desc, rating } = item;
              const items = [];
              for (let i = 0; i < rating; i++) {
                items.push(
                  <div key={i}>
                    <Image src={ratingStar} alt="star" className="w-4 lg:w-3 xl:w-4 h-4 lg:h-3 xl:h-4" />
                  </div>
                );
              }
              return (
                <div
                  className="pt-14 flex justify-center"
                  onMouseEnter={() => setTestimonialStyle(index)}
                  key={index} // add key prop here
                >
                  <div
                    className={`tesimonialCard flex text-center max-w-[352px] flex-col items-center px-8 pb-11 scroll-pt-6 rounded-[20px] shadow-xl shadow- ${
                      testimonialStyle === index
                        ? "shadow-exact-purple/25"
                        : null
                    } dark:bg-[#00113B] bg-white space-y-6`}
                    key={index} // also add key prop here
                  >
                    <Image
                      src={imgURL}
                      alt="testimonial"
                      className={`-mt-14 rounded-full shadow-2xl ${
                        testimonialStyle === index
                          ? "shadow-exact-purple/75"
                          : null
                      } `}
                    />
                    <div className="flex flex-col dark:text-white space-y-2 items-center">
                      <h1 className="text-2xl lg:text-lg xl:text-2xl font-semibold">{name}</h1>
                      <strong className="text-base font-medium dark:text-white text-[#ABAFC7]">
                        {company}
                      </strong>
                    </div>
                    <p className="text-lg leading-[32px] lg:text-base xl:text-lg xl:leading-[32px] font-normal dark:text-white text-[#70798B]">
                      {desc}
                    </p>
                    <div className="rating flex space-x-2.5">{items}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
