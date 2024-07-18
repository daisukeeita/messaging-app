import { useState } from 'react'

const useRegister = () => {
	const [loading, setLoading] = useState(false)

	const register = async (inputValues, genderValue) => {
		setLoading(true)

		try {
			const response = await fetch('http://localhost:8000/api/user/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...inputValues, gender: genderValue })
			})

			if (!response.ok) {
				setLoading(false)
				throw new Error('There was an error in user registration!')
			} else {
				const data = await response.json()
				return data
			}
		} catch (error) {
			return error.message
		} finally {
			setLoading(false)
		}
	}
	return { loading, register }
}

export default useRegister
