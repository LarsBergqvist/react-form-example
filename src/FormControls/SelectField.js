export const SelectField = ({ label, name, options, register, required, errors }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select className="form-control" id={name} {...register(name, { required })}>
            {options.map((opt, index) => (
                <option key={index} value={opt.value}>{opt.text}</option>
            ))}
        </select>
    </div>
);
