import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.id}
          {' '}
          {good.name}
        </li>
      ))}
    </ul>
  );
};
