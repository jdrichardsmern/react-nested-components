import React from 'react';
import faker from 'faker';

const SingleFeed = () => {
  return (
    <div className='ui feed'>
      <div className='event'>
        <div className='label'>
          <img alt='...' src={faker.image.avatar()} />
        </div>
      </div>
      <div className='content'>
        <div className='date'>1 Hour Ago</div>
        <div className='summary'>
          <a href='/' className='user'>
            John Walker
          </a>
          wants to have a meeting with you
        </div>
      </div>
    </div>
  );
};

export default SingleFeed;
