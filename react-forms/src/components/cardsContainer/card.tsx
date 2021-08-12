import React from 'react';
import { Card } from '../../interface/card';
import { CardProps } from '../../interface/cardProps';

export const CardElement = ({ cardProps }: CardProps) => {
  return (
    <div className="card">
      <span>
        name:
        {cardProps.firstName}
      </span>
      <span>
        last name:
        {cardProps.lastName}
      </span>
      <span>
        birthday:
        {cardProps.birthday}
      </span>
      <span>
        country:
        {cardProps.country}
      </span>
      <span>
        agreement:
        {String(cardProps.agreement)}
      </span>
      <span>
        notifications:
        {String(cardProps.notifications)}
      </span>
    </div>
  );
};
