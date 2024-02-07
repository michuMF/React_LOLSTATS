import CloseButton from "./closeButton"
const Modal = ({ data, setData, bgColor }) => {
	let checkPassive = ""
	data.isPassive ? (checkPassive = "passive") : (checkPassive = "spell")

	return (
		<dialog
			open={data.open}
			className={`w-4/5 md:w-1/2 lg:w-1/3 mt-28 rounded-lg  flex flex-col items-center gap-5 border ${bgColor} text-white p-2 md:p-4 lg:p-8 `}>
			<CloseButton
				css='text-3xl absolute -top-2 -right-2 bg-white rounded-full text-black'
				onClick={() => setData({ ...data, open: false })}
			/>
			<h2 className='text-3xl'>{data.name}</h2>

			<img
				src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/${checkPassive}/${data.image}`}
				alt='Passive skill'
			/>
			<p className='text-sm '>{data.description}</p>
		</dialog>
	)
}
export default Modal
