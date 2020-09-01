import React from 'react'
import DashboardItem from './DashboardItem'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

export default function DashboardList({ words, error }) {
	return (
		<div className='dashboard__flexbox'>
			{!error ? (
				words.map((word) => (
					<DashboardItem key={word.id} word={word} />
				))
			) : (
				<ErrorBoundary error={error} />
			)}
		</div>
	)
}
