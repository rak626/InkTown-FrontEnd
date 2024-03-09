import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import {
    Home,
    Layout,
    Order,
    Profile
} from './pages'
import About from './pages/About'
import Contact from './pages/Contact'
import CreateOrderPage from './pages/CreateOrderPage'
import OrderFlow from './pages/OrderFlow'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='orders' element={<Order />} />
            <Route path='orders/:orderId' element={<OrderFlow />} />
            <Route path='orders/createOrder' element={<CreateOrderPage />} />
            {/* <Route path='customers' element={<Customer />} />
            <Route path='products' element={<Product />} />
            <Route path='reports' element={<Report />} /> */}
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='profile' element={<Profile />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='logout' element />
            <Route path='signup' element={<SignupPage />} />
        </Route>
    )
)
export default router
