import React from "react";

const Support = () => {
  return (
    <>
      <div className="p-8 bg-[#E8EDF1]">
        <div className="text-md h-[150px] shadow-lg bg-white p-7 flex flex-col items-start gap-5 rounded-lg text-center font-bold">
          <p>
            Если у вас возникли технические проблемы и вам нужна помощ, то мы
            рады вам помочь
          </p>
        </div>
      </div>
      <div className="p-8 bg-[#E8EDF1] h-[77%]">
        <div className="h-[115px] shadow-lg bg-white p-7 flex items-center justify-between gap-5 rounded-lg h">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1746A2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <div className="flex flex-col">
            <p className="text-lg text-primary">+996 501 255 811</p>
          </div>
        </div>
      </div>
      <div className="p-8 bg-[#E8EDF1] h-[77%]">
        <div className="h-[115px] shadow-lg bg-white p-7 flex items-center justify-between gap-5 rounded-lg h">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          <div className="flex flex-col">
            <p className="text-lg text-primary">+996 555 555 555</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
