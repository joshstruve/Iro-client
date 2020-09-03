import React from 'react'

export default function Question({ nextWord, hex, script }) {
	if (nextWord) {
		nextWord = nextWord.toLowerCase()
	}
	return (
		<section className='question'>
			<h2>{nextWord}</h2>
			<div style={{ backgroundColor: hex }}>
				(Watashi no sukinairo wa ___desu. {hex})
			</div>
		</section>
	)
}
