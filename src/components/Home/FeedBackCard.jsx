import React from 'react';
import avatar from '../../assets/avatar.png';
import { useTranslation } from 'react-i18next';

const FeedBackCard = () => {
  const { t } = useTranslation(); // Инициализация i18next для перевода

  return (
    <div className='bg-white p-8 border shadow-sm my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img src={avatar} alt="feedback" />
          <div>
            <h1 className='text-[#8C3A46]'>{t('feedback.name')}</h1>
            <p className='text-[#6D737A]'>{t('feedback.subtitle')}</p>
          </div>
        </div>
      </div>
      <div className='py-8'>
        <h3 className='text-lg text-[#6D737A]'>
          {t('feedback.text')}
        </h3>
      </div>
    </div>
  );
};

export default FeedBackCard;
