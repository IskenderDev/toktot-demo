import React from "react";
import creditCard from "../../assets/CreditCard.svg"

const Account = () => {
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="p-8 bg-[#E8EDF1]">
        <div className="h-[115px] shadow-lg bg-white p-7 flex items-center gap-5 rounded-lg">
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
                <h2 className="text-sm ">{username}</h2>
                <p className="text-xs text-gray-500">+996 *** *** *11</p>
            </div>
        </div>
      </div>
      <div className="p-8 bg-[#E8EDF1]">
        <div className="h-[150px] shadow-lg bg-white p-7 flex flex-col items-start gap-5 rounded-lg">
                <h1 className="text-lg">ToktotPay</h1>
            <div className="flex justify-between items-end w-full h-full">
                <img src={creditCard}  alt="" />
                <p className="text-xl">24000 c</p>
            </div>
        </div>
      </div>
      <div className="p-8 bg-[#E8EDF1] h-[55%]">
        <div className="h-[150px] shadow-lg bg-white p-7 flex flex-col items-start gap-5 rounded-lg">
                <h1 className="text-lg">Мое Авто</h1>
            <ul className="flex flex-col justify-between">
                <li className="mb-2">Tesla M3 01KG 777 AUF</li>
                <li>BMW X7 01KG 070 WOW</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Account;
