const Input = ({ name, label, value, onChange, type }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className='form-control'
        id={name}
        name={name}
      />
    </div>
  );
};

export default Input;
