import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '@store/features/userSlice'
import type { AppDispatch } from '@store/index'

const What: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()

	const getQ = async () => {
		dispatch(fetchUserById())
	}
	return (
		<>
			<div style={{ margin: '30px 0' }}>What</div>
			<div style={{}}>
				<button onClick={getQ}>Get Query</button>
			</div>
		</>
	)
}

export default What
