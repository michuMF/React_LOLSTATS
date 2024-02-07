import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"

const Root = () => {
	return (
		<>
			<Navigation />

			<main>
				<Outlet />
			</main>
		</>
	)
}
export default Root
