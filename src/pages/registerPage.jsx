import { useContext, useState } from 'react'
import RegisterInputComponent from '../components/registerComponents/registerInputComponent.jsx'
import GenderRadioBtn from '../components/registerComponents/registerInputRadio.jsx'
import { GenderContext } from '../contexts/RegisterGenderContext.jsx'

const initialValue = {
	fullName: '',
	username: '',
	password: '',
	confirmPassword: ''
}

const Register = () => {
	const [inputValues, setInputValues] = useState(initialValue)
	const { genderValue } = useContext(GenderContext)

	const handleUserInputs = e => {
		const { name, value } = e.target

		setInputValues(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const resetStateValue = () => {
		setInputValues(initialValue)
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log({
			fullName: inputValues.fullName,
			username: inputValues.username,
			password: inputValues.password,
			confirmPassword: inputValues.password,
			gender: genderValue
		})
		resetStateValue()
	}

	return (
		<div className="w-96 h-auto flex flex-col items-center justify-center text-white">
			<div className="flex flex-col items-center pt-2 h-full w-full bg-red-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-5">
				<h1 className="text-lg font-semibold">
					Register to <span className="text-blue-500">Real-Time-Messaging</span>
				</h1>

				<form className="mb-5 w-full" onSubmit={handleSubmit}>
					<RegisterInputComponent
						placeholder={'Enter your Full Name'}
						type={'text'}
						label={'Full Name'}
						name={'fullName'}
						value={inputValues.fullName}
						onChange={handleUserInputs}
					/>

					<RegisterInputComponent
						placeholder={'Enter you username'}
						type={'text'}
						label={'Username'}
						name={'username'}
						value={inputValues.username}
						onChange={handleUserInputs}
					/>

					<RegisterInputComponent
						placeholder={'Enter your password'}
						type={'password'}
						label={'Password'}
						name={'password'}
						value={inputValues.password}
						onChange={handleUserInputs}
					/>

					<RegisterInputComponent
						placeholder={'Confirm your password'}
						type={'password'}
						label={'Confirm Password'}
						name={'confirmPassword'}
						value={inputValues.confirmPassword}
						onChange={handleUserInputs}
					/>

					<GenderRadioBtn />

					<div className="mt-5">
						<button className="btn btn-error w-full">Register Account</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register
