import React from 'react'
import DashboardItem from './DashboardItem'

export default function DashboardList({ words, error }) {
	return (
		<div className='dashboard__flexbox'>
			{!error &&
				words.map((word) => (
					<DashboardItem key={word.id} word={word} />
				))}
		</div>
	)
}
