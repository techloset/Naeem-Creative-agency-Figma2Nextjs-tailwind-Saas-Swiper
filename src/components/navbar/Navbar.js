import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assests/images/logo.png";
import menuIcon from "../../assests/images/menu-bar.png";
import crossIcon from "../../assests/images/close-menu.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("");
  const activeHandlar = (activeKey) => {
    setActive(activeKey);
    setOpenMenu(false);
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="keywords" content="creative agency, web app" />
        <meta
          name="description"
          content="we provide sevices to grow your bussiness"
        />
      </Head>

      <div
        className={`bg-center ${
          openMenu ? styles.bgNavbar : null
        }`}
      >
        <nav
          className={`container p-4 mx-auto flex flex-col md:flex-row justify-between items-center ${
            !openMenu ? "h-20" : "h-screen"
          } md:h-32`}
        >
          <div
            className={`flex w-full md:max-w-fit justify-between items-center ${
              openMenu ? "border-b-2" : "border-none"
            } border-black/25 dark:border-white pb-4 md:border-none `}
          >
            <div className="p-3 mt-1 md:mt-4 bg-exact-purple rounded-lg shadow-[-5px_10px_30px_rgba(76,64,247,0.5)]">
              <Image src={logo} alt="Logo" width={20} height={20} />
            </div>

            <div
              onClick={() => setOpenMenu(openMenu === false ? true : false)}
              className="md:hidden"
            >
              <Image
                src={!openMenu ? menuIcon : crossIcon}
                className="filter dark:invert"
                alt="mobileMenu"
                width={40}
                height={40}
              />
            </div>
          </div>
          <ul
            className={`flex flex-col items-center md:space-x-20 space-y-10 ${
              !openMenu ? "invisible md:visible" : "visible"
            } md:space-y-0 mt-10 md:mt-0 h-screen md:h-auto md:flex-row`}
          >
            <li
              onClick={() => activeHandlar("/")}
              className={`${
                active === "" || active === "/"
                  ? "text-exact-purple dark:text-exact-yellow"
                  : "text-exact-gray dark:text-white"
              } text-xl  hover:text-exact-purple  dark:hover:text-exact-yellow`}
            >
              <Link href="/"> Home</Link>
            </li>
            <li
              onClick={() => activeHandlar("/work")}
              className={`${
                active === "/work"
                  ? "text-exact-purple dark:text-exact-yellow"
                  : "text-exact-gray dark:text-white"
              } text-xl  hover:text-exact-purple  dark:hover:text-exact-yellow`}
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={() => activeHandlar("/about")}
              className={`${
                active === "/about"
                  ? "text-exact-purple dark:text-exact-yellow"
                  : "text-exact-gray dark:text-white"
              } text-xl  hover:text-exact-purple  dark:hover:text-exact-yellow`}
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
          <button
            className={`text-base w-full ${
              !openMenu ? "invisible md:visible" : "visible"
            } md:max-w-fit py-5 px-9 bg-exact-purple rounded-lg text-white`}
          >
            Contact us
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;