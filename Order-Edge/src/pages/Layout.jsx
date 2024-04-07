import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
function Layout() {
	return (
		<Container className="">
			<Navbar />
			<Outlet />
			<Footer />
		</Container>
	)
}
export default Layout
