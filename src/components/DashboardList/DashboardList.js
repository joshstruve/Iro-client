import React from 'react'
import DashboardItem from './DashboardItem'

export default function DashboardList({ words }) {
	console.log(words)
	return (
		<div className='dashboard__flexbox'>
			{words.map((word) => (
				<DashboardItem key={word.id} word={word} />
			))}
		</div>
	)
}
