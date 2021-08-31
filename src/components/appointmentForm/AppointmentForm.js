import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  const changeDate = (e) => {
    setDate(e.target.value);
  }

  const changeTime = (e) => {
    setTime(e.target.value);
  }

  const changeContact = (e) => {
    setContact(e.target.value);
  }  

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' onChange={changeTitle} value={title} required></input>
      <input type='date' name='date' min={getTodayString} onChange={changeDate} value={date} required></input>
      <input type='time' name='time' onChange={changeTime} value={time} required></input>
      <ContactPicker contacts={contacts} onChange={changeContact}/>
      <input type='submit' value='Add appointment'></input>
    </form>
  );
};

export default AppointmentForm;
