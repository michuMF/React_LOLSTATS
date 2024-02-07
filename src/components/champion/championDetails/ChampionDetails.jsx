import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { fetchChampion } from "../../../util/fetchData"
import Modal from "../../../UI/Modal"
import Loading from "../../../UI/Loading"
import Error from "../../../UI/Error"
import { TagColorChange } from "../tagColor"
import ChampionHeader from "./championHeader"
import ChampionImage from "./ChampionImage"
import ChampionPassiveSkill from "./ChampionPassiveSkill"
import ChampionSkills from "./ChampionSkills"
import useOpenModal from "../../../hooks/useOpenModal"

const ChampionDetails = () => {
	const params = useParams()
	const { data, isLoading, isError } = useQuery({
		queryKey: ["champion"],
		queryFn: () => fetchChampion(params.id),
	})

	const { modalState, handleModal, setModalState } = useOpenModal(data)

	const tags = data?.tags[0]
	let bgColor = ""
	bgColor = TagColorChange(tags, bgColor, "background")

	if (isLoading) {
		return <Loading />
	}
	if (isError) {
		return <Error />
	}
	return (
		<div className={bgColor ? ` screen ${bgColor}` : "flex screen"}>
			<div className='flex flex-col items-center gap-4 text-center mt-28 '>
				<ChampionHeader params={params} />
				<ChampionImage data={data} />
				{modalState.open && (
					<Modal bgColor={bgColor} data={modalState} setData={setModalState} />
				)}
				<div className='flex flex-wrap w-full justify-around gap-2 px-4 '>
					<ChampionPassiveSkill data={data} handleModal={handleModal} />
					{data?.spells.map((spell, index) => (
						<ChampionSkills
							key={spell.id}
							index={index}
							spell={spell}
							handleModal={handleModal}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
export default ChampionDetails
