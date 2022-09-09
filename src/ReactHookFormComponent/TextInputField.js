import { ErrorMessage } from "../ErrorMessage";

export const TextInputField = ({ label, name, register, required, minLength, maxLength, errors }) => (
    <div>
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input className='form-control' id={name} {...register(name, { required, minLength, maxLength })} />
            {errors?.type === 'required' && <ErrorMessage message="This field is required" />}
            {(errors?.type === 'minLength' || errors?.type === 'maxLength') && <ErrorMessage message={`${label} must be between ${minLength} and ${maxLength} characters`} />}
        </div>
    </div>
);


