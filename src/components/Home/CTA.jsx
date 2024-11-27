import React from "react";
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation(); // Инициализация i18next для перевода

  return (
    <section className="w-full py-24 p-4 items-center">
      <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px]">
        <img src="src/assets/img/chefTeam.jpeg" alt="hero" className="w-[500px] mx-auto" />
        <div className="flex flex-col justify-start gap-4">
          <div>
            <h1 className="md:leading-[42px] py-8 md:text-3xl text-lg font-semibold text-[#B35D6C]">
              {t('cta.title')} <span className="text-[#8E5B4D]">{t('cta.highlight')}</span> {t('cta.subtitle')}
            </h1>
            <p className="py-2 text-lg text-[#6D737A]">
              {t('cta.description')}
            </p>
            <button className="max-[780px]:w-full px-8 text-white py-3 bg-[#B35D6C] hover:bg-[#8E5B4D]">
              {t('cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
