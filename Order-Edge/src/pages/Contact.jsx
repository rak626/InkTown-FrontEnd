import { useState } from 'react'

function Contact() {
	return (
		<section className="container mx-auto px-10 contact-info bg-gray-100 p-8 rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
			<p className="text-gray-700 mb-6">
				Feel free to reach out using the following methods:
			</p>
			<ul className="list-none space-y-2">
				<li className="flex items-center">
					<span className="text-gray-500 mr-4">Email:</span>
					<span className="font-medium">your_email@example.com</span>
				</li>
				<li className="flex items-center">
					<span className="text-gray-500 mr-4">
						Phone (Optional):
					</span>
					<span className="font-medium">(555) 555-5555</span>
				</li>
			</ul>
			<p className="text-gray-700 mt-6">
				We also have a presence on social media!
			</p>
			<ul className="social-media flex space-x-4 mt-4">
				<li>
					<a href="#" className="text-blue-500 hover:text-blue-700">
						Link to Facebook Page
					</a>
				</li>
				<li>
					<a href="#" className="text-blue-500 hover:text-blue-700">
						Link to Twitter Profile
					</a>
				</li>
			</ul>
		</section>
	)
}

export default Contact
