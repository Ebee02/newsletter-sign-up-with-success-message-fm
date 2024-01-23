import { useState } from "react";
import "./Form.css";
import NewsletterFeature from "../NewsletterFeatures/NewsletterFeature";

const Form = () => {
  const [userEmail, setUserEmail] = useState("");

  console.log(userEmail);

  function onHandleChange(e) {
    const { name, value } = e.target;
    setUserEmail((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div>
      <main className="min-h-screen flex justify-center items-center p-12 font-[16px] bg-[#36384e]">
        <div className="flex flex-col md:flex-row-reverse w-[375px] md:w-[1040px] h-[850px] md:h-[600px] bg-white shadow-sm shadow-gray-50 md:rounded-3xl md:p-6 md:gap-x-8">
          <div className="image-container flex-1 h-[284px] md:h-full w-full rounded-b-2xl mb-8 md:rounded-2xl"></div>
          <div className="flex-1 w-full md:h-full px-5 md:p-5 text-[#36384e] font-medium md:rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-8 md:mb-9 text-[#242742]">
              Stay updated!
            </h1>
            <p className="mb-6 md:mb-7 md:text-lg">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <div>
              <NewsletterFeature feature="Product discovery and building what matters" />
              <NewsletterFeature feature="Measuring to ensure updates are a success" />
              <NewsletterFeature feature="And much more!" />
            </div>
            <form className="mt-8 md:mt-10" onSubmit={onHandleSubmit}>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-[#242742] mb-4"
              >
                Email address
              </label>
              <input
                htmlFor="email"
                name="email"
                onChange={onHandleChange}
                type="text"
                placeholder="email@company.com"
                className="border border-gray-300 px-6 py-4 w-full shadow-sm rounded-lg mb-6"
              />

              <button
                className="btn bg-[#242742] text-white cursor-pointer py-4 text-center w-full shadow-sm rounded-lg mb-8"
                value={"Subscribe to monthly newsletter"}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          {/* <!-- Sign-up form end --> */}
          {/* <!-- Success message start --> */}
          {/* Thanks for subscribing! A confirmation email has been sent to
        ash@loremcompany.com. Please open it and click the button inside to
        confirm your subscription. Dismiss message */}
          {/* <!-- Success message end --> */}
        </div>

        {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
      </main>
    </div>
  );
};

export default Form;
