import React from 'react'

export default function Question({ nextWord }) {
	if (nextWord) {
		nextWord = nextWord.toLowerCase()
	}
	return (
		<section className='question'>
			<h2>Watashi no sukinairo wa ...desu.</h2>
			<div>(My favorite color is <i>{nextWord}</i>.)</div>
		</section>
	)
}
