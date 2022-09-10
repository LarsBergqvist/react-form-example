import React, { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";

export function FormControlled() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [formErrors, setFormErrors] = useState({ fullName: '', email: '' });
    const [fullNameValid, setFullNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [submittedData, setSubmittedData] = useState({});

    const handleChangedInput = (e) => {
        switch (e.target.name) {
            case 'fullName':
                setFullName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            default:
                break;
        }
        validateField(e.target.name, e.target.value);
    }

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'fullName':
                {
                    let valid = value.length >= 6;
                    setFullNameValid(valid);
                    setFormErrors(Object.assign(formErrors, { fullName: valid === true ? '' : 'Min length is 6 characters' }));
                    break;
                }
            case 'email':
                {
                    let match = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    let valid = match !== null;
                    setEmailValid(valid);
                    setFormErrors(Object.assign(formErrors, { email: valid === true ? '' : 'Email is invalid' }));
                    break;
                }
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        let data = {
            fullName,
            email
        };
        setSubmittedData(data);
        event.preventDefault();
    }

    const getResult = () => {
        return JSON.stringify(submittedData);
    }

    return (
        <div>
            <h3>Controlled component</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="fullName">Name:</label>
                    <input name="fullName" className='form-control' type="text" value={fullName} onChange={handleChangedInput} />
                    <ErrorMessage message={formErrors.fullName} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={handleChangedInput} />
                    <ErrorMessage message={formErrors.email} />
                </div>
                <div>
                    <input type="submit" value="Submit" className="btn btn-primary" disabled={!fullNameValid & emailValid} />
                </div>
            </form>
            {getResult()}
        </div>
    );
}