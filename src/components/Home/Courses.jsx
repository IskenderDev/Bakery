import React from 'react';
import { courses } from '../../data/courses';
import Slider from 'react-slick';
import CourseCard from './CourseCard';
import { useTranslation } from 'react-i18next';

const Courses = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
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
    <section className="w-full bg-white py-24 p-4">
      <div className="md:max-w-[1100px] m-auto max-w-[400px]">
        <h1 className="py-4 text-3xl font-bold">
          {t('courses.title')} <span className="text-primary">{t('courses.delicacies')}</span>
        </h1>
        <p className="text-[#6D737A] py-3">{t('courses.description')}</p>
      </div>
      <div className="md:max-w-[1100px] m-auto max-w-[400px] gap-5">
        <Slider {...settings} className="px-5">
          {courses &&
            courses.map((course) => (
              <CourseCard
                key={course.id}
                title={t(`courses.${course.id}.title`)} // Fetching course title dynamically
                category={course.category}
                rating={course.rating}
                price={course.price}
                linkImg={course.linkImg}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
