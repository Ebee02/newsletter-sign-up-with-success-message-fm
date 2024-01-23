import React, { useState } from "react";

const SecondForm = () => {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formData);

  function onHandleChange(e) {
    const { name, value } = e.target;
    setFromData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  }

  return (
    <div className="antialiased h-screen bg-[cornsilk] flex items-center justify-center">
      <form
        action=""
        className="flex flex-col gap-6 w-80 h-80 bg-gray-600 rounded-lg shadow-sm p-4 text-black"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 rounded-lg w-full"
          onChange={onHandleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg w-full"
          name="password"
          onChange={onHandleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 rounded-lg w-full"
          name="confirmPassword"
          onChange={onHandleChange}
        />
        <button
          onClick={onHandleSubmit}
          className="p-3 rounded-lg w-full bg-cyan-600 font-semibold text-white transition-all ease-in duration-75 hover:bg-cyan-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SecondForm;
