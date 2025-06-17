"use client";

import Image from "next/image";
import Link from "next/link";
import "./services.css";
import bannerImageService from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-31.jpg";
import Divider from "@/components/ui/Divider/Divider";

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

        <div className="flex min-h-screen min-w-screen flex-col items-center p-60 pt-0">
          <div className="w-full container flex flex-col justify-center py-10 pb-0 text-center md:text-left px-5">
          <h1 className="lg:text-4xl text-[#fe7db0] text-2xl text-center optima-ttf">
            Our Services
          </h1>
          <div className="flex justify-center mb-10">
            <Divider width={150} height={0.5} color="#5ae9d4"/>
          </div>
          <p className="optima-ttf text-black text-center ">Ongoing support from our specialised Trade and <br/>Customer Experience teams.</p>
        </div>

        <div className="flex flex-row justify-center optima-ttf min-w-[100%]">
          <div className="flex-1 bg-white rounded-lg overflow-hidden m-5">
            <div className="relative">
              <div className="image-container">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-32.jpg"
                  alt="Card Image 1"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 flex flex-col items-center justify-center  text-center text-black text-xl">
              <h1 className="customFontSize">MORTGAGE PROTECTION</h1>
              <h1 className="customFontSize">LIFE INSURANCE</h1>
              <h1 className="customFontSize">FAMILY PROTECTION</h1>
            </div>
            <div className="p-10 flex flex-col items-center justify-center  text-center text-black">
              <p>
                Explore the advantages of Mortgage Protection. Watch our concise video to learn more.
              </p>
            </div>
              <Link href="/services/financial-security" className="inset-0 flex items-end justify-center">
                <span className="bg-[#5ae9d4] hover:font-medium text-black py-2 px-4 rounded-full">
                  See More {">"} {">"}
                </span>
              </Link>
          </div>

          <div className="flex-1 bg-white rounded-lg overflow-hidden m-5">
            <div className="relative">
              <div className="image-container">
                <Image
                  src="/Fusion_pics/Fusion Finance Web-Ready-31(2).jpg"
                  alt="Card Image 2"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 flex flex-col items-center justify-center optima-ttf text-center text-black text-xl">
                <h1 className="customFontSize">INCOME PROTECTION </h1>
                <h1 className="customFontSize">SERIOUS ILLNESS</h1>
                <h1 className="customFontSize">COVER</h1>
            </div>
            <div className="p-10 flex flex-col items-center justify-center  text-center text-black">
              <p>
                 Learn about the Benefits of Income Protection. Watch our informative video to find out more.
              </p>
            </div>
              <Link href="/services/income-protection" className="inset-0 flex items-end justify-center">
                <span className="bg-[#5ae9d4] hover:font-medium text-black py-2 px-4 rounded-full">
                  See More {">"} {">"}
                </span>
              </Link>
          </div>
        </div>

        <div className="flex flex-row justify-center min-w-[100%]">
          <div className="flex-1 bg-white rounded-lg overflow-hidden m-5">
            <div className="relative">
              <div className="image-container">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-45.jpg"
                  alt="Card Image 1"
                  layout="fill" // Use 'fill' layout to cover the entire container
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-4 flex flex-col items-center justify-center optima-ttf text-center text-black text-xl">
                <h1 className="customFontSize">LUMP SUM INVESTMENT</h1>
                <h1 className="customFontSize">AND CHILDREN&apos;S EDUCATION</h1>
                <h1 className="customFontSize">PLANNING</h1>
            </div>
            <div className="p-10 flex flex-col items-center justify-center  text-center text-black">
              <p>
                 Discover the Benefits of Lump Sum Investment. Watch our informative video to learn more.
              </p>
            </div>
              <Link href="/services/Lump-Sum-Pension" className="inset-0 flex items-end justify-center">
                <span className="bg-[#5ae9d4] hover:font-medium text-black py-2 px-4 rounded-full">
                  See More {">"} {">"}
                </span>
              </Link>
          </div>

          <div className="flex-1 bg-white rounded-lg overflow-hidden m-5">
            <div className="relative">
              <div className="image-container">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-47.jpg"
                  alt="Card Image 2"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 flex flex-col items-center justify-center optima-ttf text-center text-black text-xl">
            <h1 className="customFontSize">RETIREMENT PLANNING AND</h1>
            <h1 className="customFontSize">PENSIONS</h1>
              {/* <h1 className="customFontSize">LAST MINUTE PENSIONS</h1> */}
            </div>
            <div className="p-10 flex flex-col items-center justify-center  text-center text-black">
              <p>
                  Explore the Benefits of Retirement Planning & Pensions. Watch our informative video to gain insights.
              </p>
            </div>
              <Link href="/services/retirement-pension" className="inset-0 flex items-end justify-center">
                <span className="bg-[#5ae9d4] hover:font-medium text-black py-2 px-4 rounded-full">
                  See More {">"} {">"}
                </span>
              </Link>
          </div>
        </div>
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

      </main>
    </>
  );
}
