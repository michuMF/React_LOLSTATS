import { NavLink } from "react-router-dom"
const navCss = "text-orange-500"

const NavLinks = () => {
	return (
		<>
			<li className='    py-4  text-center'>
				<NavLink to='/' className={({ isActive }) => (isActive ? `${navCss}` : "")}>
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
		</>
	)
}
export default NavLinks
