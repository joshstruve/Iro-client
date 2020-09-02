import React from 'react'
import { MdCheckCircle, MdCancel } from 'react-icons/md'

export default function Score({
	wordCorrectCount,
	wordIncorrectCount,
}) {
	return (
		<div className='learning-score'>
			<div className='learning-score-box-item'>
				<MdCheckCircle className='icon'/>
				<span>{wordCorrectCount}</span>
			</div>
			<div className='learning-score-box-item'>
				<MdCancel className='icon'/>
				<span>{wordIncorrectCount}</span>
			</div>
		</div>
	)
}
