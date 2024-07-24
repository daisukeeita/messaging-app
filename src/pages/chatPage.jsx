import Conversation from '../components/chatPageComponents/conversationComponents/Conversation.jsx'
import Sidebar from '../components/chatPageComponents/sidebarComponents/SideBar.jsx'

const ChatPage = () => {
	return (
		<div className="w-4/5 h-4/5 flex flex-row text-white">
			<Sidebar />
			<Conversation />
		</div>
	)
}

export default ChatPage
