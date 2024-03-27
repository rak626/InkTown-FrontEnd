import { Link } from 'react-router-dom'
import HeroSectionImage from '/hero.jpg'
import Button from '../components/Button'
import { useSelector } from 'react-redux'

function Home() {
	const authentication = useSelector((state) => state.auth.isAuthenticated)
	return (
		<div className="hero-section bg-gray-200 py-16 text-center h-full">
			<div className="max-w-full mx-auto flex items-center">
				<div className="flex-1 px-4">
					<h1 className="text-4xl mb-5 font-serif text-gray-800">
						Express Yourself,{' '}
						<span className="highlight">One Print at a Time.</span>
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						InkTown brings your ideas to life with high-quality,
						custom printing on T-shirts, mementos, and more. Unleash
						your creativity and let your colors shine.
					</p>
					<Link
						to={authentication ? '/orders/createOrder' : '/login'}
					>
						<Button className="bg-red-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-800 transition duration-300">
							Start Creating
						</Button>
					</Link>
				</div>
				<div className="flex-1 relative">
					<img
						src={HeroSectionImage}
						alt="InkTown printing"
						className="w-full rounded-lg overflow-hidden"
						style={{
							animation:
								'float 6s ease-in-out infinite alternate',
						}}
					/>
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
				</div>
			</div>
		</div>
	)
}

export default Home
