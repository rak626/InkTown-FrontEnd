import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import Order from '../components/Order'
import { fetchAllOrderStatus } from '../utils/apis'
import { addAllOrderStatus } from '../features/orderSlice'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Container from '../components/Container'

const OrderPage = () => {
	const dispatch = useDispatch()
	const token = useSelector((state) => state.auth.token)
	const {
		data: orderStatus,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ['allOrderStatus'],
		queryFn: () => fetchAllOrderStatus(token),
	})
	dispatch(addAllOrderStatus(orderStatus))

	if (isLoading) {
		return <Loading />
	}
	if (isError) {
		return <Error errorMsg={error} />
	}
	return (
		<>
			<Container className="">
				<Order />
			</Container>
		</>
	)
}

export default OrderPage
