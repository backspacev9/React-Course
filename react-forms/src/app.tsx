import React, { useState } from 'react';
import { CardContainer } from './components/cardsContainer/cardsContainer';
import { Form } from './components/form/form';
import { Card } from './interface/card';

import './style.scss';

export default function App(): JSX.Element {
  const [formValues, setFormsValues] = useState<Card[]>([]);
  if (formValues.length > 5) {
    formValues.splice(0, 1);
  }
  return (
    <div className="root">
      <Form setFormsValues={setFormsValues} />
      <CardContainer formProps={formValues} />
    </div>
  );
}
