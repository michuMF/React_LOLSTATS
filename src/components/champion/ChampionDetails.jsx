import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { fetchChampion } from "../../util/fetchData"
import Modal from "../../UI/Modal"
import { useContext, useState } from "react"
import Loading from "../../UI/Loading"
import Error from "../../UI/Error"
import { TagColorChange } from "./tagColor"
import { NavigationTextColorContext } from "../../context/ContextColor"

const abilityCss =
	"flex justify-center flex-col items-center gap-2 bg-black text-white text-xl font-thin flex-1 rounded-lg  py-2  px-6 text-sm hover:bg-white focus:bg-white focus:border focus:border-black  focus:text-black hover:border    hover:text-black cursor-pointer hover:border-2 hover:border-black hover:transform hover:scale-105"
const ChampionDetails = () => {
	const { setTextColor } = useContext(NavigationTextColorContext)
	const [modalState, setModalState] = useState({
		open: false,
		name: null,
		image: null,
		description: null,
		isPassive: false,
	})
	const { data, isLoading, isError } = useQuery({
		queryKey: ["champion"],
		queryFn: () => fetchChampion(params.id),
	})
	const params = useParams()

	const handleModal = e => {
		if (e.target.firstChild.textContent === "Passive") {
			setModalState({
				open: true,
				name: e.target.lastChild.textContent,
				description: data?.passive?.description,
				image: data?.passive?.image.full,
				isPassive: true,
			})
		} else {
			setModalState({
				open: true,
				name: e.target.lastChild.textContent,
				description: data?.spells[e.target.id].description,
				image: data?.spells[e.target.id].image.full,
				isPassive: false,
			})
		}
	}

	const tags = data?.tags[0]
	let bgColor = ""
	bgColor = TagColorChange(tags, bgColor, "background")
	setTextColor(TagColorChange(tags, bgColor, "state"))
	if (isLoading) {
		return <Loading />
	}
	if (isError) {
		return <Error />
	}
	return (
		<div
			className={
				bgColor ? ` flex flex-col  h-screen ${bgColor}` : "flex flex-col h-screen"
			}>
			<div className='flex flex-col items-center gap-4 text-center mt-24  '>
				<div className='flex justify-center border shadow-md  shadow-black border-black text-black  py-4 px-8 rounded-lg'>
					<h2 className='text-center text-4xl font-thin'>{params.id}</h2>
				</div>
				<div className=' m-auto'>
					<img
						className='rounded-xl max-h-[500px]'
						src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data?.id}_0.jpg`}
						alt=''
					/>
				</div>
				{modalState.open && <Modal data={modalState} setData={setModalState} />}

				<div className='flex flex-wrap w-full justify-around gap-2 px-4 '>
					<button onClick={e => handleModal(e)} className={abilityCss}>
						<p>Passive</p>
						<div className='flex justify-center flex-col items-center'>
							<img
								src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/passive/${data?.passive.image.full}`}
								alt='Passive skill'
							/>
						</div>
						<p>{data?.passive.name}</p>
					</button>

					{data?.spells.map((spell, index) => (
						<button
							id={index}
							onClick={e => handleModal(e)}
							key={spell.name}
							className={abilityCss}>
							<p>{spell.id.slice(-1)}</p>
							<img
								src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${spell.image.full}`}
								alt=''
							/>
							<p className='text-center '>{spell.name}</p>
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
export default ChampionDetails
