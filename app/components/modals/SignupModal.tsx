"use client";
import React from "react";
import { Modal } from "./Modal";
import { CustomButton } from "../forms/CustomButton";
import { useSignUpModal } from "../hooks/useSignUpModal";

export const SignupModal = () => {
  const SignupModal = useSignUpModal();
  const content = (
    <>
      <h2 className="mb-6 text-2xl"> Welcome to DjangoBnB, please sign up</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your e-mail address"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />
        <input
          type="password"
          placeholder="Your password"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />
        <input
          type="password"
          placeholder="Repeat password"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          error message
        </div>
        <CustomButton label="Submit" onClick={() => console.log("Test")} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={SignupModal.isOpen}
      close={SignupModal.close}
      label="Sign Up"
      content={content}
    />
  );
};
