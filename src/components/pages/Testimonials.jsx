import React from 'react'
import { testimonials } from '../data/dummydata'
import { FormatQuote } from '@mui/icons-material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Heading } from '../common/Heading';

export const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className="testimonials hero">
                <div className="container">
                <Heading title='Testimonials' />
                    <Slider {...settings}>
                        {testimonials.map((val, i) => (
                            <div className="box" key={i}>
                                <i data-aos='zoom-out-up'>
                                    <FormatQuote />
                                    <p data-aos='zoom-out-down'>{val.text}</p>
                                    <div className="img">
                                        <img src={val.image} alt='' data-aos='zoom-out-right' />
                                    </div>
                                    <h3 data-aos='zoom-out-left'>{val.name}</h3>
                                    <label data-aos='zoom-out'>{val.post}</label>
                                </i>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}
