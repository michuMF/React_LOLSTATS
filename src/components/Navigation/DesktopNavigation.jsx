import { useContext } from "react"
import NavLinks from "./NavLinks"
import { NavigationTextColorContext } from "../../context/ContextColor"

const DesktopNavigation = () => {
	const { textColor } = useContext(NavigationTextColorContext)

	console.log(textColor)
	return (
		<ul
			className={`hidden sm:flex  justify-around gap-10  ${textColor} font-bold   px-1 text-3xl  md:text-4xl   py-5  `}>
			<NavLinks />
		</ul>
	)
}
export default DesktopNavigation
