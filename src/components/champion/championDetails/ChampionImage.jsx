import PropTypes from "prop-types"

const ChampionImage = ({ data }) => {
	return (
		<div className=' m-auto'>
			<img
				className='rounded-xl max-h-[500px]'
				src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data?.id}_0.jpg`}
				alt=''
			/>
		</div>
	)
}

ChampionImage.propTypes = {
	data: PropTypes.node,
}

export default ChampionImage
