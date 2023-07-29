import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            SetActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            Tim DeHof &nbsp;<span className="hidden sm:block">| Developer</span>
          </p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map(({ id, title }) => {
            return (
              <li
                key={id}
                className={`${
                  active === title ? "text-white" : "text-secondary"
                } cursor-pointer text-[18px] font-medium hover:text-white`}
                onClick={() => setActive(title)}
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient min absolute right-0 top-20 z-10 mx-4 my-2 w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map(({ id, title }) => {
                return (
                  <li
                    key={id}
                    className={`${
                      active === title ? "text-white" : "text-secondary"
                    } font-poppins cursor-pointer text-[16px] font-medium`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(title);
                    }}
                  >
                    <a href={`#${id}`}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
