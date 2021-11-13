import React, {useState} from 'react'
import {SliderData} from './SliderData';
import Carousel from 'react-bootstrap/Carousel';

const ImageSlider = () => {
    
    return (
        <>
            {
                SliderData.map((slide,index) => {
                    return (
                        <div>
                        {/* <h1 className="reviews-h1">Reviews</h1> */}
                        <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block w-50"
                                src={slide.image}
                                alt=''
                              />
                           
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </div>
                    )
                })
            }
        </>
    )
}

export default ImageSlider