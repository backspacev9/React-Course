import React, { useState } from 'react';
import './form.scss';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [agreement, setAgreement] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const submit = () => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(birthDay);
    console.log(country);
    console.log(agreement);
    console.log(notifications);
  };
  return (
    <form className="form" onSubmit={submit}>
      <label htmlFor="firstName" className="firstName">
        <input
          name="firstName"
          type="text"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label htmlFor="lastName" className="lastName">
        <input
          name="lastName"
          type="text"
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label htmlFor="birthDay" className="birthDay">
        <input
          name="birthDay"
          type="date"
          onChange={(event) => setBirthDay(event.target.value)}
        />
      </label>
      <label htmlFor="country" className="country">
        <select
          className="country"
          name="country"
          id=""
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
          type="checkbox"
          name="agreement"
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
          <span className="slider round"></span>
        </label>
        <p>Recive notifications</p>
      </label>
      <button className="btnSubmit">Submit</button>
    </form>
  );
};
