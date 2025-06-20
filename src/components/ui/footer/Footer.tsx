"use client";

import Link from "next/link";
import { ResultsContext } from "@/components/context/cache";
import { useContext } from "react";
import Image from "next/image";
import Divider from "../Divider/Divider";

export default function Footer() {
  const { result, setResult } = useContext(ResultsContext);
  const imageSize = 50;
  const handleClick = () => {
    setResult(null);
  };

  return (
    <footer className="flex flex-col footerArea new">
      <div className="bg-gray-100 py-14">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="container mx-auto text-center">
              <h1 className="text-[#fe7db0] mb-6 text-center text-3xl sm:text-5xl font-bold optima-ttf">
                <span className="relative inline-block pb-4 after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:top-full after:mt-2 after:w-1/2 after:h-1 after:bg-[#5ae9d4]">
                  Our Valued Partners
                </span>
              </h1>
              <p className="pt-4 pb-10 text-black-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed optima-ttf">
                Over 2000 Customers
              </p>
            </div>

            <div className="py-10 flex flex-wrap md:flex-nowrap justify-center gap-4">
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/BIS-Platform-Logo.png"
                  width={250}
                  height={75}
                  alt="partner1"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/lia2.png"
                  width={75}
                  height={75}
                  alt="partner2"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/cfp.png"
                  width={75}
                  height={75}
                  alt="partner3"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/Bi-logo.png"
                  width={250}
                  height={75}
                  alt="partner4"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/iob-logo.png"
                  width={150}
                  height={25}
                  alt="partner5"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/pfsb-logo.png"
                  width={150}
                  height={50}
                  alt="partner6"
                  className="mx-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#897f83] py-12">
        <div className="container mx-auto flex flex-col lg:flex-row px-0 gap-6">
          {/* Column 1 */}
          <div className="flex-1 text-center lg:text-right lg:pr-10">
            <h1 className="text-2xl optima-ttf mb-4 text-black">
              Regulatory Information
            </h1>
            <div className="h-[2px] w-[40%] bg-[#f3f4f6] mx-auto lg:ml-auto lg:mr-0"></div>
            <div className="mt-4 flex flex-col items-right leading-tight text-center lg:text-right">
              <p className="optima-ttf text-lg">
                Marie Davey and Gemma Maguire t/a <br />
                Fusion Finance are regulated by the <br />
                Central Bank of Ireland.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-20 w-1 bg-black mx-auto self-center mb-20"></div>

          {/* Column 2 */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl optima-ttf mb-4 text-black">Contact Us</h1>
            <div className="h-[2px] w-[40%] bg-[#f3f4f6] mx-auto"></div>
            <div className="mt-4 flex flex-col items-center leading-relaxed">
              <p className="optima-ttf uppercase">Call Us:</p>
              <p className="optima-ttf mt-2">
                Marie - <a href="tel:0861013481">086 101 3481</a>
              </p>
              <p className="optima-ttf">
                Gemma - <a href="tel:0858275697">085 827 5697</a>
              </p>
              <p className="optima-ttf uppercase mt-4">Email Us:</p>
              <p className="optima-ttf mt-0">
                <a href="mailto:info@fusion-finance.com">
                  info@fusion-finance.com
                </a>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-20 w-1 bg-black mx-auto self-center mb-20"></div>

          {/* Column 3 */}
          <div className="flex-1 text-center lg:text-left lg:pl-10">
            <h1 className="text-2xl optima-ttf mb-4 text-black">Useful Info</h1>
            <div className="h-[2px] w-[40%] bg-[#f3f4f6] mx-auto lg:mx-0 lg:mr-auto"></div>
            <div className="mt-4 flex flex-col items-left text-center lg:text-left leading-relaxed">
              <Link
                href="https://fusion-finance.com/pdf/Terms-of-Business-For-Fusion-Finance.pdf"
                className="optima-ttf mb-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Business
              </Link>
              <Link
                href="https://fusion-finance.com/pdf/Fusion-Finance-Data-Protection.pdf"
                className="optima-ttf mb-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://fusion-finance.com/pdf/commission-term.pdf"
                className="optima-ttf mb-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commission Terms 2020
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-300 py-8 text-center">
        <div className="optima-ttf text-sm text-gray-600">
          2025 © Fusion Finance. All Rights Reserved.
        </div>
        <div className="flex justify-center items-center mt-4">
          <a
            href="https://www.facebook.com/fusion4advice"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_f.png"
              width={imageSize}
              height={imageSize}
              alt="facebook"
              className="m-2"
            />
          </a>
          <a
            href="https://www.instagram.com/fusion_finance/"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_tiktock.png"
              width={imageSize}
              height={imageSize}
              alt="instagram"
              className="m-2"
            />
          </a>
          <a
            href="http://www.twitter.com/fusion4advice"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_twitter.png"
              width={imageSize}
              height={imageSize}
              alt="x"
              className="m-2"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/fusion-finance"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_in.png"
              width={imageSize}
              height={imageSize}
              alt="linkedin"
              className="m-2"
            />
          </a>
          <a
            href="https://www.youtube.com/@fusionfinance3820"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_youtube.png"
              width={imageSize}
              height={imageSize}
              alt="yt"
              className="m-2"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
