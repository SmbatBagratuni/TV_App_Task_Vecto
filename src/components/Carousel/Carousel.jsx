import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel} from "swiper/modules";
import 'swiper/css';
import styles from "./carousel.module.scss"
const Carousel = ({setFeaturedData, tendingNow, onPlayVideo}) => {
    return (
            <div className={styles.container} >
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={"auto"}
                            mousewheel={{forceToAxis: true}}
                            modules={[Mousewheel]}
                        >
                            {
                                tendingNow.map((el, i) => {
                                    return (
                                        <SwiperSlide className={styles.swiperSlide}  key={i}>
                                            <div className={styles.imgWrapper}
                                                 onClick={() => {
                                                setFeaturedData(el)
                                                sessionStorage.setItem("lastSelectedFilm", el.Id)
                                                onPlayVideo()
                                            }}>
                                                <img className={styles.image} src={process.env.PUBLIC_URL + el?.CoverImage} alt={'Design'}/>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
            </div>
    );
}
export default Carousel;
