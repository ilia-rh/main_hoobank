import React, { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-start">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer font-normal text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`} className="">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px]"
          onClick={() => setToggle((prevState) => !prevState)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 w-[140px] rounded-lg sidebar`}
        >
          <ul className="flex flex-col flex-1 justify-end items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer font-normal text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-5"
                }`}
              >
                <a href={`#${nav.id}`} className="">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
