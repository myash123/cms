import { useState } from "react";
import { ContactInterface } from '../types/types';

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
        setContactList(prevState => [...prevState ,
            { fullName, phoneNumber, email, address }
        ]);
    };

    return { 
        handleChangeFullName, 
        handleChangePhoneNumber,
        handleChangeEmail,
        handleChangeAddress,
        handleSubmit,
        contactList
    }
}

export default useContact;