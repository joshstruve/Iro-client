import React from 'react'

export default function Question({ nextWord }) {
	if (nextWord) {
		nextWord = nextWord.toLowerCase()
	}
	return (
		<section>
			<h2>Watashi no sukinairo wa</h2>
			<div>My favorite color is {nextWord}</div>
		</section>
	)
}
