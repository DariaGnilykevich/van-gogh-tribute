import SectionHeading from "./SectionHeading";
import BackgroundImage from "./BackgroundImg.jsx";
import { worksList } from "../constants";
import Button from "./Button.jsx";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Works() {
  const [selectedWork, setSelectedWork] = useState(worksList[0]);

  const handleSlideChange = (swiper) => {
    setSelectedWork(worksList[swiper.activeIndex]);
  };

  return (
    <>
      <section id="works">
        <BackgroundImage url={selectedWork.src}>
          <div className="backdrop-blur-md h-screen w-screen">
            <SectionHeading heading="WORKS" />
            <div className="flex flex-row flex-wrap justify-center">
              <div className="flex flex-col text-center justify-center max-w-md">
                <h3 className="text-4xl pb-6">{selectedWork.title}</h3>
                <p className="text-6xl ">- {selectedWork.year} -</p>
              </div>
              <div className="ml-14">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  onSlideChange={handleSlideChange}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {worksList.map((work) => (
                    <SwiperSlide key={work.id}>
                      <img
                        src={work.src}
                        alt={work.title}
                        className="w-full h-full object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <a
              href="https://www.vincentvangogh.org/van-gogh-paintings.jsp#"
              target="_blank"
            >
              <Button name="View all" styles="ml-20" />
            </a>
          </div>
        </BackgroundImage>
      </section>
    </>
  );
}
