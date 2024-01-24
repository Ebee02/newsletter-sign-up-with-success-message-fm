import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SecondForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onHandleSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="antialiased h-screen bg-[cornsilk] flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        className="flex flex-col gap-6 w-80 h-96 bg-gray-600 rounded-lg shadow-sm p-4 text-black"
      >
        <input
          {...register("email", {
            required: "Email field is empty.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address.",
            },
          })}
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 rounded-lg w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm font-medium">
            {errors.email.message}
          </p>
        )}
        <input
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be atleast 8 characters ",
            },
          })}
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg w-full"
          name="password"
        />{" "}
        {errors.password && (
          <p className="text-red-500 text-sm font-medium">
            {errors.password.message}
          </p>
        )}
        <input
          {...register("confirmPassword", {
            required: "Confrim password field is empty",
          })}
          type="password"
          placeholder="Confirm Password"
          className="p-3 rounded-lg w-full"
          name="confirmPassword"
        />
        <button
          disabled={isSubmitting}
          className="p-3 rounded-lg w-full bg-cyan-600 font-semibold text-white transition-all ease-in duration-75 hover:bg-cyan-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SecondForm;
