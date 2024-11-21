import React from "react";

const Header = () => {
  const username = localStorage.getItem("username");

  return (
    <div className={`min-h-[60px] transition-transform duration-300`}>
      <header className="bg-primary text-white p-4 fixed w-full z-10">
        <nav className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-user"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
            <h2 className="text-sm ">{username}</h2>
          </div>
          <img className="w-" width={100} src="src\assets\Logo.svg" alt="" />
        </nav>
      </header>
    </div>
  );
};

export default Header;
