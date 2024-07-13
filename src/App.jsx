import Register from './pages/registerPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center">
			<BrowserRouter>
				<Routes>
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
