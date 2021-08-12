import React, { useState } from 'react';
import { FormProps } from '../../interface/formProps';
import { CardElement } from './card';

import './cardsContainer.scss';

export const CardContainer = ({ formProps }: FormProps) => {
  const cards = formProps.map((el) => <CardElement cardProps={el} />);
  return <div className="cardContainer">{cards}</div>;
};
