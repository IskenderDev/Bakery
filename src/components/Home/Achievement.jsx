import React from "react";
import Achieve from "../../assets/img/chef.jpeg";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Achievement = () => {
  const { t } = useTranslation(); // Инициализация i18next для перевода

  return (
    <section className="w-full bg-white p-5">
      <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 max-w-[400px]">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="md:leading-[42px] py-2 text-3xl font-semibold">
            {t('achievement.title')}
          </h1>
          <p className="text-[#536e96] text-2xl">
            {t('achievement.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="py-6 flex">
              <div className="p-4 bg-background rounded-xl">
                <FaGraduationCap size={30} style={{ color: "#ed4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">50 +</h1>
                <p className="text-[#60737a]">{t('achievement.professionalBakers')}</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-background  rounded-xl">
                <AiFillVideoCamera size={30} style={{ color: "#ed4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">200 +</h1>
                <p className="text-[#60737a]">{t('achievement.recipeVideos')}</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-background  rounded-xl">
                <FaPeopleCarry size={30} style={{ color: "#ed4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">10,000 +</h1>
                <p className="text-[#60737a]">{t('achievement.happyClients')}</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-background  rounded-xl">
                <FaGraduationCap size={30} style={{ color: "#ed4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">500 +</h1>
                <p className="text-[#60737a]">{t('achievement.workshopParticipants')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            width={'450px'}
            src={Achieve}
            alt="achievement"
            className="md:order-last m-auto order-first"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
