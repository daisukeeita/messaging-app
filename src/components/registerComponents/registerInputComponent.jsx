const RegisterInputComponent = ({
	placeholder,
	label,
	name,
	type,
	value,
	onChange
}) => {
	return (
		<div>
			<label className="label p-2 text-sm">{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				autoComplete="off"
				name={name}
				value={value}
				onChange={onChange}
				className="input input-bordered p-2 w-full"
			/>
		</div>
	)
}

export default RegisterInputComponent
