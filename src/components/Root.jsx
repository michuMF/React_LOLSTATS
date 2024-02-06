import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import ContextColorProvider from "../context/ContextColor"

const Root = () => {
	return (
		<>
			<ContextColorProvider>
				<Navigation />

				<main>
					<Outlet />
				</main>
			</ContextColorProvider>
		</>
	)
}
export default Root
