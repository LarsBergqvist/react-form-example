export const SelectField = ({ label, name, options, register, required, errors }) => (
    <>
        <div>
            <label htmlFor={name}>{label}</label>
        </div>
        <div>
            <select id={name} {...register(name, { required })}>
                {options.map((opt, index) => (
                    <option key={index} value={opt.value}>{opt.text}</option>
                ))}
            </select>
        </div>
    </>
);
