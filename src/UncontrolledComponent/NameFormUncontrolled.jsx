import React, { useRef } from "react";

export function NameFormUncontrolled() {
    const input = useRef(null);

    const handleSubmit = (event) => {
        alert('Data was submitted: ' + input?.current.value);
        event.preventDefault();
    }

    return (
        <div>
            <h3>Uncontrolled component</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="fullName">Name:</label>
                    <input name="fullName" className='form-control' type="text" ref={input} />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        </div>
    );
}