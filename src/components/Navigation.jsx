import DesktopNavigation from "./Navigation/DesktopNavigation"
import MobileNavigation from "./Navigation/MobileNavigation"

const Navigation = () => {
	return (
		<header className='absolute top-0 left-0 right-0 z-30'>
			<nav className=''>
				<MobileNavigation />
				<DesktopNavigation />
			</nav>
		</header>
	)
}
export default Navigation
