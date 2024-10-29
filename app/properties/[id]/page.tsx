import React from "react";
import Image from "next/image";
import { ReservationSidebar } from "@/app/components/properties/ReservationSidebar";

export default function PropertyDetailPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src={"/beach_1.jpg"}
          alt="beach-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-5 col-span-3">
          <h1 className="mb-4 text-4xl">Property name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              width={50}
              height={50}
              src={"/profile_pic_1.jpg"}
              alt="profile-image"
              className="rounded-full"
            />
            <p className="">
              <span className="font-semibold">John Doe</span> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
}
