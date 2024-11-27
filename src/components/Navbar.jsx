import React, { useState } from "react";
import { Link } from "react-router-dom"; // Импортируем Link для навигации
import Logo from "../assets/img/logo.png"; // Логотип кондитерской
import Hamburger from "../assets/hamburgerMenu.svg";
import Close from "../assets/close.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation для перевода

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation(); // Используем хук для перевода

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Изменяем язык
  };

  return (
    <div className="w-full h-[96px] bg-background shadow-md">
      <div className="p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-36 cursor-pointer" />
        </Link>
        <div className="flex items-center">
          <ul className="hidden md:flex gap-6 text-primary font-medium">
            <li>
              <Link to="/" className="hover:text-primary-light cursor-pointer">
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary-light cursor-pointer"
              >
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-primary-light cursor-pointer"
              >
                {t("navbar.menu")}
              </Link>
            </li>
          </ul>
        </div>{" "}
        <div className="md:flex hidden">
          <div className="flex justify-center mt-4 md:mt-0">
            <button
              onClick={() => handleLanguageChange("ru")}
              className="text-primary hover:text-primary-light py-2 px-4 md:px-6 rounded-lg transition-all duration-200"
            >
              RU
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className="text-primary hover:text-primary-light py-2 px-4 md:px-6 rounded-lg transition-all duration-200"
            >
              EN
            </button>
          </div>

          <button className="py-3 flex justify-center items-center bg-transparent px-6 gap-2 text-primary border border-primary hover:bg-primary-light hover:text-white rounded-lg">
            {t("navbar.order")}
          </button>
        </div>
        <motion.div
          whileTap={{ scale: 0.6 }}
          className="md:hidden cursor-pointer"
          onClick={handleToggle}
        >
          <img src={toggle ? Close : Hamburger} alt="hamburger" />
        </motion.div>
      </div>

      <div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className={
            toggle
              ? "absolute z-10 p-4 bg-background w-full px-8 md:hidden text-primary font-medium"
              : "hidden"
          }
        >
          <li className="p-4 hover:bg-primary-light hover:text-white">
            <Link to="/">{t("navbar.home")}</Link>
          </li>
          <li className="p-4 hover:bg-primary-light hover:text-white">
            <Link to="/about">{t("navbar.about")}</Link>
          </li>
          <li className="p-4 hover:bg-primary-light hover:text-white">
            <Link to="/menu">{t("navbar.menu")}</Link>
          </li>
          <div className="flex justify-center gap-6 mt-4 md:mt-0">
            <button
              onClick={() => handleLanguageChange("ru")}
              className="text-primary hover:text-primary-light py-2 px-4 md:px-6 rounded-lg transition-all duration-200"
            >
              RU
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className="text-primary hover:text-primary-light py-2 px-4 md:px-6 rounded-lg transition-all duration-200"
            >
              EN
            </button>
          </div>
          <div className="flex flex-col my-4 gap-4">
            <button className="flex border border-primary justify-center items-center bg-transparent px-6 gap-2 py-4 text-primary hover:bg-primary-light hover:text-white rounded-lg">
              {t("navbar.order")}
            </button>
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
