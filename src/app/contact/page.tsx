"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-37.jpg";
import contactImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-35.jpg";
import "./contact.css";
import Divider from "@/components/ui/Divider/Divider";
import bannerContact from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-31.jpg";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [county, setCounty] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (interests.includes(value)) {
      setInterests(interests.filter((item) => item !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      fullName,
      email,
      phone,
      county,
      interests,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log("Response received");
        if (res.status === 200) {
          // console.log("Response succeeded!");
          toast.success("Email sent successfully!");
          setFullName("");
          setEmail("");
          setPhone("");
          setCounty("");
          setInterests([]);
        } else {
          toast.error("Error sending email. Please try again.");
        }
      })
      .catch(() => {
        toast.error("Error sending email. Please try again.");
      });
  };

  return (
    <>
      <main>
        <div
          className="w-full text-center items-center justify-center  overflow-hidden
        "
        >
          <div
            id="banner-area"
            className="banner-area"
            style={{
              background: `url(${bannerContact.src})`,
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

        <section className="font-sans py-16 bg-[#1a584f]">
          <div className="flex flex-row mx-auto">
            <div className="flex flex-col lg:flex-row justify-around row">
              <div className="w-full lg:w-full flex items-center justify-center lg:pr-6 px-4 lg:px-0">
                <img
                  src={contactImage.src}
                  alt="Contact Us"
                  className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 h-[300px] lg:h-[400px] object-cover max-h-[500px]"
                />
              </div>

              <div className="w-full lg:w-full mt-8 lg:mt-0 flex justify-center items-center px-4 lg:px-2">
                <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg px-6 pt-6 pb-8 mb-4">
                  <h2 className="underline text-2xl font-bold mb-4 text-center text-[#1a584f]">
                    Get In Touch
                  </h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1a584f] focus:border-[#1a584f] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1a584f] focus:border-[#1a584f] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1a584f] focus:border-[#1a584f] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="county"
                        className="block text-sm font-medium text-gray-700"
                      >
                        County *
                      </label>
                      <input
                        id="county"
                        name="county"
                        type="text"
                        autoComplete="address-level1"
                        required
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:[#1a584f] focus:border-[#1a584f] sm:text-sm"
                      />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-700">
                        What are you interested in today? *
                      </span>
                      <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center">
                            <input
                              id={`interest-${interest}`}
                              name="interests"
                              type="checkbox"
                              className="focus:ring-[#1a584f] h-4 w-4 text-[#1a584f] border-gray-300 rounded"
                              value={interest}
                              checked={interests.includes(interest)}
                              onChange={handleInterestChange}
                            />
                            <label
                              htmlFor={`interest-${interest}`}
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-bold text-black bg-[#5ae9d4] hover:bg-[#1a584f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a584f] uppercase "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full lg:w-full mt-8 lg:mt-0 flex flex-col justify-center items-start p-4 lg:p-6">
                <h1 className="optima-ttf text-4xl text-[#fe7db0]">
                  Email Us Or <br />
                  Call Us
                </h1>
                <div className="my-6">
                  <Divider width={200} height={0.5} color="#5ae9d4" />
                </div>
                <h3 className="text-white text-xl optima-ttf my-6">
                  Mon - Fri <br />
                  9:30 - 17:30pm BST
                </h3>
                <div className="flex flex-row text-white optima-ttf">
                  <h2 className="text-2xl">086 101 3481</h2>
                </div>
                <div className="flex flex-row text-white optima-ttf mb-10">
                  <h2 className="text-2xl">085 827 5697</h2>
                </div>
                <p className="text-white">
                  If you have any questions, <br /> please feel free to contact
                  us <br />
                  at any time
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

const interestOptions = [
  "Pensions",
  "Mortgage Protection",
  "Illness Cover",
  "Life Cover",
  "Income Protection",
  "Family Protection",
  "Children's Education",
  "Retirement Planning",
  "Healthcare Planning",
  "Long Term Investments",
];
