"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Carousel from "../../components/ui/carousel/Carousel";
import Testimonial from "../../components/ui/testimonial/TestimonialSlider";
import missionImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg";
import scheduleConsultationImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-37.jpg";
import bannerBgImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-38.jpg";
import Link from "next/link";
import "../services/services.css";
import "../custom-font.css";
import "./home.css";
import Divider from "@/components/ui/Divider/Divider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-[125px] pb-[96px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={bannerBgImage.src}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-0 px-4 sm:px-8 py-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center gap-12">
            <div className="w-full lg:w-[25%] text-center lg:text-right mb-auto pt-4">
              <h1 className="text-center text-white text-3xl font-bold leading-snug mb-2 brandon-grotesque-bld">
                <span className="relative inline-block pb-2 after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:top-full after:w-1/2 after:h-1 after:bg-[#5ae9d4] brandon-grotesque-bld">
                  FINANCIAL <br className="hidden lg:block" /> SERVICES
                </span>
              </h1>

              <h1 className="text-[#5ae9d4] text-center text-2xl sm:text-3xl font-bold  mt-3 brandon-grotesque-bld">
                FOR EVERYONE
              </h1>
            </div>

            <div className="w-full lg:w-[75%] text-center lg:text-left">
              <Carousel />
            </div>
          </div>
        </div>
      </main>

      <main>
        <div className="relative pb-16 pt-12 pl-5 pr-5 bg-gradient-to-br from-[#fff] to-[#fff]">
          <div className="container mx-auto text-center">
            <h1 className="text-[#fe7db0] mb-6 text-center text-3xl sm:text-5xl font-bold font-sans">
              <span className="relative inline-block pb-2 after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:top-full after:mt-2 after:w-1/2 after:h-1 after:bg-[#5ae9d4]">
                Why work with us?
              </span>
            </h1>

            <p className="text-black-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
              With over
              <span className="text-[#1a584f] font-bold font-sans">
                50+ years of combined experience
              </span>
              , we don’t just <br />
              provide services—we build relationships.
            </p>
          </div>

          <div className="mt-24 flex flex-wrap justify-center items-center gap-20 sm:gap-20 md:gap-16 lg:gap-14 relative z-10">
            {/* First Box */}
            <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-white border-2 border-[#082c27] rounded-2xl transition-transform duration-700 scale-100">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
                <Image
                  src="/customer-service.png"
                  width={50}
                  height={50}
                  alt="services"
                />
              </div>
              <h2 className=" text-[#1a584f] text-3xl font-bold font-sans mt-12 mb-auto text-center">
                Exceptional <br />
                Customer Service
              </h2>
              <p className="cormorant-infant text-2xl font-bold font-sans text-center">
                Financial services for everyone.
              </p>
            </div>

            {/* Center Box with conic gradiant Circle */}
            <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-white border-2 border-[#082c27] rounded-2xl transition-transform ">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24  bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
                <Image
                  src="/experiencee.png"
                  width={50}
                  height={50}
                  alt="knowledge"
                />
              </div>
              <h2 className="text-[#1a584f] text-4xl font-bold font-sans mt-12 mb-auto text-center">
                50+
                <span className="text-3xl">
                  <br />
                  Years Experience
                </span>
              </h2>
              <br className="hidden sm:block" />
              <p className="cormorant-infant text-2xl font-bold font-sans text-center">
                With a wealth of industry knowledge.
              </p>
            </div>

            {/* Third Box */}
            <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-white border-2 border-[#082c27] rounded-2xl transition-transform duration-700 scale-100">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
                <Image
                  src="/customerr.png"
                  width={50}
                  height={50}
                  alt="advisor"
                />
              </div>
              <h2 className="text-[#1a584f] text-3xl font-bold font-sans mt-12 mb-auto text-center">
                2000+ <br />
                Happy Customers
              </h2>
              <br className="hidden sm:block" />
              <p className="cormorant-infant text-2xl font-bold font-sans text-center">
                Here to be your trusted advisor.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a584f] text-white">
          <div className="container py-10 pb-6 text-center md:text-left px-5">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="flex justify-center align-center mx-10 mb-10 ">
                <Image
                  src={scheduleConsultationImage.src}
                  alt="Login"
                  className="max-w-full rounded-lg"
                />
              </div>

              <div className="m-auto">
                <h1 className="lg:text-4xl text-3xl text-left font-bold optima-ttf text-[#5ae9d4]">
                  Schedule your <br />
                  consultation
                </h1>
                <p className="mt-4 cormorant-infant text-xl text-left optima-ttf lg:pr-20">
                  We understand you may want to speak directly with us to get
                  all your questions answered. We offer one-to-one consultations
                  with expert QFAs. Please complete this and one of our team
                  will be back to you shortly.
                </p>

                <div className="flex justify-start items-start">
                  <button className="mt-10">
                    <Link
                      href="/contact"
                      className="hover:text-white font-bold font-sans text-black bg-[#fe7db0] py-2 px-6 rounded-full text-xl mt-10 uppercase"
                    >
                      Contact us
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-16 pt-12 pl-5 pr-5 bg-gradient-to-br from-[#fff] to-[#fff]">
          <div className="container mx-auto text-center">
            <h1 className="text-[#fe7db0] mb-6 text-center text-3xl sm:text-5xl font-bold optima-ttf">
              <span className="relative inline-block pb-2 after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:top-full after:mt-2 after:w-1/2 after:h-1 after:bg-[#5ae9d4]">
                Our Services
              </span>
            </h1>

            <p className="pb-10 text-black-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed optima-ttf">
              Ongoing support from our specialised trade and <br /> Customer
              Experience teams
            </p>
          </div>

          <div className="container flex flex-wrap md:flex-nowrap justify-center items-stretch p-0 sm:p-4">
            {/* Card 1 */}
            <div className="bg-white w-full md:w-[300px]">
              <div className="bg-[#1a584f] p-4 text-white text-center text-base font-semibold">
                <h1 className="customFontSize">
                  <p>MORTGAGE PROTECTION</p>
                  <p>LIFE INSURANCE</p>
                  <p>FAMILY PROTECTION</p>
                </h1>
              </div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-45(2).jpg"
                  alt="Mortgage Protection"
                  fill
                  className="object-cover"
                />
                <Link
                  href="/services/financial-security"
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-[#5ae9d4] font-bold text-black py-1 px-3 rounded-full hover:font-medium">
                    See More &gt;&gt;
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white w-full md:w-[300px]">
              <div className="bg-[#1a584f] p-4 text-white text-center text-base font-semibold">
                <h1 className="customFontSize">
                  <p>INCOME PROTECTION</p>
                  <p>SERIOUS ILLNESS</p>
                  <p>COVER</p>
                </h1>
              </div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-47(2).jpg"
                  alt="Income Protection"
                  fill
                  className="object-cover"
                />
                <Link
                  href="/services/income-protection"
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-[#5ae9d4] font-bold text-black py-1 px-3 rounded-full hover:font-medium">
                    See More &gt;&gt;
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white w-full md:w-[300px]">
              <div className="bg-[#1a584f] p-4 text-white text-center text-base font-semibold">
                <h1 className="customFontSize">
                  <p>LUMP SUM INVESTMENT</p>
                  <p>AND CHILDREN'S</p>
                  <p>EDUCATION PLANNING</p>
                </h1>
              </div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-32(2).jpg"
                  alt="Lump Sum Investment"
                  fill
                  className="object-cover"
                />
                <Link
                  href="/services/Lump-Sum-Pension"
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-[#5ae9d4] font-bold text-black py-1 px-3 rounded-full hover:font-medium">
                    See More &gt;&gt;
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 4 (Different Title BG Color) */}
            <div className="bg-white w-full md:w-[400px]">
              <div className="bg-[#5ae9d4] p-4 flex flex-col md:flex-row md:items-center md:justify-between text-black text-base font-semibold text-center md:text-left">
                <h1 className="customFontSize mr-4">
                  <p className="whitespace-nowrap">
                    RETIREMENT PLANNING <br />
                    AND PENSIONS
                  </p>
                </h1>
                <Link
                  href="/services/retirement-pension"
                  className="hidden md:block"
                >
                  <span className="bg-white font-bold text-black py-1 px-3 rounded-full hover:font-medium">
                    See More &gt;&gt;
                  </span>
                </Link>
              </div>

              <div className="relative h-[424px] overflow-hidden">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-38(3).jpg"
                  alt="Retirement Planning"
                  fill
                  className="object-cover"
                />
                <Link
                  href="/services/retirement-pension"
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-[#5ae9d4] text-black py-1 px-3 rounded-full hover:font-medium block md:hidden">
                    See More &gt;&gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[250px] overflow-hidden">
          <Image
            src="/Fusion_pics/Fusion-Finance-Web-Ready-36-1-Home-crop.jpg"
            alt="Fusion Finance"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        <div className="bg-[#897f83] pb-5 pt-5">
          <div className="text-center flex flex-col lg:flex-row justify-center align-center">
            <div className="container flex flex-col sm:flex-row justify-evenly items-center flex-wrap ">
              <div className="pt-5 mx-2 text-center min-w-[220px] max-w-[620px] min-h-[100px] flex justify-start flex-col sm:flex-row lg:justify-center flex-wrap p-4">
                <div className="my-3 sm:mx-2">
                  <Image
                    src="/Fusion_icon_services.png"
                    width={70}
                    height={50}
                    alt="services"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <div className="text-white text-2xl font-bold optima-ttf mt-2">
                    Financial Services
                  </div>
                  <div className="text-white cormorant-infant text-3xl font-bold">
                    For Everyone
                  </div>
                </div>
              </div>

              <div className="pt-5 mx-2 text-center min-w-[220px] max-w-[620px] min-h-[100px] flex justify-start flex-col sm:flex-row lg:justify-center flex-wrap p-4">
                <div className="sm:mx-2 my-3 flex justify-center">
                  <Image
                    src="/Fusion_icon_knowledge.png"
                    width={70}
                    height={50}
                    alt="knowledge"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <div className="text-white text-2xl font-bold optima-ttf mt-2">
                    With A Wealth Of
                  </div>
                  <div className="text-white text-3xl font-bold cormorant-infant">
                    Industry Knowledge
                  </div>
                </div>
              </div>

              <div className="pt-5 mx-2 text-center min-w-[220px] max-w-[620px] min-h-[100px] flex justify-start flex-col sm:flex-row lg:justify-center flex-wrap p-4">
                <div className="my-3 sm:mx-2 flex justify-center">
                  <Image
                    src="/Fusion_icon_advisor.png"
                    width={100}
                    height={50}
                    alt="advisor"
                    className="mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-2xl font-bold optima-ttf mt-2">
                    Here To Be Your
                  </div>
                  <div className="text-white text-3xl font-bold cormorant-infant">
                    Trusted Advisor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-20">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-10 mb-6 md:mb-0">
            <Image
              src="/Fusion_pics/Fusion Finance Web-Ready-19(2).jpg"
              alt="testimonials"
              width={1896}
              height={1244}
              className="object-contain w-full md:w-2/3 h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-[#4B4145] text-3xl md:text-4xl pl-2 md:pl-4 optima-ttf md:text-left">
              Hear What Our <br className="hidden md:block" />
              Clients Have To Say
            </h1>
            <p className="text-lg md:text-xl text-[#4B4145] pl-2 md:pl-4 optima-ttf py-4 md:text-left">
              Your feedback is integral in helping us{" "}
              <br className="hidden md:block" />
              create the best experience possible.
            </p>
            <Testimonial />
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Divider width={1400} height={1} color="#4B4145" />
        </div>

        <div className="flex flex-col justify-center items-center relative mt-20 w-full">
          <Image
            src="/Fusion_pics/Fusion Finance HiRes-51(2).jpg"
            alt="Fusion51"
            width={1896}
            height={1244}
            className="object-contain w-full h-auto relative"
          />
          <h1 className="text-white absolute optima-ttf left-10 lg:left-20 lg:top-60 top-5 text-2xl lg:text-7xl lg;text-center">
            Life Cover or <br />
            Serious Illness
          </h1>
          <h4 className="text-white lg:items-center lg:leading-normal absolute optima-ttf left-10 lg:left-20 lg:top-180 lg:text-5xl text-xl lg:text-center text-left mt-0 lg:mt-40">
            Calculate your policy <br />
            estimate now
          </h4>
          <div className="lg:flex lg:items-center absolute bottom-10 lg:bottom-40 lg:mb-30 lg:left-40 left-12 -ml-4 lg:mr-auto brandon-grotesque">
            <Link
              href="/quote"
              onClick={() => {
                return;
              }}
              className="bg-white border-2 rounded-full py-1 px-2 text-black lg:text-4xl text-xl lg:py-2 lg:px-12"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
