import { useState } from "react"
import { IoMenuSharp } from "react-icons/io5"
import { NavLink } from "react-router-dom"
const navCss = "p-2 px-4 border-orange-400 border-4 rounded-md"
const MobileNavigation = () => {
	const [showNavigation, setShowNavigation] = useState(false)
	return (
		<>
			<nav className='sm:hidden'>
				<div className='flex items-center justify-between  m-4 '>
					<button onClick={() => setShowNavigation(!showNavigation)}>
						<IoMenuSharp className='text-6xl text-orange-300 sm:hidden ' />
					</button>
					<h1 className=' text-4xl md:text-6xl lg:text-8xl   font-bold text-orange-300'>
						LEAGUE OF LEGENDS
					</h1>
				</div>

				{showNavigation && (
					<ul
						className=' bg-black text-orange-300 font-bold text-3xl
  py-20  '>
						<li
							className='    py-4  text-center
   '>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? `${navCss}` : "")}>
								Home
							</NavLink>
						</li>
						<li className='  py-4  text-center'>
							<NavLink
								to='/champions'
								className={({ isActive }) => (isActive ? `${navCss}` : "")}>
								Champions
							</NavLink>
						</li>
						<li className='  py-4 text-center'>
							<NavLink
								to='/summoner'
								className={({ isActive }) => (isActive ? `${navCss}` : "")}>
								Summoner
							</NavLink>
						</li>
					</ul>
				)}
			</nav>
		</>
	)
}
export default MobileNavigation
