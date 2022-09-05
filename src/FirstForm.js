import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NumberInputField } from "./NumberInputField";
import { SelectField } from "./SelectField";
import { TextInputField } from "./TextInputField";

export default function FirstForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [data, setData] = useState({});
    const onSubmit = newData => setData(newData);

    console.log(watch("firstName"));
    console.log(watch("lastName"));
    console.log(watch("age"));
    console.log(watch("gender"));

    const genderOptions = [
        { value: 'Other', text: 'other' },
        { value: 'Female', text: 'female' },
        { value: 'Male', text: 'male' }
    ];

    const getResult = () => {
        if (!data || !data.firstName) return "";
        return `Name: ${data.firstName} ${data.firstName}, Age: ${data.age}, Gender: ${data.gender}`;
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
                <TextInputField label="First name" name="firstName" register={register} required minLength="2" maxLength="10" errors={errors.firstName} />
                <TextInputField label="Last name" name="lastName" register={register} required minLength="3" maxLength="20" errors={errors.lastName} />
                <NumberInputField label="Age" name="age" register={register} required min="1" max="100" errors={errors.age}></NumberInputField>
                <SelectField label="Gender" name="gender" options={genderOptions} register={register}></SelectField>
                <input type="submit" className="btn btn-primary" />
            </form>
            {getResult()}
        </div>

    );
}