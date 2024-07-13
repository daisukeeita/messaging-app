const LoginInputComponent = ({
	label,
	type,
	placeholder,
	value,
	onChange,
	name
}) => {
	return (
		<div>
			<label className="label p-2">
				<span className="text-sm ">{label}</span>
			</label>
			<input
				type={type}
				placeholder={placeholder}
				autoComplete="off"
				className="input input-bordered p-2 w-full"
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default LoginInputComponent
