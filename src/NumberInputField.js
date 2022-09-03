export const NumberInputField = ({ label, name, register, required, min, max, errors }) => (
    <>
        <div>
            <label htmlFor={name}>{label}</label>
        </div>
        <div>
            <input type="number" id={name} {...register(name, { required, min, max })} />
            {errors?.type === 'required' && <span>This field is required</span>}
            {(errors?.type === 'min' || errors?.type === 'max') && <span>{label} must be between {min} and {max}</span>}
        </div>
    </>
);
