export const TagColorChange = (tag, tagColor, type) => {
	if (type === "button") {
		const buttonShape = "rounded-lg  p-2 px-2"
		if (tag === "Assassin") {
			tagColor = ` bg-assassin  border-black border ${buttonShape} `
		}
		if (tag === "Mage") {
			tagColor = `${buttonShape} bg-mage  border-black border `
		}
		if (tag === "Marksman") {
			tagColor = `${buttonShape} bg-marksman  border-black border `
		}
		if (tag === "Support") {
			tagColor = `${buttonShape} bg-support  border-black border `
		}
		if (tag === "Tank") {
			tagColor = `${buttonShape} bg-tank  border-black border `
		}
		if (tag === "Fighter") {
			tagColor = `${buttonShape} bg-fighter  border-black border `
		}
		if (tag === "Support") {
			tagColor = `${buttonShape} bg-support  border-black border `
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

	if (type === "state") {
		if (tag === "Assassin") {
			tagColor = `   text-mage  `
		}
		if (tag === "Mage") {
			tagColor = `  text-assassin  `
		}
		if (tag === "Marksman") {
			tagColor = `  text-support  `
		}
		if (tag === "Support") {
			tagColor = `   text-marksman   `
		}
		if (tag === "Tank") {
			tagColor = `  text-fighter   `
		}
		if (tag === "Fighter") {
			tagColor = ` text-tank   `
		}
	}

	return tagColor
}
