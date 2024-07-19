import { useState } from 'react'

const useLogin = () => {
	const [loading, setLoading] = useState(false)

	const login = async inputValue => {
		setLoading(true)

		try {
			const response = await fetch('http://localhost:8000/api/user/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...inputValue })
			})

			if (!response.ok) {
				setLoading(false)
				throw new Error('There was an error in user login')
			} else {
				return response.json()
			}
		} catch (error) {
			return error.message
		} finally {
			setLoading(false)
		}
	}

	return { loading, login }
}

export default useLogin
