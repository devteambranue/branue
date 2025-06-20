"use client";
import Image from "next/image";
import bannerImage from "../../../public/Fusion_pics/Fusion_Finance_Team_Update_Web-Ready.jpg";
import marieDaveyImage from "../../../public/Fusion_pics/Marie-Web-Ready-7.jpg";
import gemmaMaguireImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-1.jpg";
import missionImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg";
import samanthaImage from "../../../public/Fusion_pics/Fusion Finance Web-Ready-29.jpg";
import catherineImage from "../../../public/Fusion_pics/Fusion Finance Catherine Web-Ready-2.jpg";
import dogImage from "../../../public/Fusion_pics/not-at-work (4).jpeg";
import gemmaAtTraithlon from "../../../public/Fusion_pics/image (15).png";
import ImageSlider from "../about/imageslider/imageSlider";
import "../custom-font.css";
import "./about.css";
import { useState } from "react";
import Divider from "@/components/ui/Divider/Divider";
import bannerAbout from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-31.jpg";

export default function About() {
  const [showReadMore1, setShowReadMore1] = useState(false);
  const handleReadMoreClick1 = () => {
    setShowReadMore1(!showReadMore1);
  };

  const [showReadMore2, setShowReadMore2] = useState(false);
  const handleReadMoreClick2 = () => {
    setShowReadMore2(!showReadMore2);
  };

  const [showReadMore3, setShowReadMore3] = useState(false);
  const handleReadMoreClick3 = () => {
    setShowReadMore3(!showReadMore3);
  };
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div
          className="w-full text-center items-center justify-center  overflow-hidden
        "
        >
          <div
            id="banner-area"
            className="banner-area"
            style={{
              background: `url(${bannerAbout.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              minHeight: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
        </div>
        <div className="w-full text-center optima-ttf items-center justify-center">
          <div
            id="banner-area"
            className="banner-area bnnerClass about_banner"
            style={{
              background: `url(${bannerImage.src})`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // height: "100%",
              // backgroundSize: "100%",
              // padding: "19% 0"
              backgroundSize: "100%",
              width: "100%",
              backgroundRepeat: "no-repeat",
              height: "63vh",
              backgroundPosition: "top",
              padding: "16% 0",
            }}
          ></div>
        </div>

        <section
          id="xs-sec-ecdacc26"
          className="optima-ttf relative section-padding"
        >
          <div className="absolute inset-0 bg-[#1a584f] -mt-10"></div>
          <div className="relative container mx-auto px-4 pt-4 pb-12">
            <div className="text-center flex flex-col items-center justify-center mb-12 relative">
              <h2
                className="text-3xl font-bold text-[#fe7db0] section-title-dash inline-block mb-4 relative"
                data-title="Why Choose Us"
              >
                Why Choose Us
              </h2>
              <Divider width={150} height={0.5} color="#5ae9d4" />
              <p className="optima-ttf text-white text-center mt-3 mb-5 ">
                With over 50+ years of combined experiences, we don't just
                <br />
                provide services --we build relationahips.
              </p>
            </div>

            <div className="container flex flex-wrap">
              <div className="w-full md:w-1/2 lg:px-4">
                <div className="mb-8 flex flex-col items-start md:ml-24">
                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Experience.png"
                          layout="intrinsic"
                          width={64}
                          height={64}
                          alt="Over 50 Years Experience"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Over 50 Years Experience
                        </h3>
                        <p className="text-white cormorant-infant text-lg">
                          Delivering expert financial advice
                        </p>
                      </div>
                    </div>
                    <div className="h-8"></div>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Insured.png"
                          layout="intrinsic"
                          width={64}
                          height={64}
                          alt="Fully Regulated and Insured"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Fully Regulated and Insured
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Central Bank regulated, Consumer Protection Code,{" "}
                          <br />
                          and Professional Insurers Brokers Association
                        </p>
                      </div>
                    </div>
                    <div className="h-8"></div>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Customer.png"
                          layout="intrinsic"
                          width={64}
                          height={64}
                          alt="Over 2000 Customers"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Over 2000 Customers
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Here to be your trusted advisor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:px-4">
                <div className="mb-8 flex flex-col items-start md:ml-24">
                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Team.png"
                          layout="intrinsic"
                          width={64}
                          height={64}
                          alt="Nationwide Team"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Nationwide Team
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Highly qualified financial planners to your door
                        </p>
                      </div>
                    </div>
                    <div className="h-8"></div>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Experties.png"
                          layout="intrinsic"
                          width={64}
                          height={64}
                          alt="CFP Expertise"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          CFP Expertise
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Our Certified Financial Planners have attained <br />
                          the highest industry standard
                        </p>
                      </div>
                    </div>
                    <div className="h-8"></div>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/customer-service.png"
                          layout="intrinsic"
                          width={64}
                          height={64}
                          alt="Exceptional Customer Service"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Exceptional Customer Service
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Always here to support your needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full my-16 text-center optima-ttf items-center justify-center">
          <div className="text-center flex flex-col items-center justify-center mb-12 relative">
            <h2
              className="text-3xl font-bold text-[#fe7db0] section-title-dash inline-block mb-4 relative"
              data-title="Why Choose Us"
            >
              Watch video about fusion
            </h2>
            <Divider width={150} height={0.5} color="#5ae9d4" />
            <p className="optima-ttf text-black text-center mt-3 mb-5 ">
              Fusion finance is dedicated to providing exceptional <br />
              Customer service.
            </p>
          </div>
          <div className="w-full h-full overflow-hidden videoSection">
            <video
              style={{
                height: "100%",
                width: "60%",
                display: "inline-block",
              }}
              src="/Fusion_pics/About-Fusion-Finance.mp4"
              className="responsiveVideo"
              autoPlay
              muted
              controls
            />
          </div>
        </div>

        <div className="imageSection">
          <Image
            src="/Fusion_pics/Fusion-Finance-Web-Ready-38(2).jpg"
            alt="Fusion-Finance-Web-Ready-38"
            width={600}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <section
          id="our-values"
          className="font-sans relative section-padding bg-white py-12 bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-white opacity-70"></div>
          <div className="relative container mx-auto px-4 w-full lg:w-3/4">
            <div className="text-center flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl font-bold text-[#fe7db0] mb-4 optima-ttf">
                Mission & Our Values
              </h2>
              <div className="mb-4">
                <Divider width={150} height={0.5} color="#5ae9d4" />
              </div>
              <div className="container text-center text-black space-y-4">
                <h4 className="cormorant-infant text-xl">
                  Fusion Finance develop relationships that make a positive
                  difference to our customers&apos; lives, providing financial
                  options and solutions that deliver premium value to our
                  clients. We uphold the highest standards of integrity in all
                  our actions.
                </h4>
                <p className="cormorant-infant text-xl">
                  Fusion Finance is dedicated to providing exceptional customer
                  service and financial solutions tailored to individual needs.
                  With over 25 years of experience and a commitment to
                  integrity, we have served over 2000 satisfied customers. Our
                  goal is to develop lasting relationships that positively
                  impact our clients&apos; lives.
                </p>

                <div className="flex justify-evenly items-center flex-wrap gap-1 pt-14">
                  <div className="min-h-[300px] mt-12 lg:mt-5 border-2 border-[#fe7db0] transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl max-w-xs flex flex-col justify-center items-start p-2 rounded-2xl w-full lg:w-[280px]">
                    <p className="text-black min-h-[300px] p-6 relative cormorant-infant text-xl bg-white inline-block rounded-2xl">
                      <span className="bg-[#fe7db0] absolute mr-8 lg:mr-4 -top-8 right-20 inline-block p-2 rounded-full services_icon">
                        <Image
                          src="/info.png"
                          width={50}
                          height={50}
                          alt="services"
                        />
                      </span>
                      <br />
                      <strong className="text-[#fe7db0] mb-4">Informed:</strong>
                      <br />
                      Certified Financial Planner designation is currently the
                      highest overall educational qualification that can be
                      obtained in the sector and this has been achieved by our
                      consultants.
                    </p>
                  </div>

                  <div className="min-h-[300px] mt-12 lg:mt-5 border-2 border-[#fe7db0] transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl max-w-xs flex flex-col justify-center items-start p-2 rounded-2xl w-full lg:w-[280px]">
                    <p className="text-black min-h-[330px] relative cormorant-infant text-xl bg-white inline-block p-2 rounded-2xl">
                      <span className="bg-[#fe7db0] absolute mr-8 lg:mr-4 -top-12 right-20 inline-block p-2 rounded-full services_icon">
                        <Image
                          src="/focus.png"
                          width={50}
                          height={50}
                          alt="services"
                        />
                      </span>
                      <br />
                      <strong className="text-[#fe7db0] mb-4">
                        Focused:
                      </strong>{" "}
                      <br />
                      We believe we are successful in running our business due
                      to determination, hard work, resilience and willingness to
                      adapt in an ever changing environment.
                    </p>
                  </div>

                  <div className="min-h-[300px] mt-12 lg:mt-5 border-2 border-[#fe7db0] transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl max-w-xs flex flex-col justify-center items-start p-2 rounded-2xl w-full lg:w-[280px]">
                    <p className="text-black min-h-[330px] relative cormorant-infant text-xl bg-white inline-block p-2 rounded-2xl">
                      <span className="bg-[#fe7db0] absolute mr-8 lg:mr-4 -top-12 right-20 inline-block p-2 rounded-full services_icon">
                        <Image
                          src="/open.png"
                          width={50}
                          height={50}
                          alt="services"
                        />
                      </span>
                      <br />
                      <strong className="text-[#fe7db0] mb-4">
                        Open:
                      </strong>{" "}
                      <br /> We enjoy the dynamism of the industry, its ability
                      to evolve and develop continuously while performing in a
                      transparent, honest & professional manner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#1a584f] flex flex-col justify-centerl items-center">
          <section className="optima-ttf flex flex-col md:flex-row items-center my-10">
            <div className="flex flex-col justify-center items-center ">
              <div className="flex flex-col justify-center items-center">
                <h2 className=" optima-ttf pt-0 text-center text-3xl my-10 font-bold text-[#fe7db0] mb-2">
                  Who We Are
                </h2>
                <div className="mb-0">
                  <Divider width={150} height={1} color="#5ae9d4" />
                </div>
                <p className="optima-ttf text-white text-center mt-2 mb-5 ">
                  meet our team
                </p>
              </div>

              <div className="pb-10 pt-10 w-full lg:w-3/4 mx-4 flex flex-col lg:flex-row px-4 cormorant-infant">
                <Image
                  src={"/Fusion_pics/Fusion Finance Web-Ready-11.jpg"}
                  layout="responsive"
                  width={150}
                  height={150}
                  alt="partner3"
                  className="rounded-lg marieImage object-cover"
                />
                <div className="mariaContent">
                  <h2 className="text-4xl font-bold text-[#fe7db0]">
                    Marie Davey
                  </h2>
                  <div className="my-4">
                    <Divider width={150} height={0.5} color="#5ae9d4" />
                  </div>
                  <p className="font-semibold text-black text-xl">
                    QFA, RPA, SIA, Digital marketing degree.
                  </p>
                  <p className=" font-semibold mb-4 text-black text-xl">
                    Partner Fusion Finance
                  </p>
                  <p className="mb-4 text-white text-xl">
                    My Journey within the Financial Services was very much
                    accidental when I meet with New Ireland Assurance they
                    convinced me that I would be a great fit as a tied agent
                    with their company and from there my journey began, New
                    Ireland Assurance was instrumental in guiding me through my
                    exams in my QFA and RPA as well as giving me the tools to
                    navigate the world of finance which can be very scary and
                    complex and at the time very male dominated, it was from
                    there that I got to really understand the world of Finance
                    and most importantly people.
                  </p>

                  {!showReadMore1 && (
                    <button
                      onClick={handleReadMoreClick1}
                      className="text-black text-xl"
                    >
                      ....Read more
                    </button>
                  )}

                  {showReadMore1 && (
                    <div>
                      <p className="mb-4 text-white text-xl">
                        I understand the most important relationship I can have
                        is with me and my client and I have had the most amazing
                        journey getting to help and guide my Fusion Family
                        through the harsh bumpy and complex financial road.
                        <br />
                        <br />
                        The complex relationship between health and happiness
                        really does have a lot to do with our general health and
                        wellbeing and sometimes it is that relationship with
                        money that makes the difference to our mental wellbeing.
                      </p>
                      <p className="mb-4 text-white text-xl">
                        I decided to leave New Ireland in 2010 and joined a firm
                        in Dublin that worked for the public sector, and it was
                        there that I got introduced to the Public sector and
                        built up a great relationship within that sector, in May
                        2012 I decided to take a huge leap of faith with my
                        colleague Gemma Mcguire and Fusion Finance became a
                        reality.
                        <br />
                        <br />
                        We have a combined customer baes of over 2000 clients
                        and this is growing year on year we are blessed to have
                        Samatha and Catherine working tirelessly to ensure our
                        clients are always priority, we have worked very hard to
                        keep on top of all the complex changes that continue to
                        be part of the financial landscape. We were nominated
                        last year by Brookers Ireland as one of the Top 3
                        brokers in Ireland when it comes to prioritising
                        protection around our clients.
                      </p>
                      <p className="mb-4 text-white text-xl">
                        I am on the Journey to completing my CFP which is the
                        highest designation in the financial service and
                        recognised around the world, it&apos;s something I never
                        thought I would do but I believe with an amazing team
                        behind you anything is possible. My dreams for the next
                        10 years are for my clients to have a real genuine
                        connection with me if they phone me, they are not
                        waiting or put on hold they get us if not straight away
                        within the same day, we have seen the devastation of
                        separation, illness and death and want for our clients
                        to know that we are there if they need us.
                      </p>
                      <p className="font-bold text-white text-xl">
                        My goal for the next 10 years is to give back to my
                        community, I am very involved in Soccer and in animals
                        and I want to develop my passion in fostering animals,
                        besides my two boys my biggest passion is the welfare of
                        animals, I recently rescued a lurcher called Archie and
                        he has been one of the biggest changes in my life, his
                        soul was meant to meet mine. I will have also completed
                        my master&apos;s in finance and most importantly see my
                        boys grow into young men. There is no currency more
                        valuable than time, we can always make money but can
                        never make up for lost time.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-5 w-full lg:w-1/2 overflow-hidden divider_wrapper">
                <Divider width={700} height={1} color="#5ae9d4" />
              </div>

              <div className="pb-10 pt-10 w-full lg:w-3/4 mx-4 flex flex-col lg:flex-row px-4 cormorant-infant">
                <Image
                  src={gemmaMaguireImage.src}
                  layout="responsive"
                  width={150}
                  height={150}
                  alt="partner3"
                  className="rounded-lg marieImage object-cover"
                />
                <div className="mariaContent">
                  <h2 className="text-4xl font-bold text-[#fe7db0]">
                    Gemma Maguire
                  </h2>
                  <div className="my-4">
                    <Divider width={150} height={0.5} color="#5ae9d4" />
                  </div>
                  <p className="font-semibold text-black text-xl">
                    CFP, RPA, QFA, SIA
                  </p>
                  <p className=" font-semibold mb-4 text-black text-xl">
                    ertified Financial Planner
                    <br /> <span>Partner Fusion Finance</span>
                  </p>
                  <p className="mb-4 text-white text-xl">
                    Since joining the financial services industry in 1999, I
                    have gained extensive experience in all areas of Financial
                    Planning Pension and Wealth Planning along with providing
                    Family and Illness Protection solutions for my clients.
                  </p>

                  {!showReadMore2 && (
                    <button
                      onClick={handleReadMoreClick2}
                      className="text-black text-xl"
                    >
                      ....Read more
                    </button>
                  )}

                  {showReadMore2 && (
                    <div className="readMore">
                      <p className="mb-4 text-white text-xl">
                        During a consultation meeting we will discuss and
                        identify your goals, establish your priorities and
                        aspirations. We can then assess the options available
                        and put steps in place to make these a reality. This is
                        to provide a foundation for a more secure financial
                        future for you and give you the peace of mind that your
                        priorities will be achieved.
                      </p>
                      <p className="mb-4 text-white text-xl">
                        Most of us will face concerns such as a need to provide
                        for children’s education, save up for retirement or to
                        maintain our current lifestyles in the event of
                        illness/premature death. I will work with you on an
                        ongoing basis by providing clear and understandable
                        advice and solutions specific to your current life
                        situations to address these concerns.
                      </p>
                      <p className="mb-4 text-white text-xl">
                        Ultimately, my objective is to provide my clients with
                        complete Financial Peace of Mind when they need it most.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-5 w-full lg:w-1/2 overflow-hidden divider_wrapper">
                <Divider width={700} height={1} color="#5ae9d4" />
              </div>

              <div className="pb-10 pt-10 w-full lg:w-3/4 mx-4 flex flex-col lg:flex-row px-4 cormorant-infant">
                <Image
                  src={samanthaImage.src}
                  layout="responsive"
                  width={150}
                  height={150}
                  alt="partner4"
                  className="rounded-lg marieImage object-cover"
                />
                <div className="mariaContent">
                  <h2 className="text-4xl font-bold text-[#fe7db0]">
                    Samantha
                  </h2>
                  <div className="my-4">
                    <Divider width={150} height={0.5} color="#5ae9d4" />
                  </div>
                  {/* <p className="font-semibold text-black text-xl">
                    CFP, RPA, QFA, SIA
                  </p> */}
                  <p className=" font-semibold mb-4 text-black text-xl">
                    Sales Support
                  </p>
                  <p className="mb-4 text-white text-xl">
                    Samantha joined Fusion Finance early in 2017. She is a
                    fantastic asset to the business in her efficiency and follow
                    through of all customer requests. As sales support, Samantha
                    handles the administration of all business to ensure an
                    excellent customer experience. Over the last 3 years
                    Samantha has undertaken to complete 6 financial exams to
                    enable her to become a Qualified Financial Advisor. This has
                    given Samantha a great understanding of all aspects of
                    financial advice and is so beneficial in her office and
                    customer dealings.
                  </p>
                </div>
              </div>

              <div className="mb-5 w-full lg:w-1/2 overflow-hidden divider_wrapper">
                <Divider width={700} height={1} color="#5ae9d4" />
              </div>

              <div className="pb-10 pt-10 w-full lg:w-3/4 mx-4 flex flex-col lg:flex-row px-4 cormorant-infant">
                <Image
                  src={catherineImage.src}
                  layout="responsive"
                  width={150}
                  height={150}
                  alt="partner3"
                  className="rounded-lg marieImage object-cover"
                />
                <div className="mariaContent">
                  <h2 className="text-4xl font-bold text-[#fe7db0]">
                    Catherine&apos;s
                  </h2>
                  <div className="my-4">
                    <Divider width={150} height={0.5} color="#5ae9d4" />
                  </div>
                  {/* <p className="font-semibold text-black text-xl">
                    CFP, RPA, QFA, SIA
                  </p> */}
                  <p className=" font-semibold mb-4 text-black text-xl">
                    Sales Support
                  </p>
                  <p className="mb-4 text-white text-xl">
                    Catherine Mulcahy has a diverse background in travel and
                    tourism, as well as experience as a personal assistant in a
                    medical practice. She brings a unique skill set to her Sales
                    Manager Fusion Finance role. Catherines&apos; experience in
                    the travel industry has honed her organisational and
                    customer service skills, allowing her to manage complex
                    itineraries and provide exceptional support to clients.
                  </p>

                  {!showReadMore3 && (
                    <button
                      onClick={handleReadMoreClick3}
                      className="text-black text-xl"
                    >
                      ....Read more
                    </button>
                  )}
                  {showReadMore3 && (
                    <div className="readMore">
                      <p className="mb-4 text-white text-xl">
                        In the medical field, she developed a keen attention to
                        detail and the ability to handle sensitive information
                        with discretion. She is excited to join the Fusion
                        Finance team, where she aims to leverage her expertise
                        to contribute to a seamless and efficient workflow,
                        ensuring that our clients receive the highest level of
                        service.
                      </p>
                      <p className="mb-4 text-white text-xl">
                        Catherine is a wife to Peter and a mother to two young
                        children, an adventurous boy and a teddy-obsessed girl.
                        Working with Fusion Finance has taught her that there is
                        nothing more important than financial security for her
                        family, particularly with her children&apos;s future in
                        mind. If only the world was flawless as seen through the
                        eyes of children but unfortunately in today&apos;s world
                        the future is very much uncertain. We need to be
                        proactive in securing a safe future for those we love.
                      </p>
                      <p className="mb-4 text-white text-xl">
                        “Your Smile is your Logo; your Personality is your
                        business Card”
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="my-14 mx-2">
          <div className="flex flex-col justify-center items-center">
            <h2 className="optima-ttf  text-center text-3xl font-bold text-[#fe7db0] mb-3">
              When we are not at work
            </h2>
            <div className="mb-3 ">
              <Divider width={140} height={0.5} color="#5ae9d4" />
            </div>
            <p className="optima-ttf text-black text-center mt-1 mb-5 ">
              Our spuare time is fueld for our work
            </p>
          </div>
          <div className="container py-10">
            <div className="flex justify-between flex-col md:flex-row">
              <div className="bg-white m-2 flex flex-col lg:flex-row  md:w-1/2 rounded-md">
                <div className="w-full lg:w-1/2">
                  <h6 className="text-[#1a584f] text-3xl font-bold optima-ttf">
                    Gemma Triathlon
                  </h6>
                  <p className="text-[#4B4145] cormorant-infant text-md leading-5 text-justify mx-2 mt-2">
                    Gemma: “I am actively involved with Sligo Triathlon Club for
                    over 10 years and have volunteered on the committee as
                    Treasurer for 3 years. I thoroughly enjoy the social aspect
                    of the training with other club members and the mix of
                    disciplines that swimming, cycling, and running brings.
                  </p>
                  <p className="font-bold text-black cormorant-infant text-md leading-5 text-justify mx-2 mt-2">
                    Over the last number of years, I have participated in
                    numerous triathlons, swimming and running events and also in
                    aid of charities, North West Hospice, Multiple Sclerosis
                    Centre, and Sligo Hospital Oncology Unit. I greatly
                    appreciate the benefit which the club affords me in my
                    mindset and wellness.”
                  </p>
                </div>
                <div className="image-wrapper relative w-full lg:w-1/2">
                  <Image
                    src={gemmaAtTraithlon.src}
                    layout="responsive"
                    width={150}
                    height={150}
                    alt="partner3"
                    className="rounded-lg imgCss bg-white p-0 py-2 lg:p-3 object-cover"
                  />
                </div>
              </div>
              <div className="bg-white m-2 flex flex-col lg:flex-row  md:w-1/2 rounded-md">
                <div className="w-full lg:w-1/2">
                  <h6 className="text-[#1a584f] text-3xl font-bold optima-ttf">
                    Marie&apos;s Champion Canine
                  </h6>
                  <p className="text-[#4B4145] cormorant-infant text-md leading-5 text-justify mx-2 mt-2">
                    Marie: “I am grateful to have been able to take a quivering
                    abandoned dog to the ruler of our hearts. Archie now reigns
                    supreme with a paw of iron and a heart of pure gold.
                  </p>
                  <p className="cormorant-infant text-md leading-5 text-justify mx-2 mt-2">
                    When I&apos;m not busy pampering Archie, Bailey, and Coco or
                    exploring new lands with family by my side, you can find me
                    on the sidelines, proudly sponsoring the under 15 and 16
                    Cahir team every year.”
                  </p>
                </div>
                <div className="image-wrapper relative w-full lg:w-1/2">
                  <Image
                    src={dogImage.src}
                    layout="responsive"
                    width={150}
                    height={150}
                    alt="partner3"
                    className="rounded-lg imgCss bg-white p-0 py-2 lg:p-3 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
