import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/img/logo.png';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation для перевода

const Footer = () => {
  const { t } = useTranslation(); // Используем хук для перевода

  return (
    <section className="w-full bg-[#FFF8F3] py-24 p-4">
      <div className="md:max-w-[1100px] m-auto max-w-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <img src={Logo} alt="logo-footer" className="h-44 mb-4" />
            <h3 className="font-bold text-2xl mt-10">{t('footer.contact_us')}</h3>
            <h3 className="py-2 text-[#60737a]">{t('footer.phone')}: 647 68658 86658</h3>
            <h3 className="py-2 text-[#60737a]">{t('footer.best_products')}</h3>
            <h3 className="py-2 text-[#363a3d]">{t('footer.email')}: example@gmail.com</h3>

            <div className="flex gap-4 py-4 justify-center md:justify-start">
              <div className="p-4 rounded-xl bg-[#F3CADB] cursor-pointer">
                <FaFacebook size={25} />
              </div>
              <div className="p-4 rounded-xl bg-[#F3CADB] cursor-pointer">
                <FaTwitter size={25} />
              </div>
              <div className="p-4 rounded-xl bg-[#F3CADB] cursor-pointer">
                <FaLinkedin size={25} />
              </div>
              <div className="p-4 rounded-xl bg-[#F3CADB] cursor-pointer">
                <FaYoutube size={25} />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-2xl mt-10">{t('footer.explore')}</h3>
            <ul className="py-3 text-[#60737a]">
              <li className="py-2">{t('footer.home')}</li>
              <li className="py-2">{t('footer.about')}</li>
              <li className="py-2">{t('footer.menu')}</li>
              <li className="py-2">{t('footer.contact')}</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-2xl mt-10">{t('footer.categories')}</h3>
            <ul className="py-3 text-[#60737a]">
              <li className="py-2">{t('footer.cakes')}</li>
              <li className="py-2">{t('footer.cookies')}</li>
              <li className="py-2">{t('footer.cupcakes')}</li>
              <li className="py-2">{t('footer.candies')}</li>
              <li className="py-2">{t('footer.drinks')}</li>
              <li className="py-2">{t('footer.sweets')}</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-2xl mt-10">{t('footer.subscribe')}</h3>
            <h3 className="py-2 text-[#60737a]">{t('footer.subscribe_info')}</h3>
            <form className="input-box-shadow flex justify-between items-center bg-transparent gap-2">
              <input
                type="text"
                className="my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500"
                placeholder={t('footer.enter_email')}
              />
              <button className="my-2 px-5 py-3 bg-[#B35D6C] text-white">
                {t('footer.subscribe_button')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
