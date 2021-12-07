import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './SliderBox.css'

export default class SliderBox extends React.Component {
    render() {
        var settings = {
            className: "",
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 4000,
            cssEase: "linear"
        };
        return (
            <div className='sliderBoxWrapper'>
                <Slider {...settings}>
                    <div>
                        <img src='https://store.sony.com.tw/resource/banner_img/flagship/ff8080817bca36b6017c079dede32ce3_BOT_pc_32ce30932.jpg' alt=''/>
                    </div>
                    <div>
                        <img src='https://store.sony.com.tw/resource/banner_img/flagship/ff8080817abcdc5d017af0abd825357b_A90J_pc_5357b1050.jpeg' alt=''/>
                    </div>
                    <div>
                        <img src='https://store.sony.com.tw/resource/banner_img/flagship/ff8080817b4e33dd017b51a8fbad068b_ZVE10_pc_d068b1040.jpg' alt=''/>
                    </div>
                </Slider>
            </div>
        );
      }
}