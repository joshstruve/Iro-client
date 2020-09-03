import React from 'react'
import Text from './item-components/Text'
import Info from './item-components/Info'
import ScoreBox from './item-components/ScoreBox'
import ItemImage from './item-components/ItemImage'

export default function DashboardItem({ word }) {
	const {
		original,
		translation,
		correct_count,
		incorrect_count,
		hex,
		script,
	} = word

	let score = parseInt(
		(correct_count / (incorrect_count + correct_count)) * 100
	)
	if (score < 0 || score === Infinity) {
		score = 0
	}

	return (
		<div className='word__item__container'>
			<Text translation={translation} original={original} />
			<Info score={score} />
			<ScoreBox
				correct_count={correct_count}
				incorrect_count={incorrect_count}
			/>
			<ItemImage hex={hex} script={script} />
		</div>
	)
}
