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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(duplicate);
    if (!duplicate) {
      addContact(currName, currPhone, currEmail);
    }
    setCurrName('');
    setCurrPhone('');
    setCurrEmail('');
  };

  useEffect(() =>{
    const found = contacts.find(contact => contact.name === currName);
    if(found === undefined) setDuplicate(false);
    else setDuplicate(true);
  }, [currName, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - (warning) This name is in the contacts list" : ""}
        </h2>
        <ContactForm  name={currName} phone={currPhone} email={currEmail} 
        setName={setCurrName} setPhone={setCurrPhone} setEmail={setCurrEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
