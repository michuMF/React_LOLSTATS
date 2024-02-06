import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { TagColorChange } from "./tagColor"
const Champion = ({ name, title, tags, image, id }) => {
	function onClick() {
		console.log(name)
	}

	const tagHandler = e => {
		console.log(e.target.textContent)
	}
	return (
		<>
			<div className='rounded-lg bg-black text-white text-xl text-center py-4  flex flex-col items-center justify-center w-3/4 md:w-1/3 lg:w-1/4 xl:w-1/5 gap-4 '>
				<Link
					to={`/champions/${id}`}
					onClick={onClick}
					tabIndex='0'
					role='button'
					className=' flex gap-2 flex-1 flex-col items-center p-2 rounded-lg cursor-pointer  focus:border-red-300 focus:border-4 '
					onKeyDown={e => {
						if (e.key === "Enter") {
							onClick()
						}
					}}>
					<h2 className='text-3xl font-bold  '>{name}</h2>
					<img
						src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${image}`}
						alt='champion loading icon'
					/>
					<h3>{title}</h3>
				</Link>
				<div className='flex flex-wrap  gap-2'>
					{tags?.map(tag => {
						let tagColor = ``

						tagColor = TagColorChange(tag, tagColor, "button")

						return (
							<button className={tagColor} onClick={e => tagHandler(e)} key={tag}>
								{tag}
							</button>
						)
					})}
				</div>
			</div>
		</>
	)
}

Champion.propTypes = {
	name: PropTypes.node,
	blurb: PropTypes.node,
	title: PropTypes.node,
	id: PropTypes.node,
	tags: PropTypes.node,
	image: PropTypes.node,
}
export default Champion
