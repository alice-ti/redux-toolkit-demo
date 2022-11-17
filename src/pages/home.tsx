import { increment } from '@/store/features/conterSlice'
import { increment as userIncrement } from '@/store/features/userSlice'
import { useDispatch, useSelector } from 'react-redux'

// counter就是添加Slice时用的key
const selectCount = (state: any) => state.counter.value

const Home: React.FC = () => {
	const count = useSelector(selectCount)
	const dispatch = useDispatch()
	// 相当于dispatch({ type: 'counter/increment' })
	const onInc = () => dispatch(increment())

	const userCount = useSelector((state: any) => state.user.value)
	const onUnc = () => dispatch(userIncrement())

	return (
		<>
			<div style={{ margin: '30px 0' }}>Home</div>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<button onClick={onInc}>Count + 1</button>
				<div style={{ marginLeft: '10px' }}>counter: {count}</div>
			</div>

			<div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
				<button onClick={onUnc}>Count + 1</button>
				<div style={{ marginLeft: '10px' }}>user: {userCount}</div>
			</div>
		</>
	)
}

export default Home
