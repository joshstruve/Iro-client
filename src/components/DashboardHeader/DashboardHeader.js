import React from 'react'
import { MdCheckCircle } from 'react-icons/md'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

export default function DashboardHeader({
	name = 'Japanese',
	total_score = 0,
	error,
}) {
	return (
		<header className='dashboard__wrapper__header'>
			{!error ? (
				<>
					<div className='header__item'>
						<div>
							<h2>Sukinairo wa?</h2>
							<p>Learn to express your favorite color in {name}.</p>
						</div>
					</div>
					<div className='header__item'>
						<MdCheckCircle className='icon'/> {total_score}
					</div>
				</>
			) : (
				<ErrorBoundary error={error} />
			)}
		</header>
	)
}
