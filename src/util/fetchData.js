export async function fetchSummonerInfo() {
	let url =
		"https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/michuMF?api_key=RGAPI-8493f798-9e09-448b-afd1-0d669ccfea7c"

	const response = await fetch(url)

	if (!response.ok) {
		const error = new Error("An error occurred while fetching the events")
		error.code = response.status
		error.info = await response.json()
		throw error
	}
	const data = await response.json()
	console.log(data)
	return data
}

export async function fetchAllChampions() {
	let url =
		"https://ddragon.leagueoflegends.com/cdn/14.2.1/data/en_US/champion.json"

	const response = await fetch(url)

	if (!response.ok) {
		const error = new Error("An error occurred while fetching the events")
		error.code = response.status
		error.info = await response.json()
		throw error
	}
	const data = await response.json()
	const { data: champions } = data

	const championList = []
	for (const key in champions) {
		if (Object.hasOwnProperty.call(champions, key)) {
			const element = champions[key]

			championList.push(element)
		}
	}

	return championList
}

export async function fetchChampion(id) {
	let url = `https://ddragon.leagueoflegends.com/cdn/14.2.1/data/en_US/champion/${id}.json`

	const response = await fetch(url)

	if (!response.ok) {
		const error = new Error("An error occurred while fetching the events")
		error.code = response.status
		error.info = await response.json()
		throw error
	}
	const data = await response.json()

	const { data: champion } = data

	console.log(champion[id])
	console.log(champion[id].passive.image.full)

	const passive = champion[id]

	return passive
}
