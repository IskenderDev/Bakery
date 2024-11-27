import React from 'react';
import CategoryCard from './CategoryCard';
import { FaBirthdayCake, FaIceCream, FaCookie, FaCandyCane, FaAppleAlt, FaPizzaSlice } from 'react-icons/fa';
import { GiCupcake, GiDonut } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const Categories = () => {
  const { t } = useTranslation(); // Инициализация i18next для перевода

  return (
    <section className='w-full bg-[#FFF8F3] p-5'>
      <div className='md:max-w-[1100px] m-auto max-w-[400px]'>
        <h1 className='md:leading-[72px] text-3xl font-bold text-[#B35D6C]'>
          {t('categories.title')} <span className='text-[#8E5B4D]'> {t('categories.subTitle')}</span>
        </h1>
        <p className="text-lg text-[#8C3A46]">
          {t('categories.description')}
        </p>
        <div className='grid md:grid-cols-3 py-12 gap-4'>
          <CategoryCard icon={<FaBirthdayCake size={30}/>} title={t('categories.cake')} />
          <CategoryCard icon={<FaIceCream size={30}/>} title={t('categories.iceCream')} />
          <CategoryCard icon={<FaCookie size={30}/>} title={t('categories.cookie')} />
          <CategoryCard icon={<FaCandyCane size={30}/>} title={t('categories.candy')} />
          <CategoryCard icon={<FaAppleAlt size={30}/>} title={t('categories.fruits')} />
          <CategoryCard icon={<FaPizzaSlice size={30}/>} title={t('categories.pizza')} />
          <CategoryCard icon={<GiCupcake size={30}/>} title={t('categories.cupcake')} />
          <CategoryCard icon={<GiDonut size={30}/>} title={t('categories.donut')} />
        </div>
      </div>
    </section>
  );
}

export default Categories;
