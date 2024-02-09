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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='orders' element={<Order />} />
            <Route path='customers' element={<Customer />} />
            <Route path='products' element={<Product />} />
            <Route path='reports' element={<Report />} />
            <Route path='customers' element={<Customer />} />
            <Route path='profile' element={<Profile />} />
            <Route path='logout' element={<Login />} />
            <Route path='singup' element={<Signup />} />
        </Route>
    )
)

export default router
