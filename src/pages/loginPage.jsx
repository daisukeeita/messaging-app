import { useState } from 'react'
import LoginInputComponent from '../components/loginComponents/loginInputComponent.jsx'

const initialValue = {
	username: '',
	password: ''
}

const Login = () => {
	const [inputValue, setInputValue] = useState(initialValue)

	const handleUserInputs = e => {
		const { name, value } = e.target

		setInputValue(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const resetStateValue = () => {
		setInputValue(initialValue)
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log({
			username: inputValue.username,
			password: inputValue.username
		})
		resetStateValue()
	}

	return (
		<div className="w-96 h-auto flex flex-col items-center justify-center text-white">
			<div className="flex flex-col items-center pt-2 h-full w-full bg-red-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-5">
				<h1 className="text-lg font-semibold">
					Login to <span className="text-blue-500">Real-Time-Messaging</span>
				</h1>

				<form className="mb-5 w-full" onSubmit={handleSubmit}>
					<LoginInputComponent
						label={'Username'}
						type={'text'}
						name={'username'}
						placeholder={'Enter your username'}
						value={inputValue.username}
						onChange={handleUserInputs}
					/>

					<LoginInputComponent
						label={'Password'}
						type={'password'}
						name={'password'}
						placeholder={'Enter your password'}
						value={inputValue.password}
						onChange={handleUserInputs}
					/>

					<div className="mt-5">
						<button className="btn btn-error w-full">Log in</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
