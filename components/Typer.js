"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typer({ content }) {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				content,
				1000, // wait 1s before replacing "Mice" with "Hamsters"
			]}
			wrapper="span"
			speed={15}
			style={{ fontSize: "2em", display: "inline-block" }}
			repeat={Infinity}
		/>
	);
}
