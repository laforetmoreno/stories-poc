import React, { Component } from 'react';
import Slider from 'react-slick';

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
          <img
            alt=""
            src="https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg"
          />
          <img
            alt=""
            src="https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg"
          />
          <img
            alt=""
            src="https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg"
          />
        </Slider>
      </div>
    );
  }
}
