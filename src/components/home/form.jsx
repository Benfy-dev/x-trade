"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyiNT5EZQEOr-is4GakNnLnG7y4hZW8F2iitqpotte4yelS9YijoJL3OXJQkE-x6lpqKg/exec",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        router.push("/calculator");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 md:p-8 bg-white md:w-[420px] rounded-xl max-w-full"
      style={{ boxShadow: "0px 9px 15.8px 0px #00000012" }}
    >
      <input
        className="p-2 rounded-md w-full border border-gray-200 placeholder:text-gray-400/90"
        type="text"
        placeholder="Your Name*"
        autoComplete="off"
        name="name"
        id="name"
        required
        pattern="[A-Za-z\s]{1,50}"
        maxLength={50}
      />
      <input
        className="p-2 my-6 rounded-md w-full border border-gray-200 placeholder:text-gray-400/90"
        type="tel"
        placeholder="Mobile Number*"
        autoComplete="on"
        name="phone"
        id="phone"
        required
        maxLength={10}
      />
      <input
        className="p-2 rounded-md w-full border border-gray-200 placeholder:text-gray-400/90"
        type="email"
        placeholder="E-mail ID*"
        autoComplete="off"
        name="mail"
        id="mail"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
      <small className="text-gray-400">
        Your personal information is secure with us.
      </small>

      <p className="text-xl md:text-2xl mt-6">
        Turn Numbers into Growth with <br />
        <span className="font-bold">Our Profit Calculator.</span>
      </p>

      <button
        type="submit"
        className="cursor-pointer py-2 px-4 mt-4 bg-brand text-white rounded md:text-xl"
        disabled={loading}
      >
        {loading ? "Submitting..." : "View Profit Calculator"}
      </button>
    </form>
  );
};

export default ContactForm;
