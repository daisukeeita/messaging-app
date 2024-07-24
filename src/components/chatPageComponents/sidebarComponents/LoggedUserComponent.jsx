import { useContext } from 'react'

import { LoggedUserContext } from '../../../contexts/LoggedInUser.jsx'
import LogoutBtn from './LogoutBtn.jsx'

const LoggedUser = () => {
	const { loggedUser } = useContext(LoggedUserContext)

	return (
		<div className="flex flex-row items-center">
			<div className="avatar">
				<div className="w-16 rounded-full">
					<img src={loggedUser.profilePic} />
				</div>
			</div>

			<div className="flex flex-col">
				<span className="font-bold text-white">{loggedUser.fullName}</span>
				<span>{loggedUser.username}</span>
			</div>

			<LogoutBtn />
		</div>
	)
}

export default LoggedUser
