import React from "react";

export class NameFormUncontrolled extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert('Data was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Uncontrolled component</h3>
                <form className='form-group' onSubmit={this.handleSubmit}>
                    <label htmlFor="fullName">Name:</label>
                    <input name="fullName" className='form-control' type="text" ref={this.input} />
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        );
    }
}