const ChampionSkills = ({ spell, handleModal, index }) => {
	return (
		<button
			id={index}
			onClick={e => handleModal(e)}
			key={spell.name}
			className='ability-btn'>
			<p>{spell.id.slice(-1)}</p>
			<img
				className='cursor'
				src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${spell.image.full}`}
				alt=''
			/>
			<p className='text-center '>{spell.name}</p>
		</button>
	)
}
export default ChampionSkills
