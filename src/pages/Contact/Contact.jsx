import './Contact.css'
import { FormContact } from './../../components/FormContact/FormContact';
import { useState } from 'react';
import Modal from './../../components/Modal/Modal';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [message, setMessage]=useState(null)
  const [modal, setModal]=useState(false)
  const navigate = useNavigate();

  const handleSubmit=(data)=>{

    const newMessage={
      name:data.name,
      email:data.email,
      text:data.text
    }
    setMessage(newMessage)
    setModal(true)
   
  }
  return (
    <div className='contact'>
     {modal&&<Modal title={`Dziękujemy ${message.name} za wiadomość`  } text={`niezwłocznie odpowiemy na adres ${message.email}`} onClose={()=>{setModal(false); navigate('/')}}/>}
      <h1>Kontakt</h1>
      <p>Prześlij do nas formularz kontaktowy a  nasi konsultanci niezwłocznie  skontaktują się z Tobą </p>
      <FormContact onSubmit={handleSubmit}/>
    </div>
  )
}

export default Contact