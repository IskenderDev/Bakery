import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/Home/HeroSection";
import Courses from "../../components/Home/Courses";
import Achievement from "../../components/Home/Achievement";
import Categories from "../../components/Home/Categories";
import FeedBack from './../../components/Home/FeedBack';
import CTA from "../../components/Home/CTA";
import Footer from './../../components/Footer';




const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Courses />
      <Achievement />
      <Categories />
      <FeedBack />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
