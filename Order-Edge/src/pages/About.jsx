import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { fetchAllOrders } from '../utils/apis'

const About = () => {
	const resObj = useQuery({
		queryKey: ['allOrders'],
		queryFn: fetchAllOrders,
	})
	return (
		<div>
			About
			<div className="w-full">{}</div>
		</div>
	)
}

export default About
