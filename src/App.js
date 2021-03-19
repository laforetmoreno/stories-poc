import React, { useState } from 'react';

import Stories from 'react-insta-stories';
import Rating from 'react-rating';
import SimpleSlider from './BannerSlider';

import closeIcon from './icons/close.svg';
import starIcon from './icons/star.svg';
import like from './icons/like.svg';
import feed from './icons/feed.svg';

import './App.scss';
// import './SliderBanner.scss';

const DURATION = 5000;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const images = [
  'https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg',
  'https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg',
];

const Content = ({
  description = 'Frango tava ótimo, chegou na hora. Não vejo a hora de pedir mais!',
  onClose,
  id,
  name,
  avatar,
  createdAt,
  image,
}) => {
  return (
    <div key={id} className="container">
      <div className="header">
        <div className="profile-infos">
          <img className="header__image" src={avatar} alt="" />
          <h1>{name}</h1>
          <h2>{createdAt}</h2>
        </div>
        <button onClick={onClose} className="close">
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <img className="container__image" src={image} alt="" />
      <p style={{ fontWeight: 100 }}>{description}</p>
      <div className="icon-container">
        <Rating
          readonly
          fullSymbol={<img alt="" src={starIcon} className="icon" />}
          initialRating={5}
        />
      </div>
      <button
        className="goto"
        onClick={() =>
          (window.location.href =
            'https://www.ifood.com.br/delivery/teresopolis-rj/number-one-chicken--varzea/874d756e-5a8b-4a1e-8a63-97cfa96099d7?prato=532516686')
        }
      >
        Ver prato
      </button>
    </div>
  );
};

const StoriesProvider = ({ stories, currentIndex }) => {
  return (
    <Stories
      stories={stories}
      width={window.innerWidth}
      height={window.innerHeight}
      currentIndex={currentIndex}
      keyboardNavigation
    />
  );
};

const App = () => {
  const [showStories, setShowStories] = useState(false);

  const makeStories = () => {
    const array = [
      {
        id: 1,
        image:
          'https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202006181450_BgN3_1.jpg',
        avatar:
          'https://avatars.githubusercontent.com/u/34448877?s=460&u=512ec647b404aae6d6030f384bf726559f15a8e2&v=4',
        name: 'Moreno Andrade',
        createdAt: '6h',
        description:
          'Frango tava ótimo, chegou na hora. Não vejo a hora de pedir mais!',
        duration: DURATION,
      },
      {
        id: 2,
        image:
          'https://static-images.ifood.com.br/image/upload/t_high/pratos/c2ffd904-61e2-4f72-8456-f4d2dcdf699b/201807281357_44209999.jpg',
        avatar:
          'https://avatars.githubusercontent.com/u/34448877?s=460&u=512ec647b404aae6d6030f384bf726559f15a8e2&v=4',
        name: 'Moreno Andrade',
        createdAt: '7h',
        description: 'Cara, que comida boa.',
        duration: DURATION,
      },
      {
        id: 3,
        image:
          'https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg',
        avatar:
          'https://avatars.githubusercontent.com/u/34448877?s=460&u=512ec647b404aae6d6030f384bf726559f15a8e2&v=4',
        name: 'Moreno Andrade',
        createdAt: '8h',
        description: 'Inacreditável como esse ifood é bom, sempre peço!',
        duration: DURATION,
      },
      {
        id: 4,
        image:
          'https://static-images.ifood.com.br/image/upload/t_high/pratos/1a003463-20d8-4744-841a-6ac212a66c4b/202101231852_qx5b_f.png',
        avatar:
          'https://avatars.githubusercontent.com/u/34448877?s=460&u=512ec647b404aae6d6030f384bf726559f15a8e2&v=4',
        name: 'Moreno Andrade',
        createdAt: '9h',
        description: 'Não consigo parar de comer.',
        duration: DURATION,
      },
    ];

    return {
      stories: array.map(x => {
        return {
          content: props => {
            return (
              <Content
                onClose={() => setShowStories(false)}
                id={x.id}
                name={x.name}
                avatar={x.avatar}
                createdAt={x.createdAt}
                image={x.image}
                description={x.description}
              />
            );
          },
          duration: x.duration,
        };
      }),
      feed: array,
    };
  };

  return (
    <div className="wrapper">
      <div className="feed-header">
        <h1 className="title">Veja os pratos mais amados pelas pessoas</h1>
        {!showStories && (
          <button onClick={() => setShowStories(true)}>
            <img src={feed} alt="" />
          </button>
        )}
        {showStories && (
          <div className="story">
            <StoriesProvider stories={makeStories().stories} />
          </div>
        )}
      </div>
      <h3 className="subtitle">
        A opinião dos outros clientes que pediram na sua região!
      </h3>

      <div className="feed">
        <div className="header">
          <div className="profile-infos">
            <img
              className="header__image"
              src="https://avatars.githubusercontent.com/u/34448877?s=460&u=512ec647b404aae6d6030f384bf726559f15a8e2&v=4"
              alt=""
            />
            <span>
              <strong>Daniel</strong> recomenda o restaurante
              <strong> Habib's</strong>
              <div>13 de Jun</div>
            </span>
          </div>
        </div>
        {/* <img
          className="image"
          alt=""
          src="https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg"
        /> */}
        <div
          style={{
            backgroundImage:
              'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
          }}
          className="image"
        />
        <p className="review">
          Prato perfeito, amei muito, mas a entrega é demorada...
        </p>
        <div className="actions">
          <div className="like-container">
            <img className="like" src={like} alt="" /> <span>6</span>
          </div>
          <button>Ver prato</button>
        </div>
      </div>

      <div className="feed">
        <div className="header">
          <div className="profile-infos">
            <img
              className="header__image"
              src="https://avatars.githubusercontent.com/u/34448877?s=460&u=512ec647b404aae6d6030f384bf726559f15a8e2&v=4"
              alt=""
            />
            <span>
              <strong>Daniel</strong> recomenda o restaurante
              <strong> Habib's</strong>
              <div>13 de Jun</div>
            </span>
          </div>
        </div>
        <SimpleSlider />
        <p className="review">
          Prato perfeito, amei muito, mas a entrega é demorada...
        </p>
        <div className="actions">
          <div className="like-container">
            <img className="like" src={like} alt="" /> <span>6</span>
          </div>
          <button>Ver prato</button>
        </div>
      </div>

      <div className="feed">
        <div className="header">
          <div className="profile-infos">
            <img
              className="header__image"
              src="https://avatars.githubusercontent.com/u/34448877?s=460&u=512ec647b404aae6d6030f384bf726559f15a8e2&v=4"
              alt=""
            />
            <span>
              <strong>Daniel</strong> recomenda o restaurante
              <strong> Habib's</strong>
              <div>13 de Jun</div>
            </span>
          </div>
        </div>
        <div className="image-container">
          <div
            style={{
              backgroundImage:
                'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            }}
            className="left"
          />
          <div className="rigth">
            <div
              style={{
                backgroundImage:
                  'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
              }}
              className="rigth-image"
            />
            <div
              style={{
                backgroundImage:
                  'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
              }}
              className="rigth-image"
            />
          </div>
        </div>

        <p className="review">
          Prato perfeito, amei muito, mas a entrega é demorada...
        </p>
        <div className="actions">
          <div className="like-container">
            <img className="like" src={like} alt="" /> <span>6</span>
          </div>
          <button>Ver prato</button>
        </div>
      </div>

      <div className="feed">
        <div className="header">
          <div className="profile-infos">
            <img
              className="header__image"
              src="https://avatars.githubusercontent.com/u/34448877?s=460&u=512ec647b404aae6d6030f384bf726559f15a8e2&v=4"
              alt=""
            />
            <span>
              <strong>Daniel</strong> recomenda o restaurante
              <strong> Habib's</strong>
              <div>13 de Jun</div>
            </span>
          </div>
        </div>
        {/* <img
          className="image"
          alt=""
          src="https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg"
        /> */}
        <div className="carousel-container">
          <div
            style={{
              backgroundImage:
                'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            }}
            className="carousel"
          />
          <div
            style={{
              backgroundImage:
                'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            }}
            className="carousel"
          />
          <div
            style={{
              backgroundImage:
                'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            }}
            className="carousel"
          />
          <div
            style={{
              backgroundImage:
                'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            }}
            className="carousel"
          />
          <div
            style={{
              backgroundImage:
                'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            }}
            className="carousel"
          />
          <div
            style={{
              backgroundImage:
                'url(https://static-images.ifood.com.br/image/upload/t_high/pratos/cbcf001a-26fb-4e0f-8024-6dce16c569d6/202009301842_Mbgc_c.jpg)',
            }}
            className="carousel"
          />
        </div>
        <p className="review">
          Prato perfeito, amei muito, mas a entrega é demorada...
        </p>
        <div className="actions">
          <div className="like-container">
            <img className="like" src={like} alt="" /> <span>6</span>
          </div>
          <button>Ver prato</button>
        </div>
      </div>
    </div>
  );
};

export default App;
