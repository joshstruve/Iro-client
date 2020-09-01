import React from 'react'

export default function Text({ translation, original }) {
	return (
		<div className='word__text'>
			<p>{translation}</p> <p>{original}</p>
		</div>
	)
}
