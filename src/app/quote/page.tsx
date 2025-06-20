"use client";
import QuoteForm from "../../components/ui/quote-form/QuoteForm";
import bannerQuote from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-31.jpg";

export default function Quote() {
  return (
    <>
      <main className="">
        <div
          className="w-full text-center items-center justify-center  overflow-hidden
        "
        >
          <div
            id="banner-area"
            className="banner-area"
            style={{
              background: `url(${bannerQuote.src})`,
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
        <QuoteForm />
      </main>
    </>
  );
}
