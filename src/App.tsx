import './App.css'
import { HashRouter } from 'react-router-dom'
import Layout from '@router/index'

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Layout />
			</HashRouter>
		</div>
	)
}

export default App
