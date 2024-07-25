import '../App.css'
import React from 'react';

interface CmsFormProps {
    handleChangeFullName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangePhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeAddress: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
};

const CmsForm:React.FC<CmsFormProps> = ({
    handleChangeFullName,
    handleChangePhoneNumber,
    handleChangeAddress,
    handleChangeEmail,
    handleSubmit,
}) => {

    return (
        <div className="cms-form-container">
            <form onSubmit={handleSubmit} className="cms-form">
                <label>Full name</label>
                <input type="text" onChange={handleChangeFullName} />
                <label>Phone number</label>
                <input type="text" onChange={handleChangePhoneNumber} />
                <label>Email</label>
                <input type="text" onChange={handleChangeEmail} />
                <label>Address</label>
                <input type="text" onChange={handleChangeAddress} />
                <button className="login-signup-button" type="submit">Enter contact</button>
            </form>
        </div>
    )
}

export default CmsForm;