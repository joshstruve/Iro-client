import React from 'react'
import { MdCheckCircle, MdCancel } from 'react-icons/md'

export default function ScoreBox({ correct_count, incorrect_count }) {
	return (
		<div className='word__score__box'>
			<div className='word__score__box__item'>
				<MdCheckCircle className='icon'/> {correct_count}
			</div>
			<div className='word__score__box__item'>
				<MdCancel className='icon'/> {incorrect_count}
			</div>
		</div>
	)
}
