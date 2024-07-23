import FriendsList from './FriendsListComponent.jsx'
import LoggedUser from './LoggedUserComponent.jsx'

const Sidebar = () => {
	return (
		<div className="w-[25%] flex flex-col">
			<FriendsList />
			<LoggedUser />
		</div>
	)
}

export default Sidebar
