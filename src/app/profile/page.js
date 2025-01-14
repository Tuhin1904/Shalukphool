"use client";
import React from "react";

import { useRouter } from "next/navigation";

const ProfilePage = () => {
  // Static profile data
  const profileData = {
    name: "Biplab Dhar",
    address: "Kolkata ,WB",
    phone: "+91 98754 90291",
    email: "shalukfulerlajnai2021@gmail.com",
    profilePic: "Biplab.png", // Replace with an actual image URL
  };
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-gray-600 hover:text-green-600 transition duration-300 mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>

      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src={profileData.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-green-500"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">
        {profileData.name}
      </h2>

      {/* Address */}
      <p className="text-center text-gray-600 mt-2">{profileData.address}</p>

      {/* Phone */}
      <p className="text-center text-gray-600 mt-2">
        <strong>Phone:</strong> {profileData.phone}
      </p>

      {/* Email */}
      <p className="text-center text-gray-600 mt-2">
        <strong>Email:</strong> {profileData.email}
      </p>
    </div>
  );
};

export default ProfilePage;
