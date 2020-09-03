import React from 'react'
// import ItemImage from '../../DashboardList/item-components/ItemImage'

export default function Question({ nextWord, hex, script }) {
	if (nextWord) {
		nextWord = nextWord.toLowerCase()
	}
	return (
		<section className='question'>
			<h2>{nextWord}</h2>
			{/* <ItemImage hex={hex} script={script} /> */}
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
