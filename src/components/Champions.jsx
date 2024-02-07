import { useQuery } from "react-query"
import { fetchAllChampions } from "../util/fetchData"
import Champion from "./champion/Champion"

import { useEffect, useRef, useState } from "react"
import SearchChampion from "./champion/SearchChampion"
import Loading from "../UI/Loading"
import Error from "../UI/Error"

const Champions = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["champions"],
		queryFn: () => fetchAllChampions(),
	})
	const inputRef = useRef()
	const [filter, setFilter] = useState([])

	useEffect(() => {
		if (data) {
			setFilter(data)
		}
	}, [data])

	const changeHandler = e => {
		const filterArray = data?.filter(champion => {
			return (
				champion.name.toLowerCase().includes(e.target.value) ||
				champion.name.includes(e.target.value) ||
				champion.name.toUpperCase().includes(e.target.value)
			)
		})
		setFilter(filterArray)
	}

	if (isLoading) {
		return <Loading />
	}
	if (isError) {
		return <Error />
	}
	return (
		<div className='flex flex-col min-h-screen bg-black '>
			<SearchChampion changeHandler={changeHandler} inputRef={inputRef} />
			<ul className='flex flex-wrap gap-10 items-center justify-center'>
				{filter?.map(champion => {
					return (
						<Champion
							key={champion.id}
							name={champion.name}
							image={champion.image.full}
							tags={champion.tags}
							blurb={champion.blurb}
							title={champion.title}
							id={champion.id}
						/>
					)
				})}
			</ul>
		</div>
	)
}
export default Champions
