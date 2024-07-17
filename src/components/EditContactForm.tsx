import '../App.css'
import React from 'react';
import { ContactInterface } from "../types/types";

interface EditContactFormProps {
    handleChangeFullName: (e: any) => void,
    handleChangePhoneNumber: (e: any) => void,
    handleChangeAddress: (e: any) => void,
    handleChangeEmail: (e: any) => void,
    handleEditContact: (contact: ContactInterface) => void;
    closeEditMode: () => void,
    contact: ContactInterface,
};

const EditContactForm:React.FC<EditContactFormProps> = ({
    handleChangeFullName,
    handleChangePhoneNumber,
    handleChangeAddress,
    handleChangeEmail,
    handleEditContact,
    closeEditMode,
    contact
}) => {
    return (
        <div className="cms-form-container">
            <form className="cms-form">
                <label>Full name</label>
                <input type="text" defaultValue={contact.fullName} onChange={handleChangeFullName} />
                <label>Phone number (numbers only)</label>
                <input type="text" defaultValue={contact.phoneNumber}onChange={handleChangePhoneNumber} />
                <label>email</label>
                <input type="text" defaultValue={contact.email} onChange={handleChangeEmail} />
                <label>Address</label>
                <input type="text" defaultValue={contact.address} onChange={handleChangeAddress} />
                <button onClick={() => { handleEditContact(contact); closeEditMode(); }} className="login-signup-button">Edit contact</button>
            </form>
        </div>
    )
}

export default EditContactForm;