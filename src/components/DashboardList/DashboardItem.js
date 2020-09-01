import React from 'react'

export default function DashboardItem({ word }) {
	const {
		original,
		translation,
		correct_count,
		incorrect_count,
		hex,
		script = 'black.svg',
	} = word
	return (
		<div className='word__item__container'>
			<div className='word__text'>
				<p>{translation}</p> <p>{original}</p>
			</div>
			<div className='word__info'>
				<p>
					Accuracy: {correct_count}/{incorrect_count}%
				</p>
			</div>
			<div className='word__score__box'>
				<span>
					<>icon</> {correct_count}
				</span>
				<>icon</> {incorrect_count}
			</div>
			<div className='img__container'>
				<div
					className='color'
					style={{ backgroundColor: hex }}
				>
					<img
						src={require(`../../img/kana/${script}`)}
						alt='Japanese "Kana" script'
					/>
				</div>
			</div>
		</div>
	)
}
