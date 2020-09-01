import React from 'react'
import { MdCheckCircle, MdCancel } from 'react-icons/md'

export default function ScoreBox({ correct_count, incorrect_count }) {
	return (
		<div className='word__score__box'>
			<span>
				<MdCheckCircle /> {correct_count}
			</span>
			<MdCancel /> {incorrect_count}
		</div>
	)
}
