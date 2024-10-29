"use client";
import React from "react";
import { Modal } from "./Modal";
import { useState } from "react";
import { CustomButton } from "../forms/CustomButton";
import { useLoginModal } from "../hooks/useLoginModal";

export const LoginModal = () => {
  const loginModal = useLoginModal();
  const content = (
    <>
      <h2 className="mb-6 text-2xl"> Welcome to DjangoBnB, please log in</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your e-mail address"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />
        <input
          type="password"
          placeholder="Your e-mail address"
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
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};
