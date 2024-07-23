import { useState } from 'react'

const useLogout = () => {
	const [loading, setLoading] = useState(false)

	const logout = async () => {
		setLoading(true)

		try {
			const response = await fetch('http://localhost:8000/api/user/logout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' }
			})

			if (!response.ok) {
				setLoading(false)
				throw new Error('There was an error in user logout process')
			} else {
				return response.json()
			}
		} catch (error) {
			return error.message
		} finally {
			setLoading(false)
		}
	}

	return { loading, logout }
}

export default useLogout
