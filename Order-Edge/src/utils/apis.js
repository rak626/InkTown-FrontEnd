import axios from 'axios'

const proxyUri = '/api'
export const fetchAllOrders = async () => {
	const res = await axios.get(proxyUri + '/order/getAll', {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return res.data
}

export const fetchAllOrderStatus = async () => {
	const res = await axios.get(proxyUri + '/order/getDisplayStatusList', {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return res.data
}

export const updateOrderStatus = async (data) => {
	const res = await axios.post(proxyUri + '/order/updateStatus', data, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return res.data
}

export const fetchAllOrdersBasedOnOrderStatus = async (orderStatus) => {
	if (parseInt(orderStatus) === -1) {
		return fetchAllOrders()
	}
	const res = await axios.get(proxyUri + '/order/getOrdersByStatus', {
		params: {
			orderStatus: parseInt(orderStatus),
		},
	})
	return res.data
}

export const createOrderPostReq = async (data) => {
	const res = await axios.post(proxyUri + '/order/create', data, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return res.data
}

export const fetchOrderByOrderId = async (orderId) => {
	const res = await axios.get(proxyUri + '/order/getById/' + orderId, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return res.data
}
export const fetchOrderLogsByOrderId = async (orderId) => {
	const res = await axios.get(proxyUri + '/order/getOrderLog/' + orderId, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return res.data
}

export const signUp = async (reqData) => {
	const res = await axios.post(proxyUri + '/authentication/signUp', reqData, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return res.data
}

export const signIn = async (reqData) => {
	const res = await axios.post(proxyUri + '/authentication/signIn', reqData, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return res.data
}
