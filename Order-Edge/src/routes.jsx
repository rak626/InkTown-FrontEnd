import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import {
    Order,
    Layout,
    Login,
    Profile,
    Customer,
    Product,
    Report,
    Signup,
    Home,
} from './pages'
import OrderFlow from './pages/OrderFlow'
import CreateOrderPage from './pages/CreateOrderPage'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='orders' element={<Order />} />
            <Route path='orders/:orderId' element={<OrderFlow />} />
            <Route path='orders/createOrder' element={<CreateOrderPage />} />
            <Route path='customers' element={<Customer />} />
            <Route path='products' element={<Product />} />
            <Route path='reports' element={<Report />} />
            <Route path='customers' element={<Customer />} />
            <Route path='profile' element={<Profile />} />
            <Route path='logout' element={<Login />} />
            <Route path='signup' element={<Signup />} />
        </Route>
    )
)

export default router
