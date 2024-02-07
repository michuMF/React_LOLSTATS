import { useState } from "react"

function useOpenModal(data) {
	const [modalState, setModalState] = useState({
		open: false,
		name: null,
		image: null,
		description: null,
		isPassive: false,
	})

	const handleModal = e => {
		if (e.target.firstChild.textContent === "Passive") {
			setModalState({
				open: true,
				name: e.target.lastChild.textContent,
				description: data?.passive?.description,
				image: data?.passive?.image.full,
				isPassive: true,
			})
		} else {
			setModalState({
				open: true,
				name: e.target.lastChild.textContent,
				description: data?.spells[e.target.id].description,
				image: data?.spells[e.target.id].image.full,
				isPassive: false,
			})
		}
	}
	return {
		modalState,
		handleModal,
		setModalState,
	}
}

export default useOpenModal
