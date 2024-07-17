import '../App.css';
import React, { useState } from 'react';
import { ContactInterface } from '../types/types';
import EditContactForm from './EditContactForm';

interface ContactsTableProps {
    contactList: ContactInterface[],
    handleChangeFullName: (e: any) => void,
    handleChangePhoneNumber: (e: any) => void,
    handleChangeAddress: (e: any) => void,
    handleChangeEmail: (e: any) => void,
    handleRemoveContact: (id: string) => void,
    handleEditContact: (contact: ContactInterface) => void,
}

const ContactsTable: React.FC<ContactsTableProps> = ({ 
    contactList, 
    handleChangeFullName,
    handleChangePhoneNumber,
    handleChangeAddress,
    handleChangeEmail,
    handleRemoveContact, 
    handleEditContact,

}) => {
    const [editMode, setEditMode] = useState({
        isEditMode: false,
        contact: {
            fullName: '', phoneNumber: '', email: '', address: '', id: ''
        }
    })

    const closeEditMode = () => {
        setEditMode({
            isEditMode: false,
            contact: {
                fullName: '', phoneNumber: '', email: '', address: '', id: ''
            }
        })
    }

    const tableRows = contactList.map((contact, index) => {
        const key = `${contact.phoneNumber}-${index}`;
        return (
            <tr key={key}>
                <td>{contact.fullName}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>{contact.address}</td>
                <td>
                    <button onClick={() => handleRemoveContact(contact.id)}>
                        Remove
                    </button>
                </td>
                <td>
                    <button onClick={() => {setEditMode({ isEditMode: true, contact: contact })}}>
                        Edit
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <>
            <table className='contacts-table'>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
            {editMode.isEditMode && 
            <EditContactForm
                contact={editMode.contact}
                handleChangeFullName={handleChangeFullName}
                handleChangePhoneNumber={handleChangePhoneNumber}
                handleChangeAddress={handleChangeAddress}
                handleChangeEmail={handleChangeEmail}
                handleEditContact={handleEditContact}
                closeEditMode={closeEditMode}
            />}
        </>
    );
}

export default ContactsTable;
