//
//

import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div className=''>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='movie-thumb'></Image>
        </Link>
      ) : (
        <Image src={image} alt='movie-thumb'></Image>
      )}
    </div>
  );
};

export default Thumb;
