import Logo from '/InkTownLogo.svg'
function About() {
	return (
		<section className="about-us container mx-auto py-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
				<div className="about-us__content">
					<h2 className="text-3xl font-bold mb-4">Our Story</h2>
					<p className="text-gray-700 leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas metus magna, dictum sit amet dolor non,
						pulvinar porta lorem. Sed posuere consectetur est at
						lobortis. Praesent sapien massa, convallis a pharetra
						eget, vestibulum at eros. Aenean eu leo quam.
						Pellentesque ornare sem lacinia quam venenatis
						vestibulum. Sed posuere consectetur est at lobortis.
					</p>
					<p className="text-gray-700 leading-relaxed mt-4">
						Curabitur blandit tempus porttitor. Donec id elit ut
						dolor malesuada ullamcorper. Morbi leo risus, porta ac
						consectetur ac, visac sit amet amet. Aliquam erat
						volutpat. Vivamus magna massa, molestie a diam eu,
						finibus gravida nibh. Nullam quis semper leo.
					</p>
					<a
						href="#"
						className="btn mt-8 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
					>
						Learn More
					</a>
				</div>
				<div className="about-us__image relative w-96 justify-self-end">
					<img
						src={Logo}
						alt="About Us Image"
						className="rounded-3xl shadow-lg"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-500 opacity-50 rounded-3xl"></div>
				</div>
			</div>
		</section>
	)
}

export default About
