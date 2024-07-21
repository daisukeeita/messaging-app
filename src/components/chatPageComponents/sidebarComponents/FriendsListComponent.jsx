import { useContext, useEffect, useState } from 'react'
import useGetAllUsers from '../../../hooks/chatHooks/useGetAllUsers.js'
import { LoggedUserContext } from '../../../contexts/LoggedInUser.jsx'

const FriendsList = () => {
	const [allUsers, setAllUsers] = useState({})
	let users
	const { loading, getAllUsers } = useGetAllUsers()
	const { loggedUser } = useContext(LoggedUserContext)

	return (
		<div className="overflow-y-auto">
			{/* {loading ? ( */}
			{/* 	<span className="loading loading-ring loading-md"></span> */}
			{/* ) : ( */}
			{/* 	allUsers.map(user => ( */}
			{/* 		<div className="flex flex-row items-center" key={user._id}> */}
			{/* 			<div className="avatar"> */}
			{/* 				<div className="w-24 rounded-full"> */}
			{/* 					<img src={user.profilePic} /> */}
			{/* 				</div> */}
			{/* 			</div> */}
			{/**/}
			{/* 			<div className="flex flex-col"> */}
			{/* 				<span className="font-bold text-white">{user.fullName}</span> */}
			{/* 				<span>{user.username}</span> */}
			{/* 			</div> */}
			{/* 		</div> */}
			{/* 	)) */}
			{/* )} */}
		</div>
	)
}

export default FriendsList
