import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0' />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" alt="" src="https://links.papareact.com/gi1"></img>
                </div>
                <div>
                    <img loading="lazy" alt="" src="https://links.papareact.com/6ff"></img>
                </div>
                <div>
                    <img loading="lazy" alt="" src="https://links.papareact.com/7ma"></img>
                </div>
            </Carousel>
        </div>
    )
}
