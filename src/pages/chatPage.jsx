import { useContext } from 'react'
import { LoggedUserContext } from '../contexts/LoggedInUser.jsx'

const ChatPage = () => {
	const { loggedUser } = useContext(LoggedUserContext)

	console.log(loggedUser)

	return (
		<div>
			<h1>Hello Chat Page</h1>
		</div>
	)
}

export default ChatPage
