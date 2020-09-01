import React from 'react'

export default function Info({ score }) {
	if (isNaN(score)) {
		score = 0
	}
	return (
		<div className='word__info'>
			<p>Accuracy: {score}%</p>
		</div>
	)
}
