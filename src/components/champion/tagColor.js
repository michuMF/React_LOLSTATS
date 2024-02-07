export const TagColorChange = (tag, tagColor, type) => {
	if (type === "button") {
		const buttonShape =
			"rounded-lg border-none p-2 px-2 text-md shadow  font-bold "
		if (tag === "Assassin") {
			tagColor = ` bg-assassin  ${buttonShape} `
		}
		if (tag === "Mage") {
			tagColor = `${buttonShape} bg-mage  border `
		}
		if (tag === "Marksman") {
			tagColor = `${buttonShape} bg-marksman   `
		}
		if (tag === "Support") {
			tagColor = `${buttonShape} bg-support  `
		}
		if (tag === "Tank") {
			tagColor = `${buttonShape} bg-tank   `
		}
		if (tag === "Fighter") {
			tagColor = `${buttonShape} bg-fighter  `
		}
		if (tag === "Support") {
			tagColor = `${buttonShape} bg-support   `
		}
	}

	if (type === "background") {
		if (tag === "Assassin") {
			tagColor = ` bg-assassin  `
		}
		if (tag === "Mage") {
			tagColor = ` bg-mage  bg-  `
		}
		if (tag === "Marksman") {
			tagColor = ` bg-marksman   `
		}
		if (tag === "Support") {
			tagColor = ` bg-support   `
		}
		if (tag === "Tank") {
			tagColor = ` bg-tank   `
		}
		if (tag === "Fighter") {
			tagColor = ` bg-fighter   `
		}
	}

	return tagColor
}
