import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

const SuccessMessage = (props) => {
  const { state } = useLocation();

  return (
    <main className="relative min-h-screen flex justify-center items-center px-1 font-[16px] bg-[#36384e]">
      <div className="relative flex items-center flex-col w-[400px] h-[850px] md:h-[420px] bg-white shadow-sm shadow-gray-50 md:rounded-3xl px-8 md:p-9">
        <div className="mt-36 md:mt-0 w-full mb-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 64 64"
            className="cursor-pointer"
          >
            <defs>
              <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6A3A" />
                <stop offset="100%" stopColor="#FF527B" />
              </linearGradient>
            </defs>
            <g fill="none">
              <circle cx="32" cy="32" r="32" fill="url(#a)" />
              <path
                stroke="#FFF"
                strokeWidth="4"
                d="m18.286 34.686 8.334 7.98 19.094-18.285"
              />
            </g>
          </svg>
        </div>
        <h1 className="text-4xl tracking-wide font-semibold mb-7">
          Thanks for subscribing!
        </h1>
        <p className="text-base font-semibold mb-6">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{state?.emailValue}</span>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <Link to="/" className="absolute bottom-8 w-full px-8">
          <button className="btn bg-[#242742] text-white cursor-pointer text-center w-full py-3  shadow-sm rounded-lg font-semibold">
            Dismiss message
          </button>
        </Link>
      </div>
    </main>
  );
};

export default SuccessMessage;
