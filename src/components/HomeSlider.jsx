import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "App.css"
import "swiper/css";
import "swiper/css/free-mode";
export default function HomeSlider({ slidesElement }) {
  return (
    <div className="container">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
      >
        <SwiperSlide>
          <h1>Slide 1</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 2</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 3</h1>
        </SwiperSlide>
      </Swiper>
    </div>
    // <Swiper
    //   className="section__in"
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={50}
    //   slidesPerView={1}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log("slide change")}
    // >
    //   {slidesElement.map((slide) => {
    //     <>
    //       <SwiperSlide className="slideOne" key={slide.image}>
    //         {" "}
    //         <img src={slide.image} alt="" />
    //         <h2 className="titleCard">{slide.title}</h2>
    //         <p className="descriptionCard">{slide.description}</p>
    //         <button className="btnWatch">Watch</button>
    //       </SwiperSlide>
    //     </>;
    //   })}
    //   {/* <SwiperSlide className="slideOne">
    //     {" "}
    //     <div className="imgIn"></div>
    //     <h2 className="titleCard">Project Name</h2>
    //     <p className="descriptionCard">html, css, js</p>
    //     <button className="btnWatch">Watch</button>
    //   </SwiperSlide> */}
    //   ...
    // </Swiper>
  );
}
