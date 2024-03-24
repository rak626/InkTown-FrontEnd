import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import { fetchOrderByOrderId } from '../utils/apis'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import OrderTabs from '../components/OrderTabs'
import { addOrder } from '../features/orderSlice'

const OrderIdPage = () => {
	const dispatch = useDispatch()
	const { orderId } = useParams()
	const token = useSelector((state) => state.auth.token)
	const {data, isLoading, isError, isSuccess} = useQuery({
		queryKey: ['FindOrder', orderId],
		queryFn: () => fetchOrderByOrderId(orderId, token),
	})
	if(isSuccess){
		dispatch(addOrder(data))
	}
	if (isLoading) {
		return <Loading />
	}
	if (isError) {
		return <Error />
	}
	return (
		<Container>
			<OrderTabs/>
		</Container>
	)
}

export default OrderIdPage
