import PropTypes from "prop-types"

import { TagColorChange } from "./tagColor"
import ChampionLink from "./ChampionLink"
import ChampionTags from "./ChampionTags"
const Champion = ({ name, title, tags, image, id }) => {
	return (
		<>
			<div className='rounded-lg bg-black text-white text-xl text-center py-4  flex flex-col items-center justify-center w-3/4 md:w-1/3 lg:w-1/4 xl:w-1/5 gap-4 '>
				<ChampionLink name={name} title={title} image={image} id={id} />
				<div className='flex flex-wrap  gap-2'>
					{tags?.map(tag => {
						let tagColor = ``
						tagColor = TagColorChange(tag, tagColor, "button")

						return <ChampionTags key={tag} tag={tag} tagColor={tagColor} />
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
