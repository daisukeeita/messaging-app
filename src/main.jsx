import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GenderContextProvider } from './contexts/RegisterGenderContext.jsx'
import { LoggedUserContextProvider } from './contexts/LoggedInUser.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GenderContextProvider>
			<LoggedUserContextProvider>
				<App />
			</LoggedUserContextProvider>
		</GenderContextProvider>
	</React.StrictMode>
)
