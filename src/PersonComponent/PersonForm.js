import React from "react";
import { useForm } from "react-hook-form";
import { NumberInputField } from "./NumberInputField";
import { SelectField } from "./SelectField";
import { TextInputField } from "./TextInputField";

const PersonForm = (props) => {
    const { register, handleSubmit, formState } = useForm({
        mode: "all"
    });

    // console.log(watch("firstName"));
    // console.log(watch("lastName"));
    // console.log(watch("age"));
    // console.log(watch("gender"));

    const genderOptions = [
        { value: 'Other', text: 'other' },
        { value: 'Female', text: 'female' },
        { value: 'Male', text: 'male' }
    ];

    const getResult = () => {
        if (!props || !props.firstName) return "";
        return `Name: ${props.firstName} ${props.lastName}, Age: ${props.age}, Gender: ${props.gender}`;
    }

    return (
        <div>
            <h3>react-hook form</h3>
            <form onSubmit={handleSubmit(props.onSubmit)} className="needs-validation" noValidate>
                <TextInputField label="First name" name="firstName" register={register} required minLength="2" maxLength="10" errors={formState.errors.firstName} />
                <TextInputField label="Last name" name="lastName" register={register} required minLength="3" maxLength="20" errors={formState.errors.lastName} />
                <NumberInputField label="Age" name="age" register={register} required min="1" max="100" errors={formState.errors.age}></NumberInputField>
                <SelectField label="Gender" name="gender" options={genderOptions} register={register}></SelectField>
                {formState.isValid && <input type="submit" value="Submit" className="btn btn-primary" />}
                {!formState.isValid && <input type="submit" value="Submit" className="btn btn-primary" disabled />}
            </form>
            {getResult()}
        </div>
    );
}

export default PersonForm;