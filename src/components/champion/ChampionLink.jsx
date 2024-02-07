import { Link } from "react-router-dom"
import PropTypes from "prop-types"
const ChampionLink = ({ image, title, name, id }) => {
	return (
		<Link
			to={`/champions/${id}`}
			tabIndex='0'
			role='button'
			className=' flex gap-2 flex-1 flex-col items-center p-2 rounded-lg cursor-pointer  focus:border-red-300 focus:border-4 '
			onKeyDown={e => {
				if (e.key === "Enter") {
					e.currentTarget.click()
				}
			}}>
			<h2 className='text-3xl font-bold  '>{name}</h2>
			<img
				src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${image}`}
				alt='champion loading icon'
			/>
			<h3>{title}</h3>
		</Link>
	)
}

ChampionLink.propTypes = {
	image: PropTypes.node,
	title: PropTypes.node,
	name: PropTypes.node,
	id: PropTypes.node,
}
export default ChampionLink
