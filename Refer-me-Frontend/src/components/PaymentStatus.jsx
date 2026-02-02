import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaHome } from "react-icons/fa";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const name = searchParams.get("name");
  const isSuccess = status === "success";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white max-w-md w-full rounded-3xl shadow-2xl p-10 text-center">
        <div className="mb-6">
          {isSuccess ? (
            <FaCheckCircle className="text-green-500 text-8xl mx-auto animate-bounce" />
          ) : (
            <FaTimesCircle className="text-red-500 text-8xl mx-auto animate-pulse" />
          )}
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {isSuccess ? "Registration Successful!" : "Payment Failed"}
        </h1>

        <p className="text-gray-600 mb-8 text-lg text-balance">
          {isSuccess
            ? `Thank you ${name}! Your registration was successful. Confirmation details have been sent to your email.`
            : "Sorry, the transaction failed. Please check your bank details or try again."}
        </p>

        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105 
          ${isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentStatus;
