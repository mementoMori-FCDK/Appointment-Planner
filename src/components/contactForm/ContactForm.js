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
        <input type='text' name='name' value={name} onChange={nameChange}></input>
      </label>
      <label>
        Email
        <input type='email' name='email' value={email} onChange={emailChange}></input>
      </label>
      <label>
        Phone
        <input type='tel' name='phone' value={phone} onChange={phoneChange} ></input>
      </label>
      <input type='submit' value='Add New Contact'></input>
    </form>
  );
};

export default ContactForm;