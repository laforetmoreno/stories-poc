import React, { Component } from 'react';
import Slider from 'react-slick';

import image from './images/image.png';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div
        style={{
          marginBottom: '25px',
          width: 'calc(100% + 20px)',
          marginLeft: '-20px',
          marginTop: '10px',
        }}
      >
        <Slider {...settings}>
          {/* <div style={styles} className="image-back" />
          <div
            // style={styles}
            // style={{
            //   background: 'red',
            //   backgroundImage:
            //     'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            // }}
            className="image-back"
          /> */}
          {/* <BackgroundSlider
            className="image-back"
            images={[image]}
            duration={10}
            transition={2}
          /> */}
          {/* <div
            style={{
              background: 'red',
              backgroundImage:
                'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            }}
            className="image-back"
          /> */}
          <img className="image-teste" alt="" src={image} />
          <img className="image-teste" alt="" src={image1} />
          <img className="image-teste" alt="" src={image2} />
        </Slider>
      </div>
    );
  }
}
