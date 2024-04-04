import OrderHeader from './OrderHeader'
import Orderlist from './Orderlist'

function Order() {
	return (
		<div className="container mx-auto pt-8 bg-slate-300">
			<OrderHeader />
			<div className="flex flex-col gap-6">
				<Orderlist />
			</div>
		</div>
	)
}

export default Order
