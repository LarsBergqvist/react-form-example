import React from "react";
import { useForm } from "react-hook-form";
import { NumberInputField } from "./NumberInputField";
import { SelectField } from "./SelectField";
import { TextInputField } from "./TextInputField";

export default function FirstForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("firstName"));
    console.log(watch("lastName"));
    console.log(watch("age"));
    console.log(watch("gender"));

    const genderOptions = [
        { value: 'Other', text: 'other' },
        { value: 'Female', text: 'female' },
        { value: 'Male', text: 'male' }
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInputField label="First Name" name="firstName" register={register} required minLength="2" maxLength="10" errors={errors.firstName} />
            <TextInputField label="Last Name" name="lastName" register={register} required minLength="3" maxLength="20" errors={errors.lastName} />
            <NumberInputField label="Age" name="age" register={register} required min="1" max="100" errors={errors.age}></NumberInputField>
            <SelectField label="Gender" name="gender" options={genderOptions} register={register}></SelectField>
            <input type="submit" />
        </form>
    );
}