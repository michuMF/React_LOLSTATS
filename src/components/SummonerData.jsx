import { useQuery } from "react-query"
import { fetchSummonerInfo } from "../util/fetchData"

const SummonerData = () => {
	const {
		data: summonerData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["summonerInfo"],
		queryFn: fetchSummonerInfo,
	})

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>Error</p>
	}
	return (
		<div className=' rounded-lg bg-black text-white text-xl text-center p-2 mx-20 mt-28 '>
			<h2>{summonerData?.name}</h2>
			<p className='my-5'>id: {summonerData?.id}</p>
			<p>puuid: {summonerData.puuid}</p>
			<p className='my-5'> account id: {summonerData.accountId}</p>
			<p>level: {summonerData.summonerLevel}</p>
			<p> profile icon id: {summonerData.profileIconId}</p>
		</div>
	)
}
export default SummonerData
