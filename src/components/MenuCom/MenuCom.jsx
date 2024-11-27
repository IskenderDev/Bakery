import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import menuData from "../../data/menuData.json";

const MenuCom = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { t, i18n } = useTranslation(); // Используем i18n для получения текущего языка

  useEffect(() => {
    // Загружаем данные меню для текущего языка
    const currentLanguage = i18n.language || "ru"; // Дефолтный язык - русский
    setMenuItems(menuData.menu[currentLanguage]);
  }, [i18n.language]); // Обновляем меню при смене языка

  return (
    <section className="w-full bg-[#FFF8F3] py-24 p-4">
      <div className="md:max-w-[1100px] m-auto max-w-[400px]">
        <h1 className="text-3xl font-bold text-center">{t("menu.title")}</h1>

        <div className="mt-12 grid gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#B35D6C]">
                  {item.name}
                </h3>
                <p className="text-gray-800 font-bold">{item.price}</p>
              </div>
              <p className="text-gray-600 mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCom;
