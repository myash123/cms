import { AuthContext } from '../App';
import '../App.css';
import useContact from '../hooks/useContact';
import CmsForm from './CmsForm';
import { useContext } from 'react';

const CmsContainer = () => {
    const context = useContext(AuthContext);
    const { handleChangeFullName, 
            handleChangePhoneNumber,
            handleChangeEmail,
            handleChangeAddress,
            handleSubmit,
            contactList
        } = useContact();
    
        const mapContactsToList = contactList.map(contact => {
            return (
                <li>
                    {contact.fullName} -- {contact.email} -- {contact.phoneNumber} -- {contact.address}
                </li>
            )
        });
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
            <div>
                <ul>
                    {mapContactsToList}
                </ul>
            </div>
        </div>
    )
}

export default CmsContainer;