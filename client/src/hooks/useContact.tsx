import { useState } from "react";
import { ContactInterface } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

const useContact = () => {
    
    const [ fullName, setFullName ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ contactList, setContactList ] = useState<ContactInterface[]>([]);

    const handleChangeFullName = (e: any) => setFullName(e.target.value);
    const handleChangePhoneNumber = (e: any) => setPhoneNumber(e.target.value);
    const handleChangeEmail = (e: any) => setEmail(e.target.value);
    const handleChangeAddress = (e: any) => setAddress(e.target.value);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const id = uuidv4();
        setContactList(prevState => [...prevState ,
            { fullName, phoneNumber, email, address, id }
        ]);
    };

    const handleRemoveContact = (id: string) => {
        const updatedContactList = contactList;
        setContactList(updatedContactList.filter( contact => contact.id != id));
    }

    const handleEditContact = (contact: ContactInterface) => {
        const updatedContactList = contactList;
        setContactList(
            updatedContactList.map(
                (item) => {
                    if (item.id !== contact.id) {
                        return (
                            item
                        )
                    } else {
                        return (
                            { fullName, phoneNumber, email, address, id: contact.id }
                        )
                    }
                }
            )
        )
    }

    return { 
        handleChangeFullName, 
        handleChangePhoneNumber,
        handleChangeEmail,
        handleChangeAddress,
        handleSubmit,
        handleRemoveContact,
        handleEditContact,
        contactList
    }
}

export default useContact;