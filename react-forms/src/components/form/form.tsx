import React, { FormEvent, useState } from 'react';
import './form.scss';
import { Card } from '../../interface/card';

export const Form = ({ setFormsValues }: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [agreement, setAgreement] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthday('');
    setCountry('Belarus');
    setAgreement(false);
    setNotifications(false);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setFormsValues((state: Card[]) => [
      ...state,
      {
        firstName,
        lastName,
        birthday,
        country,
        agreement,
        notifications,
      },
    ]);
    reset();
  };

  return (
    <form className="form" onSubmit={submit}>
      <label htmlFor="firstName" className="firstName">
        <input
          name="firstName"
          type="text"
          placeholder="Your Name"
          value={firstName}
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label htmlFor="lastName" className="lastName">
        <input
          name="lastName"
          placeholder="Your Surname"
          type="text"
          value={lastName}
          required
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label htmlFor="birthDay" className="birthDay">
        <input
          name="birthDay"
          type="date"
          value={birthday}
          required
          onChange={(event) => setBirthday(event.target.value)}
        />
      </label>
      <label htmlFor="country" className="country">
        <select
          className="country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option>Belarus</option>
          <option>Russia</option>
          <option>USA</option>
          <option>Japan</option>
        </select>
      </label>
      <label htmlFor="agreement" className="agreement">
        <input
          type="radio"
          name="agreement"
          required
          checked={agreement}
          onChange={() => setAgreement((prev) => !prev)}
        />
        I accept the agreement
      </label>
      <label htmlFor="" className="notifications">
        <label className="switch">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications((prev) => !prev)}
          />
          <span className="slider round" />
        </label>
        <p>Recive notifications</p>
      </label>
      <button className="btnSubmit">Submit</button>
    </form>
  );
};
