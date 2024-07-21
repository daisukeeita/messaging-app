import { useState } from 'react'

const useGetAllUsers = () => {
	const [loading, setLoading] = useState(false)

	const getAllUsers = async loggedUserId => {
		setLoading(true)

		try {
			const response = await fetch(
				`http://localhost:8000/api/user/allUsers/${loggedUserId}`,
				{
					method: 'GET',
					headers: { 'Content-Type': 'application/json' }
				}
			)

			if (!response.ok) {
				setLoading(false)
				throw new Error('There was an error getting all the users')
			} else {
				return response.json()
			}
		} catch (error) {
			return error.message
		} finally {
			setLoading(false)
		}
	}

	return { loading, getAllUsers }
}

export default useGetAllUsers
