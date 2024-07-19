import { createContext, useState } from 'react'

const LoggedUserContext = createContext(null)

const LoggedUserContextProvider = ({ children }) => {
	const [loggedUser, setLoggedUser] = useState({})

	return (
		<LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
			{children}
		</LoggedUserContext.Provider>
	)
}

export { LoggedUserContext, LoggedUserContextProvider }
