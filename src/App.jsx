import { QueryClient, QueryClientProvider } from "react-query"
import SummonerData from "./components/SummonerData"
import Champions from "./components/Champions"
import ChampionDetails from "./components/champion/ChampionDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Root from "./components/Root"
const queryClient = new QueryClient()

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{
					index: true,

					element: <Home />,
				},
				{
					path: "/champions",
					element: <Champions />,
				},
				{
					path: "/summoner",
					element: <SummonerData />,
				},
				{
					path: "/champions/:id",
					element: <ChampionDetails />,
				},
			],
		},
	])
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	)
}

export default App
