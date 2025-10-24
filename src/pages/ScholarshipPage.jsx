import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import FetchScholarship from "../Services/scholarship/Fetchscholarship";
import Spinner from "../components/Spinner";

const ScholarshipPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isLoading , setIsLoading]=useState(false)
  const [Data, setData] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  async function getData() {
    try {
      setIsLoading(true)
      const res = await FetchScholarship();
      console.log("res", res);
      setData(res.data);
      setIsLoading(false)
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const faqData = [
    {
      question: "What will be the ‘SMART 2025’ Syllabus?",
      answer: (
        <a href="#" className="text-red-500 underline">
          Download PDF
        </a>
      ),
    },
    {
      question: "What are the benefits of ‘SMART 2025’?",
      answer:
        "SMART 2025 is a golden opportunity for JEE & NEET aspirants to evaluate their preparation on a competitive platform. It provides up to 90% Scholarship.",
    },
    {
      question: "How can I get an Admit card/Result?",
      answer:
        "After successful registration, Admit Card will be sent via E-mail or Whatsapp.",
    },
    {
      question: "Can I attempt the test Online?",
      answer: "Yes, via ‘Aspiration JEE & NEET Academy’ app.",
    },
    {
      question: "Can I have multiple attempts?",
      answer: "Up to 2 attempts allowed.",
    },
    {
      question: "How can I contact for other concerns?",
      answer: "Call: 99 9802 9802 / 99 9806 9806",
    },
    {
      question: "Can I get admission without attempting the test?",
      answer: "Yes.",
    },
    {
      question: "Is there any other way to avail Scholarship?",
      answer: "Yes, based on Class X/XII Board Exam performance.",
    },
  ];

  return (
    <MainLayout>
     {isLoading? <Spinner/>: <div className="text-white min-h-screen px-4 md:px-8 py-6 mt-[60px]">
        {/* Page Header */}
        <header className="text-center text-2xl md:text-3xl font-bold mb-6">
          SMART 2025 SCHOLARSHIP
        </header>

        {/* What is Smart 2025? */}
        <section className="bg-white text-black p-4 md:p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-red-500">
            {Data[0]?.title_1}
          </h2>
          <p>{Data[0]?.description_1}</p>
        </section>

        {/* Exam Details */}
        <section className="bg-white text-black p-4 md:p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-red-500">
            Exam Details
          </h2>
          <p>{Data[0]?.exam_details}</p>
          <a href=""/>
          <Link className=" text-red-500" to={`https://admin.aspirationjeeneet.in/${Data[0]?.exam_details_pdf_uploaded}`}>
            Download Pdf
          </Link>
        </section>

        {/* Benefits Section */}
        <section className="bg-white text-black p-4 md:p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-red-500">
            {Data[0]?.title_2}
          </h2>
          <p>{Data[0]?.description_2}</p>
        </section>

        {/* FAQ Section */}
        
        <section className="bg-white text-black p-4 md:p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-500">
            Frequently Asked Questions
          </h2>

          {Data.length > 0 &&
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="border-b border-gray-300 mb-2 last:border-none"
              >
                <button
                  className="w-full text-left p-2 font-semibold focus:outline-none text-black flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  {Data[0][`faq_q_${index + 1}`]}
                  <span className="text-red-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="p-2 text-gray-700 bg-gray-100 rounded-md">
                    {index === 0 ? (
                    
                      <a
                        href={`https://admin.aspirationjeeneet.in/${Data[0].faq_pdf_uploaded}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 underline"
                      >
                        Download PDF
                      </a>
                    ) : (
                      
                      Data[0][`faq_ans_${index + 1}`]
                    )}
                  </p>
                )}
              </div>
            ))}

        </section>

        {/* Enquiry Now Button */}
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-center block w-full sm:w-auto"
          >
            Enquiry Now
          </Link>
        </div>
      </div>}
    </MainLayout>
          )
};

export default ScholarshipPage;
