import React, { useState } from "react";
import AppointmentForm from '../../components/appointmentForm/AppointmentForm';
import TileList from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {

  const contacts = props.contacts;
  const appointments = props.appointments;
  const addAppointment = props.addAppointment;

  const [currTitle, setCurrTitle] = useState('');
  const [currContact, setCurrContact] = useState('');
  const [currDate, setCurrDate] = useState('');
  const [currTime, setCurrTime] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(currTitle, currContact, currDate, currTime);

    setCurrTitle('');
    setCurrContact('');
    setCurrDate('');
    setCurrTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit} contacts={contacts}
         title={currTitle} contact={currContact} date={currDate} time={currTime}
         setTitle={setCurrTitle} setContact={setCurrContact} setDate={setCurrDate} setTime={setCurrTime} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};

export default AppointmentsPage;
