import React, { useState } from 'react';

import Stories from 'react-insta-stories';
import closeIcon from './icons/close.svg';
import starIcon from './icons/star.svg';
import Rating from 'react-rating';

import './App.scss';

const DURATION = 5000;

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

    return array.map(x => {
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
    });
  };

  setTimeout(() => {
    setShowStories(false);
  }, 22000);

  return (
    <>
      {!showStories && (
        <button onClick={() => setShowStories(true)}>Mostrar stories</button>
      )}
      {showStories && <StoriesProvider stories={makeStories()} />}
    </>
  );
};

export default App;
