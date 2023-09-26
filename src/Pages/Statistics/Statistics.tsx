import React from 'react';
import PieChartt from './PieChartt';

const Statistics = () => {
  const donateItems = JSON.parse(localStorage.getItem('donates'));
  const item=donateItems?donateItems.length : 0;
  

  return (
    <div>
      <PieChartt item={item}></PieChartt>
    </div>
  );
};

export default Statistics;