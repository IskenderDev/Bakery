import React from "react";
import heroImg from "../../assets/img/mainImg.jpeg"; // Замените на изображение, связанное с кондитерскими изделиями
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation(); // Инициализация i18next

  return (
    <section className="w-full bg-background py-24 p-4">
      <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px]">
        <div className="flex flex-col justify-center gap-4 mr-14">
          <p className="py-2 text-4xl text-primary font-bold">
            {t("hero.sweetSuccess")}
          </p>
          <h1 className="md:leading-[42px] py-2 md:text-3xl text-lg font-semibold">
            {t("hero.enjoy")}: <span className="text-primary">1000</span> {t("hero.types")}
            {t("hero.from")}{" "}
            <span className="text-primary">{t("hero.bakers")}</span>{" "}
            {t("hero.and")} {t("hero.confectioneries")}
          </h1>
          <p className="py-2 text-lg text-gray-900">
            {t("hero.discover")} {t("hero.sweetMoments")}
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="hero"
            className="md:order-last order-first rounded-lg shadow-lg w-full md:w-4/5 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
