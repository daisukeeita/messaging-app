import { createContext, useState } from 'react'

const GenderContext = createContext(null)

const GenderContextProvider = ({ children }) => {
	const [genderValue, setGenderValue] = useState('male')

	const handleRadioBtn = e => {
		setGenderValue(e.target.value)
	}

	return (
		<GenderContext.Provider value={{ genderValue, handleRadioBtn }}>
			{children}
		</GenderContext.Provider>
	)
}

export { GenderContext, GenderContextProvider }
