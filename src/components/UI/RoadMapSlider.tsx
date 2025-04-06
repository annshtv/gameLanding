import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/navigation.css";
import styles from "./RoadmapSlider.module.css";
import '../../index.css'

const RoadmapSlider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        centeredSlides={true}
        slidesPerView={1} 
        spaceBetween={10}
        className={styles.slidesContainer}
        breakpoints={{
          350: {
            slidesPerView: 1,
            centeredSlides: true
          },
          768: {
            slidesPerView: 3,
            centeredSlides: true
          },
          
          1024: {
            slidesPerView: 3,
            centeredSlides: true
          }
        }}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className={styles.slideWrapper}>
            <div className={styles.slideList}>
              <h1> Q{index + 1} 2025</h1>
              <ul>
                <li><div className={styles.checkbox}></div> <span>Feature {index + 1}</span></li>
                <li><div className={styles.checkbox}></div> <span>Another Feature</span></li>
                <li><div className={styles.checkbox}></div> <span>More updates</span></li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RoadmapSlider;