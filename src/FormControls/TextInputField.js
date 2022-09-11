import { ErrorMessage } from "./ErrorMessage";

export const TextInputField = ({ label, name, register, required, minLength, maxLength, pattern, errors }) => (
    <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <input className='form-control' id={name} {...register(name, { required, minLength, maxLength, pattern })} />
        {errors?.type === 'pattern' && <ErrorMessage message={`${label} is not in a valid format`} />}
        {errors?.type === 'required' && <ErrorMessage message="This field is required" />}
        {(errors?.type === 'minLength' || errors?.type === 'maxLength') && <ErrorMessage message={`${label} must be between ${minLength} and ${maxLength} characters`} />}
    </div>
);


