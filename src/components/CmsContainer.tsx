import '../App.css';
import { AuthContext } from '../App';
import { useContext } from 'react';
import useContact from '../hooks/useContact';
import CmsForm from './CmsForm';
import ContactsTable from './ContactsTable';

const CmsContainer = () => {
    const context = useContext(AuthContext);
    const { handleChangeFullName, 
            handleChangePhoneNumber,
            handleChangeEmail,
            handleChangeAddress,
            handleSubmit,
            handleRemoveContact,
            handleEditContact,
            contactList
        } = useContact();
    
    return (
        <div className='cms-container'>
            <h1> Your Contact Management System</h1>
            <h2> Hello {context.user}</h2>
            <CmsForm
                handleChangeFullName={handleChangeFullName}
                handleChangePhoneNumber={handleChangePhoneNumber}
                handleChangeEmail={handleChangeEmail}
                handleChangeAddress={handleChangeAddress}
                handleSubmit={handleSubmit}
            />
            <ContactsTable 
                contactList={contactList}
                handleRemoveContact={handleRemoveContact}
                handleEditContact={handleEditContact}
                handleChangeFullName={handleChangeFullName}
                handleChangePhoneNumber={handleChangePhoneNumber}
                handleChangeAddress={handleChangeAddress}
                handleChangeEmail={handleChangeEmail}
            />
        </div>
    )
}

export default CmsContainer;