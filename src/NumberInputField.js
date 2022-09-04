import { ErrorMessage } from "./ErrorMessage";

export const NumberInputField = ({ label, name, register, required, min, max, errors }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input className="form-control" type="number" id={name} {...register(name, { required, min, max })} />
        {errors?.type === 'required' && <ErrorMessage message="This field is required" />}
        {(errors?.type === 'min' || errors?.type === 'max') && <ErrorMessage message={`${label} must be between ${min} and ${max}`} />}
    </div>
);
