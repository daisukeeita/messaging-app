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
		<div className="flex flex-col items-center w-full h-3/4 overflow-y-auto overflow-x-hidden mb-auto">
			{loading ? (
				<span className="loading loading-dots loading-sm"></span>
			) : (
				allUsers.map(user => (
					<div
						className="w-full flex flex-row justify-start pl-5"
						key={user._id}
					>
						<div className="avatar">
							<div className="w-16 rounded-full">
								<img src={user.profilePic} />
							</div>
						</div>

						<div className="flex flex-col">
							<span className="font-bold text-sm text-white">
								{user.fullName}
							</span>
							<span className="text-white">{user.username}</span>
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default FriendsList
