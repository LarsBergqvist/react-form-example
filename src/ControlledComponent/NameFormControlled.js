import React, { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";

export function NameFormControlled() {
    const [fullName, setFullName] = useState("");
    const [formErrors, setFormErrors] = useState({ fullName: '' });
    const [fullNameValid, setFullNameValid] = useState(false);
    const [submittedData, setSubmittedData] = useState({});

    const handleNameChanged = (e) => {
        setFullName(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        validateField(name, value);
    }

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'fullName':
                let valid = value.length >= 6;
                setFullNameValid(valid);
                setFormErrors(Object.assign(formErrors, { fullName: valid === true ? '' : 'Min length is 6 characters' }));
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        let data = {
            fullName
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
                    <input name="fullName" className='form-control' type="text" value={fullName} onChange={handleNameChanged} />
                    <ErrorMessage message={formErrors.fullName} />
                    <div>
                        <button type="submit" className="btn btn-primary" disabled={!fullNameValid}>Submit</button>
                    </div>
                    <div>
                        {getResult}
                    </div>
                </div>
            </form>
            {getResult()}
        </div>
    );
}