import NavLinks from "./NavLinks"

const DesktopNavigation = () => {
	return (
		<ul
			className={`hidden sm:flex justify-around   text-white font-bold    text-3xl  md:text-4xl   py-5   `}>
			<NavLinks />
		</ul>
	)
}
export default DesktopNavigation
