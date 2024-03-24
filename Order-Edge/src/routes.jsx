import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import LoginPage from './pages/LoginPage'
import OrderTablePage from './pages/OrderTablePage'
import SignupPage from './pages/SignupPage'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateOrderPage from './pages/CreateOrderPage'
import OrderIdPage from './pages/OrderIdPage'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Navigate to="/home" replace />} />
			<Route path="home" element={<Home />} />
			<Route path="orders" element={<OrderTablePage />} />
			<Route path="orders/:orderId" element={<OrderIdPage />} />
			<Route path="orders/createOrder" element={<CreateOrderPage />} />
			{/* <Route path='customers' element={<Customer />} />
            <Route path='products' element={<Product />} />
            <Route path='reports' element={<Report />} /> */}
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="profile" element={<Profile />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="logout" element />
			<Route path="signup" element={<SignupPage />} />
		</Route>
	)
)
export default router
