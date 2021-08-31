import React from "react";

export const ContactPicker = (props) => {

  const contacts = props.contacts;
  const onChange = props.onChange;  

  return (
    <select onChange={onChange}>
      <option key='0' value='' selected>No contact selected</option>
      {
        contacts.map((contact, index) => {
          return <option key={index} value={contact.name}>{contact.name}</option>
        })
      }
    </select>
  );
};

export default ContactPicker;
