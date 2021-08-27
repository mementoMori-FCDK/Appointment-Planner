import React, { useState, useEffect } from "react";
import ContactForm from '../../components/contactForm/ContactForm';
import TileList from '../../components/tileList/TileList';


export const ContactsPage = (props) => {
  const contacts = props.contacts;
  const addContact = props.addContact;

  const [currName, setCurrName] = useState('');
  const [currPhone, setCurrPhone] = useState('');
  const [currEmail, setCurrEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() =>{
    const found = contacts.find(contact => contact.name === currName);
    if(!found) setDuplicate(true);
    else setDuplicate(false);
  }, [currName, contacts, duplicate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
