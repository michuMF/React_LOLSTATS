import PropTypes from "prop-types"

const ChampionPassiveSkill = ({ data, handleModal }) => {
	return (
		<button onClick={e => handleModal(e)} className={`ability-btn`}>
			<p>Passive</p>
			<div className='flex justify-center flex-col items-center'>
				<img
					src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/passive/${data?.passive.image.full}`}
					alt='Passive skill'
				/>
			</div>
			<p>{data?.passive.name}</p>
		</button>
	)
}
ChampionPassiveSkill.propTypes = {
	data: PropTypes.object,
	handleModal: PropTypes.func,
}
export default ChampionPassiveSkill
