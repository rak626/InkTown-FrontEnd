import  { useState } from 'react'
import OrderDetails from './OrderDetails'
import OrderFlow from './OrderFlow'
import Assign from './Assign'

const tabs = ['Order Details', 'Timeline', 'Assigning']

function OrderTabs() {
	const [activeTab, setActiveTab] = useState(tabs[0])

	const handleClick = (tab) => {
		setActiveTab(tab)
	}
	return (
		<div className=" flex flex-col gap-10">
			<div className="p-4 flex items-center">
				{tabs.map((tab) => (
					<button
						key={tab}
						className={`px-3 py-2 mr-2 font-medium rounded-md ${
							activeTab === tab
								? 'bg-blue-300 text-gray-800'
								: 'text-gray-500'
						}`}
						onClick={() => handleClick(tab)}
					>
						{tab}
					</button>
				))}
			</div>
			<div className="bg-gray-200 p-4">
				{activeTab === tabs[0] && <OrderDetails />}
				{activeTab === tabs[1] && <OrderFlow />}
				{activeTab === tabs[2] && <Assign />}
			</div>
		</div>
	)
}

export default OrderTabs
