import axios from 'axios'

const proxyUri = '/api'
const prepareHeaders = (token) => {
	return token
		? {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		}
		: {
			'Content-Type': 'application/json',
		}
}

export const fetchAllOrders = async (token) => {
	const res = await axios.get(proxyUri + '/order/getAll', {
		headers: prepareHeaders(token),
	})
	return res.data
}

export const fetchAllOrderStatus = async (token) => {
	const res = await axios.get(proxyUri + '/order/getDisplayStatusList', {
		headers: prepareHeaders(token),
	})
	return res.data
}

export const updateOrderStatus = async (data, token) => {
	const res = await axios.post(proxyUri + '/order/updateStatus', data, {
		headers: prepareHeaders(token),
	})
	return res.data
}

export const fetchAllOrdersBasedOnOrderStatus = async (orderStatus, token) => {
	if (parseInt(orderStatus) === -1) {
		return fetchAllOrders(token)
	}
	const res = await axios.get(proxyUri + '/order/getOrdersByStatus', {
		params: {
			orderStatus: parseInt(orderStatus),
		},
		headers: prepareHeaders(token),
	})
	return res.data
}

export const fetchAllOrdersBasedOnOrderStatusAndUserId = async ( orderStatus, userId, token) => {
	const res = await axios.get(proxyUri + '/order/getOrdersByStatusAndUserId', {
		params: {
			orderStatus: parseInt(orderStatus),
            userId: userId
		},
		headers: prepareHeaders(token),
	})
	return res.data
}

export const createOrderPostReq = async (data, token) => {
	const res = await axios.post(proxyUri + '/order/create', data, {
		headers: prepareHeaders(token),
	})
	return res.data
}

export const fetchOrderByOrderId = async (orderId, token) => {
	const res = await axios.get(proxyUri + '/order/getById/' + orderId, {
		headers: prepareHeaders(token),
	})
	return res.data
}
export const fetchOrderLogsByOrderId = async (orderId, token) => {
	const res = await axios.get(proxyUri + '/order/getOrderLog/' + orderId, {
		headers: prepareHeaders(token),
	})
	return res.data
}

export const signUp = async (reqData) => {
	const res = await axios.post(proxyUri + '/authentication/signUp', reqData, {
		headers: prepareHeaders(),
	})
	return res.data
}

export const signIn = async (reqData) => {
	const res = await axios.post(proxyUri + '/authentication/signIn', reqData, {
		headers: prepareHeaders(),
	})
	return res.data
}
