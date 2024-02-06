import { IoIosClose } from "react-icons/io"
const CloseButton = ({ css, onClick }) => {
	return (
		<button onClick={onClick}>
			<IoIosClose className={css} />
		</button>
	)
}
export default CloseButton
