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

	const score = correct_count / incorrect_count

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
