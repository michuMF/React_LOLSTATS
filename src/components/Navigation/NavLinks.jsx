import { NavLink } from "react-router-dom"
const navCss = "text-[#1E1926]"

const NavLinks = () => {
	return (
		<>
			<NavLink to='/' className={({ isActive }) => (isActive ? `${navCss}` : "")}>
				Home
			</NavLink>

			<NavLink
				to='/champions'
				className={({ isActive }) => (isActive ? `${navCss}` : "")}>
				Champions
			</NavLink>

			<NavLink
				to='/summoner'
				className={({ isActive }) => (isActive ? `${navCss}` : "")}>
				Summoner
			</NavLink>
			<NavLink
				to='/summoner'
				className={({ isActive }) => (isActive ? `${navCss}` : "")}>
				Summoner
			</NavLink>
		</>
	)
}
export default NavLinks
