import React from 'react'

export default function Question({ nextWord }) {
	if (nextWord) {
		nextWord = nextWord.toLowerCase()
	}
	return (
		<section className='question'>
			<h2>{nextWord}</h2>
			<div>(Watashi no sukinairo wa ...desu.)</div>
		</section>
	)
}
