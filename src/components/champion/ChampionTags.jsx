import PropTypes from "prop-types"
const ChampionTags = ({ tag, tagColor }) => {
	return (
		<button className={tagColor} key={tag}>
			{tag}
		</button>
	)
}

ChampionTags.propTypes = {
	tag: PropTypes.node,
	tagColor: PropTypes.node,
}
export default ChampionTags
