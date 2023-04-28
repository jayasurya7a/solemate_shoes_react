import React from 'react'
import Button from '../components/Button';

function Home() {
	return (
		<div className="flex items-center flex-row justify-items-center h-screen bg-hero bg-center bg-no-repeat " >
			<div className="p-5 m-2 max-w-md md:pl-20 max-w-lg">
			<h1 className="text-4xl text-white mb-2 lg: text-5xl">
			Sole Searching: Find Your Perfect Fit
			</h1>
			<p className="text-white mt-3">
			we're passionate about finding the perfect fit for you. Our wide range of sizes and styles ensures that you'll find the shoe that fits like a glove. Step up your comfort game and take a step in the right direction with our top-quality shoes.
			</p>
			<Button size={"18"} color={"white"}>Explore more -></Button>
			</div>
		</div>
	)
}

export default Home