import { useEffect, useState } from 'react'
import useGetAllUsers from '../../../hooks/chatHooks/useGetAllUsers.js'

const user = '666d4e18d23a7435eedfa55d'

const FriendsList = () => {
	const { loading, getAllUsers } = useGetAllUsers()
	const [allUsers, setAllUsers] = useState([])

	useEffect(() => {
		getAllUsers(user).then(data => setAllUsers(data))
	}, [])

	return (
		<div className="flex flex-col items-center w-60 overflow-y-auto overflow-x-hidden h-96">
			{loading ? (
				<span className="loading loading-dots loading-sm"></span>
			) : (
				allUsers.map(user => (
					<div className="flex flex-row items-center" key={user._id}>
						<div className="avatar">
							<div className="w-24 rounded-full">
								<img src={user.profilePic} />
							</div>
						</div>

						<div className="flex flex-col">
							<span className="font-bold text-white">{user.fullName}</span>
							<span>{user.username}</span>
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default FriendsList
