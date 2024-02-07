import PropTypes from "prop-types"

const ChampionHeader = ({ params }) => {
	return (
		<div className='flex justify-center border shadow-md  shadow-black border-black text-black  py-4 px-8 rounded-lg'>
			<h2 className='text-center text-4xl font-thin'>{params.id}</h2>
		</div>
	)
}

ChampionHeader.propTypes = {
	params: PropTypes.node,
}
export default ChampionHeader
