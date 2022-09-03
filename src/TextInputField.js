export const TextInputField = ({ label, name, register, required, minLength, maxLength, errors }) => (
    <>
        <div>
            <label htmlFor={name}>{label}</label>
        </div>
        <div>
            <input id={name} {...register(name, { required, minLength, maxLength })} />
            {errors?.type === 'required' && <span>This field is required</span>}
            {(errors?.type === 'minLength' || errors?.type === 'maxLength') && <span>{label} must be between {minLength} and {maxLength} characters</span>}
        </div>
    </>
);
