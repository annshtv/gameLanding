
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
        slidesPerView={3}
        spaceBetween={10} 
        centeredSlides={true}
        className={styles.slidesContainer}
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index} className={styles.slideWrapper}>
            <div className={styles.slideList}>
              <h1> Q{index + 2} 2025</h1>
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
  