import React from "react";

const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const nameChange = (e) => {
    setName(e.target.value);
  }

  const emailChange = (e) => {
    setEmail(e.target.value);
  }

  const phoneChange = (e) => {
    setPhone(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type='text' name='name' value={name} onChange={nameChange} required></input>
      </label>
      <label>
        Email
        <input type='email' name='email' value={email} onChange={emailChange} required></input>
      </label>
      <label>
        Phone
        <input type='tel' name='phone' value={phone} onChange={phoneChange} required></input>
      </label>
      <input type='submit' value='Add New Contact'></input>
    </form>
  );
};

export default ContactForm;