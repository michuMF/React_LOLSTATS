import { createContext, useState } from "react"

export const NavigationTextColorContext = createContext({
	textColor: "",
	setTextColor: () => {},
})

export default function ContextColorProvider({ children }) {
	const [textColor, setTextColor] = useState("text-orange-300")

	function setNewColor(color) {
		setTextColor(color)
	}

	const ctxValue = {
		textColor,
		setTextColor: setNewColor,
	}

	return (
		<NavigationTextColorContext.Provider value={ctxValue}>
			{children}
		</NavigationTextColorContext.Provider>
	)
}
