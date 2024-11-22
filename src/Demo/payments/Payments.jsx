import creditCard from "../../assets/CreditCard.svg";
import React from "react";

const Payments = () => {
  const username = localStorage.getItem("username");

  return (
    <>
      <div className="bg-[#E8EDF1] h-[92px]">
        <div className=" bg-white px-7 py-5  flex border-b-4 items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1746A2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-user"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>
          <div className="flex flex-col">
            <h2 className="text-sm ">
              {username} {">"}
            </h2>
            <p className="text-xs text-gray-500">+996 *** *** *11</p>
          </div>
        </div>
      </div>
      <div className="p-8 bg-[#E8EDF1]">
        <div className="shadow-lg bg-white p-7 flex flex-col items-start gap-5 rounded-lg h-52">
          <h1 className="text-lg">ToktotPay</h1>
          <div className="flex justify-between items-end w-full h-full">
            <img width={107} src={creditCard} alt="" />
            <p className="text-xl">24000 c</p>
          </div>
        </div>
      </div>
      <div className="px-3  h-[56.5%] bg-[#E8EDF1]">
        <div className="flex gap-8">
          <img src="src\assets\Payments1.svg" alt="payment" />
          <img src="src\assets\Payments2.png" alt="payment" />
        </div>
      </div>
    </>
  );
};

export default Payments;
