import { useNavigate } from 'react-router-dom'
import useLogout from '../../../hooks/logoutHooks/useLogout.js'

const LogoutBtn = () => {
	const { logout } = useLogout()
	const navigate = useNavigate()

	const handleSubmit = () => {
		logout().then(data => {
			if (data) navigate('/login', { replace: true })
		})
	}

	return (
		<div>
			<button className="btn btn-error" onClick={handleSubmit}>
				Log Out
			</button>
		</div>
	)
}

export default LogoutBtn
