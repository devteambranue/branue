"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Carousel from "../../components/ui/carousel/Carousel";
import Testimonial from "../../components/ui/testimonial/TestimonialSlider";
import missionImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg";
import scheduleConsultationImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-37.jpg";
import Link from "next/link";
import "../services/services.css";
import "../custom-font.css";
import "./home.css";
import Divider from "@/components/ui/Divider/Divider";
export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <div className="video-container relative h-auto w-full flex items-center justify-center z-0">
          <Image  src="/Fusion-Finance-Web-Ready-36(5).png" 
                  width={600} 
                  height={300} 
                  alt="header-banner-backdrop" 
                  className="w-full relative"/>
          <Carousel />
        </div >
      </main >

      <main>
        {/* <div className="pb-5 pt-5 md:pt-14 md:pb-10">
          <h1 className="container text-[#1a584f] text-center text-4xl font-bold font-sans underline">
            Why work with us?
          </h1>
          <div className="flex justify-evenly items-center container mt-8 flex-wrap">
            <div className="min-h-[250px] mt-5 border transition-transform duration-300 hover:scale-105 shadow-xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
              <div className="bg-[#1a584f] inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                <Image
                  src="/customer-service.png"
                  width={40}
                  height={40}
                  alt="services"
                />
              </div>
              <div className="text-[#1a584f] text-3xl font-bold font-sans mt-2">
                Exceptional Customer Service
              </div>
              <div className="cormorant-infant text-2xl font-bold font-sans">
                Financial services for everyone
              </div>
            </div>

            <div className="min-h-[250px] mt-5 border sm:mx-5 transition-transform duration-300 hover:scale-105 shadow-xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
              <div className="bg-[#1a584f] inline-block p-2 rounded-ss-2xl rounded-ee-2xl mb-auto">
                <Image
                  src="/experiencee.png"
                  width={40}
                  height={40}
                  alt="knowledge"
                />
              </div>
              <div className="text-[#1a584f] text-3xl font-bold font-sans mt-2 mb-auto">
                25 Years Experience
              </div>
              <div className="cormorant-infant text-2xl font-bold font-sans mb-auto">
                With a wealth of agnostic industry knowledge
              </div>
            </div>

            <div className="min-h-[250px] mt-5 border transition-transform duration-300 hover:scale-105 shadow-xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
              <div className="mb-auto bg-[#1a584f] inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                <Image
                  src="/customerr.png"
                  width={40}
                  height={40}
                  alt="advisor"
                />
              </div>
              <div className="text-[#1a584f] text-3xl font-bold font-sans mt-2 mb-auto">
                2000+ Customers
              </div>
              <div className="cormorant-infant text-2xl font-bold font-sans mb-auto">
                Here to be your trusted advisor
              </div>
            </div>
          </div>
        </div> */}


<div className="relative pb-16 pt-12 pl-5 pr-5 flex flex-col bg-gradient-to-br from-[#fff] to-[#fff]">
  <div className="container mx-auto text-center flex flex-col">
  <h1 className="container text-[#fe7db0] mb-6  text-center text-3xl sm:text-5xl font-bold font-sans">
            Why work with us?
  </h1>
  <div className="container flex justify-center mb-10">
    <Divider width={150} height={0.5} color="#5ae9d4"/>
  </div>
    <p className="text-black-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
      With over <span className="text-[#1a584f] font-bold font-sans">50+ years of combined experience</span>, we don’t just <br/>provide services—we build relationships. 
    </p>
  </div>

  <div className="mt-24 flex flex-wrap justify-center items-center gap-20 sm:gap-20 md:gap-16 lg:gap-14 relative z-10"> 
    {/* First Box */}
    <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-[#f1fffdc4] border border-[#1a584f3b] shadow-lg rounded-2xl transition-transform duration-700 scale-100 hover:shadow-2xl" style={{ boxShadow: '0px 4px 6px rgba(26, 88, 79, 0.5)' }}>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
        <Image src="/customer-service.png" width={50} height={50} alt="services" />
      </div>
      <h2 className=" text-[#1a584f] text-3xl font-bold font-sans mt-12 mb-auto">
        Exceptional Customer Service
      </h2>
      <p className="cormorant-infant text-2xl font-bold font-sans">
        Financial services for everyone.
      </p>
    </div>

  {/* Center Box with conic gradiant Circle */}
  <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-white border-4 border-solid shadow-lg rounded-2xl transition-transform duration-700 hover:scale-110 hover:shadow-2xl lg:scale-110 animate-gradient-border" style={{ boxShadow: '0px 4px 6px rgba(26, 88, 79, 0.5)' }}>
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24  bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
      <Image src="/experiencee.png" width={50} height={50} alt="knowledge" />
    </div>
    <h2 className="text-[#082c27] text-4xl font-bold font-sans mt-12 mb-auto">
      50+ <span className="text-3xl"> Years Experience</span>
    </h2><br className="hidden sm:block" />
    <p className="cormorant-infant text-2xl font-bold font-sans">
    With a wealth of industry knowledge.
    </p>
  </div>

    {/* Third Box */}
    <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-[#f1fffdc4] border border-[#1a584f3b] shadow-lg rounded-2xl transition-transform duration-700  scale-100   hover:shadow-2xl" style={{ boxShadow: '0px 4px 6px rgba(26, 88, 79, 0.5)' }}>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
        <Image src="/customerr.png" width={50} height={50} alt="advisor" />
      </div>
      <h2 className="text-[#1a584f] text-3xl font-bold font-sans mt-12 mb-auto">
        2000+ Happy Customers
      </h2><br className="hidden sm:block" />
      <p className="cormorant-infant text-2xl font-bold font-sans">
        Here to be your trusted advisor.
      </p>
    </div>
  </div>
</div>




 



        <div className="bg-white text-white flex flex-col justify-center">
          <div className="bg-[#1a584f] container py-10 pb-6 flex justify-center text-center md:text-left w-full min-w-full">
            <div className="flex flex-wrap md:flex-nowrap w-4/5">
              <div className="align-center mx-10 mb-10 max-w-1/2 w-1/2">
                <img
                  src={scheduleConsultationImage.src}
                  alt="Login"
                  className="max-w-full rounded-lg"
                />
              </div>

              <div className="m-auto w-1/2">
                <h1 className="lg:text-5xl text-2xl text-[#5ae9c4] optima-ttf text-left">
                  Schedule your <br/>consultation
                </h1>
                <p className="mt-4 cormorant-infant text-xl text-left optima-ttf">
                  We understand you may want to speak directly with us to get all
                  your questions answered. We offer one-to-one consultations
                  with expert QFAs. Please complete this and one of our team will be
                  back to you shortly.
                </p>

                <div className="flex justify-center justify-self-start items-center">
                  <button className="mt-10 mx-auto">
                    <Link
                      href="/contact"
                      className="hover:text-white font-sans text-black bg-[#fe7db0] py-2 px-4 rounded-full text-xl"
                    >
                      contact us
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-20">
            <div className="w-full container my-10 flex flex-col justify-center py-10 pb-0 text-center md:text-left px-5">
              <h1 className="lg:text-4xl text-[#fe7db0] text-2xl text-center optima-ttf">
                Our Services
              </h1>
              <div className="flex justify-center mb-10">
                <Divider width={150} height={0.5} color="#5ae9d4"/>
              </div>
              <p className="optima-ttf text-black text-center ">Ongoing support from our specialised Trade and <br/>Customer Experience teams.</p>
            </div>

            <div className="flex flex-row justify-center items-stretch w-full">
              <div className="flex flex-row flex-1 justify-between items-stretch">
                <div className="flex flex-col flex-1 bg-[#1a584f] shadow-lg overflow-hidden">
                  <div className="p-4 flex flex-col items-center justify-center text-white text-lg text-center flex-shrink-0">
                    <h1 className="customFontSize">MORTGAGE PROTECTION <br/>LIFE INSURANCE <br/>FAMILY PROTECTION </h1>
                  </div>
                  <div className="relative flex-grow flex flex-col justify-end">
                      <Image
                        src="/Fusion_pics/Fusion-Finance-Web-Ready-45(2).jpg"
                        alt="Card Image 1"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    <Link href="/services/financial-security" className="absolute inset-10 flex items-end justify-center">
                      <span className="bg-[#5ae9d4] hover:font-medium text-black py-2 px-4 rounded-full">
                        See More {">"} {">"}
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col flex-1 bg-[#1a584f] shadow-lg overflow-hidden">
                  <div className="p-4 flex flex-col items-center justify-center text-white text-lg text-center flex-shrink-0">
                    <h1 className="customFontSize">INCOME PROTECTION <br/>SERIOUS ILLNESS <br/>COVER</h1>
                  </div>
                  <div className="relative flex-grow flex flex-col justify-end">
                      <Image
                        src="/Fusion_pics/Fusion-Finance-Web-Ready-47(2).jpg"
                        alt="Card Image 2"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    <Link href="/services/income-protection" className="absolute inset-10 flex items-end justify-center">
                      <span className="bg-[#5ae9d4] hover:font-medium text-black py-2 px-4 rounded-full">
                        See More {">"} {">"}
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col flex-1 bg-[#1a584f] shadow-lg overflow-hidden">
                  <div className="p-4 flex flex-col items-center justify-center text-white text-lg text-center flex-shrink-0">
                    <h1 className="customFontSize">LUMP SUM INVESTMENT <br/>AND CHILDREN&apos;S <br/>EDUCATION PLANNING</h1>
                  </div>
                  <div className="relative flex-grow flex flex-col justify-end">
                      <Image
                        src="/Fusion_pics/Fusion-Finance-Web-Ready-32(2).jpg"
                        alt="Card Image 1"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    <Link href="/services/Lump-Sum-Pension" className="absolute inset-10 flex items-end justify-center">
                      <span className="bg-[#5ae9d4] hover:font-medium text-black py-2 px-4 rounded-full">
                        See More {">"} {">"}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-[#5ae9d4] shadow-lg overflow-hidden ml-0 h-full">
                <div className="flex flex-row items-center justify-start optima-ttf text-black text-2xl m-8 mb-0">
                  <h1 className="customFontSize mr-4">RETIREMENT PLANNING <br/>AND PENSIONS</h1>
                  {/* <h1 className="customFontSize">LAST MINUTE PENSIONS</h1> */}
                  <Link href="/services/retirement-pension" className="inset-10 flex items-end justify-center ml-4">
                    <span className="bg-white hover:font-medium text-black py-2 px-4 rounded-full ">
                      See More {">"} {">"}
                    </span>
                  </Link>
                </div>
                <div className="relative">
                    <Image
                      src="/Fusion_pics/Fusion-Finance-Web-Ready-38(3).jpg"
                      alt="Card Image 2"
                      width={600}
                      height={600}
                      className="w-full h-fit object-cover"
                    />
                </div>
              </div>
            </div>
          </div>


          <div className="">
            {/**
             * Add The Missing Header Meant To Be Before The Separator Here!!!!!!!!
             */}
          <div/>

          <div className="bg-[#b2adad] pb-5 pt-5">
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

          <div className="flex justify-between items-center flex-row bg-white w-screen p-20">
            <div className="w-1/2 flex justify-end pr-10">
              <Image
                src="/Fusion_pics/Fusion Finance Web-Ready-19(2).jpg"
                alt="testimonials"
                width={1896}
                height={1244}
                className="object-contain w-2/3 max-w-2/3 h-auto rounded-lg"
              />
            </div>
            {/* Clients Say Section */}
            <div className="testimonialSection bg-white w-1/2 max-w-1/2 flex flex-col">
              <h1 className="text-black text-4xl pl-4 optima-ttf">
                Hear What Our <br/>Clients Have To Say
              </h1>
              <Testimonial />
            </div>
          </div>     

          <div className="flex justify-center my-10">
            <Divider width={1200} height={0.5} color="#b2adad"/>
          </div>

          <div className="flex flex-col justify-center items-center relative mt-20 w-full">
            <Image
                src="/Fusion_pics/Fusion Finance HiRes-51(2).jpg"
                alt="Fusion51"
                width={1896}
                height={1244}
                className="object-contain w-full h-auto relative"/>
            <h1 className="text-white absolute optima-ttf left-40 top-60 text-7xl text-center">
              Life Cover or <br/>Serious Illness
            </h1>
            <h4 className="text-white absolute optima-ttf left-40 top-180 text-5xl text-center mt-40">
              Calculate your policy <br/>estimate now
            </h4>
            <div className="hidden lg:flex lg:items-center absolute bottom-40 mb-30 left-60 -ml-4 lg:mr-auto brandon-grotesque">
            <Link
              href="/quote"
              onClick={() => {
                return; // Add handleClick here
              }}
              className="bg-white border-2 rounded-full py-1 px-2 text-black text-4xl lg:py-2 lg:px-12 lg:text-5xl"
            >
              Get Quote
            </Link>
            </div>
          </div>
          </div>       
        </div>



      </main>
    </div >
  );
}
