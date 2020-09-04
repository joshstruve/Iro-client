import React from 'react'
import LearningImage from './LearningImage'

export default function Question({ nextWord, hex, script }) {
	if (nextWord) {
		nextWord = nextWord.toLowerCase()
	}
	return (
		<section className='question'>
			<h2>{nextWord}</h2>
			{hex && script && <LearningImage hex={hex} script={script} />}
			<div className='spacer-v'></div>
			<p>
				Watashi no sukinairo wa ___desu.
			</p>
			<p>
				(My favorite color is {nextWord}.)
			</p>
		</section>
	)
}
