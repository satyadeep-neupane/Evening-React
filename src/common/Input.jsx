function Input({id, label, type, value, placeholder, handleChange, error}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" value={value} id={id} placeholder={placeholder} onChange={handleChange} />
            <p className="text-danger">{error}</p>
        </div>
    )
}

export default Input;