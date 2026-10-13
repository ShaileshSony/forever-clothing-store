import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets.js";
import NewsLetterBox from '../components/NewsLetterBox.jsx'

const About = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-8 border-t border-gray-400 ">
        <Title text_1={"About"} text_2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt="image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to Forever Clothing Store, your one-stop destination for stylish, comfortable, and affordable fashion. We offer a wide range of clothing for men, women, and kids, designed to suit every age, style, and occasion. Our goal is to make fashion accessible to everyone.</p>
          <p>At Forever Clothing Store, we believe that fashion is more than just clothing; it is a way to express your personality. We focus on quality, comfort, and the latest trends to provide a smooth and enjoyable shopping experience for every customer.</p>
          <div>
            <b className="text-gray-800 text-lg ">Our Mission</b>
            <p>Our mission is to make fashion accessible, affordable, and enjoyable for everyone. We aim to offer quality clothing for men, women, and kids while keeping up with the latest trends and ensuring customer satisfaction through a convenient and reliable shopping experience.</p>
          </div>
        </div>
      </div>

      <div className="text-2xl py-4">
        <Title text_1={'Why'} text_2={'Choose Us'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border border-gray-300 px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5 ">
          <b className="text-gray-800 text-lg ">Quality Assurance</b>
          <p className="text-gray-600">We are committed to providing quality clothing that combines comfort, durability, and style, ensuring every product meets our standards and delivers a satisfying shopping experience.</p>
        </div>
        <div className="border md:border-l-0 md:border-r-0 border-gray-300 px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5 ">
          <b className="text-gray-800 text-lg ">Convenience</b>
          <p className="text-gray-600">We make shopping simple and convenient with an easy-to-use website, seamless browsing, and a hassle-free experience, helping you find your favorite styles anytime, anywhere.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5 ">
          <b className="text-gray-800 text-lg ">Exceptional Customer Service</b>
          <p className="text-gray-600">We are dedicated to providing exceptional customer service by addressing your needs, resolving queries promptly, and ensuring a smooth, friendly, and satisfying shopping experience.</p>
        </div>
      </div>

      <NewsLetterBox/>


    </div>
  );
};

export default About;
