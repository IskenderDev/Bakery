import React from "react";
import { useTranslation } from "react-i18next";
import aboutImage from "../../assets/img/aboutImg.webp";
import teamImage from "../../assets/img/team.webp";
import qualityImage from "../../assets/img/coking.webp";

const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#FFF8F3] py-24 p-4">
      <div className="md:max-w-[1100px] m-auto max-w-[400px]">
        <h1 className="text-3xl font-bold text-center">{t("mainInfo.title")}</h1>
        <p className="text-lg text-center text-gray-600 mt-4">{t("mainInfo.description")}</p>

        {/* Миссия */}
        <div className="mt-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 rounded-lg">
            <img
              src={aboutImage}
              alt={t("mainInfo.aboutImageAlt")}
              className="w-4/5 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-[#B35D6C]">
              {t("mainInfo.mission.title")}
            </h2>
            <p className="text-gray-600 mt-4">{t("mainInfo.mission.description")}</p>
          </div>
        </div>

        {/* Команда */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-[#B35D6C]">
              {t("mainInfo.team.title")}
            </h2>
            <p className="text-gray-600 mt-4">{t("mainInfo.team.description")}</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={teamImage}
              alt={t("mainInfo.teamImageAlt")}
              className="w-4/5 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Качество */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={qualityImage}
              alt={t("mainInfo.qualityImageAlt")}
              className="w-4/5 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-[#B35D6C]">
              {t("mainInfo.quality.title")}
            </h2>
            <p className="text-gray-600 mt-4">{t("mainInfo.quality.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
