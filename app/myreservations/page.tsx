import React from "react";
import Image from "next/image";

export default function MyReservationsPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 pb-2 text-2xl">My reservations</h1>
      <div className="space-y-4">
        <div className="p-5  grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beach_1.jpg"
                className="hover:scale-110 object-cover transition h-full w-full cursor-pointer"
                alt="beach house"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Check in date:</span> 14/2/2024
            </p>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Check out date:</span> 14/2/2024
            </p>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Number of nights:</span> 2
            </p>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Total price:</span> $200
            </p>
            <div className=" mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
              Go to property
            </div>
          </div>
        </div>
        <div className="p-5  grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beach_1.jpg"
                className="hover:scale-110 object-cover transition h-full w-full cursor-pointer"
                alt="beach house"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Check in date:</span> 14/2/2024
            </p>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Check out date:</span> 14/2/2024
            </p>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Number of nights:</span> 2
            </p>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Total price:</span> $200
            </p>
            <div className=" mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
