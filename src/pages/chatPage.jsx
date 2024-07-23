import Sidebar from '../components/chatPageComponents/sidebarComponents/SideBar.jsx'

const ChatPage = () => {
	return (
		<div className="w-4/5 h-4/5 flex flex-row text-white">
			<Sidebar />
			<div className="border border-white w-full">Hello World</div>
		</div>
	)
}

export default ChatPage
