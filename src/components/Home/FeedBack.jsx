import React from 'react';
import Slider from 'react-slick';
import FeedBackCard from './FeedBackCard';
import { useTranslation } from 'react-i18next';

const FeedBack = () => {
  const { t } = useTranslation(); // Инициализация i18next для перевода

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className='w-full py-24 p-4'>
      <div className='md:max-w-[1100px] m-auto max-w-[400px]'>
        <h1 className='py-4 text-3xl font-bold text-[#B35D6C]'>
          {t('feedback.title')} <span className='text-[#8E5B4D]'> {t('feedback.subTitle')}</span>
        </h1>
        <p className='text-[#6D737A] py-2'>{t('feedback.description')}</p>
        <Slider {...settings}>
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
        </Slider>
      </div>
    </section>
  );
};

export default FeedBack;
