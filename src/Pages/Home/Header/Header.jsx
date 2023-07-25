import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import slider1 from '../../../assets/header/slide1.jpg'
import slider2 from '../../../assets/header/slide2.jpg'
import slider3 from '../../../assets/header/slide3.jpg'
import slider4 from '../../../assets/header/slide4.jpg'
import './header.css';

const Header = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div >
            <Swiper className='header'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={slider1} alt=""/>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                            <div className="bg-black bg-opacity-50 text-white p-4 text-center">
                                <h2 className="text-3xl md:text-5xl py-5 font-bold">Find Your Home where you get peace.</h2>
                                <p className="md:text-lg">We are committed to giving you the best service. So, Don't Worry.</p>
                                <div className='mt-8 flex justify-center gap-5 pb-8 md:pb-0'>
                                    <button className="btn btn-outline btn-warning">Know More</button>
                                    <button className="btn btn-outline btn-warning">About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slider2} alt=""/>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                            <div className="bg-black bg-opacity-70 text-white p-4 text-center">
                                <h2 className="text-3xl md:text-5xl py-5 font-bold">Search your home with affordable price</h2>
                                <p className="md:text-lg">We are committed to giving you the best service. So, Don't Worry.</p>
                                <div className='mt-8 flex justify-center gap-5 pb-8 md:pb-0'>
                                    <button className="btn btn-outline btn-warning">Know More</button>
                                    <button className="btn btn-outline btn-warning">About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slider3} alt="" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                            <div className="bg-black bg-opacity-50 text-white p-4 text-center">
                                <h2 className="text-3xl md:text-5xl py-5 font-bold">Easily find your home without effort</h2>
                                <p className="md:text-lg">We are committed to giving you the best service. So, Don't Worry.</p>
                                <div className='mt-8 flex justify-center gap-5 pb-8 md:pb-0'>
                                    <button className="btn btn-outline btn-warning">Know More</button>
                                    <button className="btn btn-outline btn-warning">About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slider4} alt=""/>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                            <div className="bg-black bg-opacity-50 text-white p-4 text-center">
                                <h2 className="text-3xl md:text-5xl py-5 font-bold">Find Your Home where you get peace.</h2>
                                <p className="md:text-lg">We are committed to giving you the best service. So, Don't Worry.</p>
                                <div className='mt-8 flex justify-center gap-5 pb-8 md:pb-0'>
                                    <button className="btn btn-outline btn-warning">Know More</button>
                                    <button className="btn btn-outline btn-warning">About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Header;