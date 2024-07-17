import '../App.css';
import React from 'react';
import { ContactInterface } from '../types/types';

interface ContactsTableProps {
    contactList: ContactInterface[],
}

const ContactsTable: React.FC<ContactsTableProps> = ({ contactList }) => {
    const tableRows = contactList.map((contact, index) => {
        const key = `${contact.phoneNumber}-${index}`;
        return (
            <tr key={key}>
                <td>{contact.fullName}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>{contact.address}</td>
            </tr>
        );
    });

    return (
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
    );
}

export default ContactsTable;
