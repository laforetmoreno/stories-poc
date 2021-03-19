import React from 'react';
import PropTypes from 'prop-types';

import styles from './Banner.module.scss';

const Banner = ({ name, text, buttonTitle, image, link, index }) => {
  const handleClick = async () => {};

  return (
    <>
      <div
        className={styles.banner}
        onClick={handleClick}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.container}>
          <div className={styles.leftContent}>
            {text && <div className={styles.text}>{text}</div>}
            {buttonTitle && (
              <button>
                <span>{buttonTitle.split(' ')[0]}</span>
                {` ${buttonTitle.split(' ', 2)[1]}`}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    id: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
  }).isRequired,
  buttonTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Banner;
