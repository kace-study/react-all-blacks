import React from 'react';
import './Panel.css';

const Panel = ({ isBlack, onClick }) =>  {
  return (
    <button 
      className={`card ${ isBlack ? 'bg-black' : 'bg-white' }`} 
      onClick={() => onClick()} />
  );
}

export default Panel;
