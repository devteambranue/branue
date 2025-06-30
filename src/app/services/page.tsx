"use client";

import Image from "next/image";
import Link from "next/link";
import "./services.css";
import bannerImageService from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-31.jpg";
import Divider from "@/components/ui/Divider/Divider";
import bannerBgImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-36-1-Home-crop.jpg";

export default function Services() {
  return (
    <>
      <main className="optima-ttf">
        {/* <div className="w-full text-center items-center justify-center">
          <div
            id="banner-area"
            className="banner-area"
            style={{
              background: `url(${bannerImageService.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              backgroundRepeat: "no-repeat",
              minHeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="container mx-auto px-4">
              <div className="row flex flex-wrap">
                <div className="col-xs-12 w-full">
                  <div className="banner-heading pt-24 w-full text-white flex flex-col justify-center items-center content-center min-h-[500px]">
                    <h1
                      className="banner-title text-4xl font-bold p-1 rounded"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                        color: "white",
                      }}
                    >
                      Our Services
                    </h1>
                    <ol className="breadcrumb flex justify-center space-x-2 mt-2 text-gray-600">
                      <li
                        className="text-white"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                          color: "white",
                        }}
                      >
                        <a href="https://www.fusion-finance.com" className="">
                          Home
                        </a>
                      </li>
                      <li
                        className="text-white before:content-['/'] before:text-white before:mx-2"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                          color: "white",
                        }}
                      >
                        Our Services
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="font-sans flex flex-col lg:flex-row">
          <div className="mx-5 flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
            <div id="textBox">
              <div className="flex flex-col font-sans mt-3 sm:mt-6">
                <h1 className="customFontSize">MORTGAGE PROTECTION</h1>
                <h1 className="customFontSize">LIFE INSURANCE</h1>
                <h1 className="customFontSize">FAMILY PROTECTION</h1>
              </div>
            </div>
            <Link
              href="/services/financial-security"
              id="button"
              className="font-sans font-bold text-lg"
            >
              See More {">"}
              {">"}
            </Link>
            <Image
              src="/Fusion_pics/Fusion-Finance-Web-Ready-32.jpg"
              width={600}
              height={600}
              alt="service1"
              style={{
                borderRadius: "5rem",
                objectFit: "contain",
                margin: "3em",
              }}
            />
          </div>

          <div className="mx-5 flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
            <div id="textBox">
              <div className="flex flex-col mt-6 font-sans">
                <h1 className="customFontSize">INCOME PROTECTION</h1>
                <h1 className="customFontSize">AND SERIOUS ILLNESS</h1>
                <h1 className="customFontSize">PROTECTION</h1>
              </div>
            </div>
            <Link
              href="/services/income-protection"
              id="button"
              className="font-sans font-bold text-lg"
            >
              See More {">"}
              {">"}
            </Link>
            <Image
              src="/Fusion_pics/Fusion-Finance-Web-Ready-40.jpg"
              width={600}
              height={600}
              alt="service1"
              style={{
                borderRadius: "5rem",
                objectFit: "contain",
                margin: "3em",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="mx-5 flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
            <div id="textBox">
              <div className="flex flex-col mt-6 font-sans">
                <h1 className="customFontSize">LUMP SUM PENSIONS</h1>
                <h1 className="customFontSize">AND CHILDREN EDUCATION</h1>
                <h1 className="customFontSize">PLANNING</h1>
              </div>
            </div>
            <Link
              href="/services/Lump-Sum-Pension"
              id="button"
              className="font-sans font-bold text-lg"
            >
              See More {">"}
              {">"}
            </Link>
            <Image
              src="/Fusion_pics/Fusion-Finance-Web-Ready-40.jpg"
              width={600}
              height={600}
              alt="service1"
              style={{
                borderRadius: "5rem",
                objectFit: "contain",
                margin: "3em",
              }}
            />
          </div>

          <div className="mx-5 flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
            <div id="textBox">
              <div className="flex flex-col mt-6 font-sans">
                <h1 className="customFontSize">RETIREMENT PLANNING</h1>
                <h1 className="customFontSize">PENSIONS AND</h1>
                <h1 className="customFontSize">LAST MINUTE PENSIONS</h1>
              </div>
            </div>
            <Link
              href="/services/retirement-pension"
              id="button"
              className="font-sans font-bold text-lg"
            >
              See More {">"}
              {">"}
            </Link>
            <Image
              src="/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg"
              width={600}
              height={600}
              alt="service1"
              style={{
                borderRadius: "5rem",
                objectFit: "contain",
                margin: "3em",
              }}
            />
          </div>
        </div> */}

        <div className="w-full text-center items-center justify-center">
          <div
            id="banner-area"
            className="banner-area"
            style={{
              background: `url(${bannerImageService.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              minHeight: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="container mx-auto px-4">
              <div className="row flex flex-wrap">
                <div className="col-xs-6 w-full lg:w-1/2 mx-auto">
                  <div className="banner-heading pt-24 w-full text-white flex flex-col justify-center  min-h-[500px]">
                    <h1 className="text-left text-white text-3xl lg:text-5xl font-bold leading-snug mb-1 brandon-grotesque-bld">
                      <span className="inline-block pb-1 brandon-grotesque-bld">
                        WORK WITH US
                      </span>
                    </h1>

                    <h1 className="relative pt-[10px] before:content-[''] before:absolute before:left-0 before:top-0 before:w-[50px] before:h-[3px] before:bg-[#5ae9d4] text-[#5ae9d4] text-left text-lg sm:text-2xl font-bold  brandon-grotesque-bld">
                      OFFERING BESPOKE FINANCIAL <br /> ADVICE AND SERVICES TO
                      PEOPLE
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex min-h-screen min-w-screen flex-col items-center  md:p-30 md:pt-0 md:pb-20 p-2">
            <div className="w-full container flex flex-col justify-center py-10 pb-0 text-center md:text-left px-5">
              <h1 className="lg:text-4xl text-[#fe7db0] text-2xl text-center brandon-grotesque-bld font-medium">
                Our Services
              </h1>
              <div className="flex justify-center mb-2 pt-2">
                <Divider width={120} height={3} color="#5ae9d4" />
              </div>
              <p className="optima-ttf text-black text-center mt-3 mb-10 ">
                Ongoing support from our specialised Trade and <br />
                Customer Experience teams.
              </p>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:gap-2 justify-center optima-ttf min-w-[100%] ">
              <div className="flex-1 bg-white m-2 lg:m-5">
                <div className="relative">
                  <div className="image-container rounded-lg overflow-hidden">
                    <Image
                      src="/Fusion_pics/Fusion-Finance-Web-Ready-32.jpg"
                      alt="Card Image 1"
                      width={600}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 flex flex-col items-center justify-center  text-center text-[#1a584f] text-xl font-bold">
                  <h1 className="customFontSize">MORTGAGE PROTECTION</h1>
                  <h1 className="customFontSize">LIFE INSURANCE</h1>
                  <h1 className="customFontSize">FAMILY PROTECTION</h1>
                </div>
                <div className="p-2 pb-6 flex flex-col items-center justify-center  text-center text-black">
                  <p>
                    Explore the advantages of Mortgage Protection. Watch our
                    concise video to learn more.
                  </p>
                </div>
                <Link
                  href="/services/financial-security"
                  className="inset-0 flex items-end justify-center"
                >
                  <span className="bg-[#5ae9d4]  text-black py-3 px-6 rounded-full font-bold">
                    See More {">"} {">"}
                  </span>
                </Link>
              </div>

              <div className="flex-1 bg-white m-2 lg:m-5">
                <div className="relative">
                  <div className="image-container rounded-lg overflow-hidden">
                    <Image
                      src="/Fusion_pics/Fusion Finance Web-Ready-31(2).jpg"
                      alt="Card Image 2"
                      width={600}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 flex flex-col items-center justify-center optima-ttf text-center text-[#1a584f]  text-xl font-bold">
                  <h1 className="customFontSize">INCOME PROTECTION </h1>
                  <h1 className="customFontSize">SERIOUS ILLNESS</h1>
                  <h1 className="customFontSize">COVER</h1>
                </div>
                <div className="p-2 pb-6 flex flex-col items-center justify-center  text-center text-black">
                  <p>
                    Learn about the Benefits of Income Protection. Watch our
                    informative video to find out more.
                  </p>
                </div>
                <Link
                  href="/services/income-protection"
                  className="inset-0 flex items-end justify-center"
                >
                  <span className="bg-[#5ae9d4] text-black py-3 px-6 rounded-full font-bold">
                    See More {">"} {">"}
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:gap-2 justify-center mt-10 min-w-[100%]">
              <div className="flex-1 bg-white  m-5">
                <div className="relative">
                  <div className="image-container rounded-lg overflow-hidden">
                    <Image
                      src="/Fusion_pics/Fusion-Finance-Web-Ready-45.jpg"
                      alt="Card Image 1"
                      layout="fill" // Use 'fill' layout to cover the entire container
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 flex flex-col items-center justify-center  text-center text-[#1a584f] text-xl font-bold">
                  <h1 className="customFontSize">LUMP SUM INVESTMENT</h1>
                  <h1 className="customFontSize">
                    AND CHILDREN&apos;S EDUCATION
                  </h1>
                  <h1 className="customFontSize">PLANNING</h1>
                </div>
                <div className="p-2 pb-6 flex flex-col items-center justify-center  text-center text-black">
                  <p>
                    Discover the Benefits of Lump Sum Investment. Watch our
                    informative video to learn more.
                  </p>
                </div>
                <Link
                  href="/services/Lump-Sum-Pension"
                  className="inset-0 flex items-end justify-center"
                >
                  <span className="bg-[#5ae9d4] text-black py-3 px-6 rounded-full font-bold">
                    See More {">"} {">"}
                  </span>
                </Link>
              </div>

              <div className="flex-1 bg-white  m-5">
                <div className="relative">
                  <div className="image-container rounded-lg overflow-hidden">
                    <Image
                      src="/Fusion_pics/Fusion-Finance-Web-Ready-47.jpg"
                      alt="Card Image 2"
                      width={600}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 flex flex-col items-center justify-center  text-center text-[#1a584f] text-xl font-bold">
                  <h1 className="customFontSize">RETIREMENT PLANNING AND</h1>
                  <h1 className="customFontSize">PENSIONS</h1>
                  {/* <h1 className="customFontSize">LAST MINUTE PENSIONS</h1> */}
                </div>
                <div className="p-2 pb-6 flex flex-col items-center justify-center  text-center text-black">
                  <p>
                    Explore the Benefits of Retirement Planning & Pensions.
                    Watch our informative video to gain insights.
                  </p>
                </div>
                <Link
                  href="/services/retirement-pension"
                  className="inset-0 flex items-end justify-center"
                >
                  <span className="bg-[#5ae9d4] text-black py-3 px-6 rounded-full font-bold">
                    See More {">"} {">"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center relative mt-20 w-full">
          <Image
            src="/Fusion_pics/Fusion Finance HiRes-51(2).jpg"
            alt="Fusion51"
            width={1896}
            height={1244}
            className="block lg:hidden object-contain relative w-full h-auto"
          />
          <Image
            src="/Fusion_pics/life-cover-bg.jpg"
            alt="Fusion51"
            width={1896}
            height={1244}
            className="hidden lg:block object-contain relative w-full h-auto"
          />

          <h1 className="text-white absolute optima-ttf left-10 lg:left-20 lg:top-20 top-5 text-xl lg:text-7xl lg:text-center leading-normal">
            Life Cover or <br />
            Serious Illness
          </h1>
          <h4 className="text-white lg:items-center absolute optima-ttf left-10 lg:left-20 lg:top-180 lg:text-5xl leading-normal text-xl lg:text-center text-left mt-3 lg:mt-20">
            Calculate your policy <br />
            estimate now
          </h4>
          <div className="lg:flex lg:items-center absolute bottom-6 lg:bottom-20 lg:mb-30 lg:left-40 left-12 -ml-4 lg:mr-auto brandon-grotesque">
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
    </>
  );
}
