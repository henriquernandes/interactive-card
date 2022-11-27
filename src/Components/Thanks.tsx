import React from "react";
import thanksLogo from "../assets/images/icon-complete.svg";
import { useFormContext } from "react-hook-form";

const Thanks = () => {
  const { setValue } = useFormContext();
  return (
    <div className="flex flex-col w-3/6 items-center">
      <img src={thanksLogo} alt="" className="w-20 h-20 -mt-36" />
      <h1 className="text-4xl pt-10 text-very-dark-violet">THANK YOU!</h1>
      <p className="text-md font-bold text-grayish-violet pt-5">
        We`ve added your card details
      </p>
      <button
        className="bg-very-dark-violet text-white px-3 py-4 rounded-md mt-7 w-full"
        onClick={() => setValue("redirect", false)}
      >
        Confirm
      </button>
    </div>
  );
};

export default Thanks;
