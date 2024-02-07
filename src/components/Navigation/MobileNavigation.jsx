import { useState } from "react"
import { IoMenuSharp } from "react-icons/io5"

import NavLinks from "./NavLinks"

const MobileNavigation = () => {
	const [showNavigation, setShowNavigation] = useState(false)
	return (
		<>
			<nav className='sm:hidden bg-black mt-1 mx-1 rounded-lg  border-white border '>
				<div className='flex items-center justify-between  p-5 '>
					<button onClick={() => setShowNavigation(!showNavigation)}>
						<IoMenuSharp className='text-6xl text-white sm:hidden ' />
					</button>
					<h1 className=' text-4xl md:text-6xl lg:text-8xl   font-bold text-white'>
						LEAGUE OF LEGENDS
					</h1>
				</div>

				{showNavigation && (
					<ul
						className=' z-10  text-white  font-bold text-3xl flex flex-col items-center justify-center py-5 gap-3
    '>
						<NavLinks />
					</ul>
				)}
			</nav>
		</>
	)
}
export default MobileNavigation
