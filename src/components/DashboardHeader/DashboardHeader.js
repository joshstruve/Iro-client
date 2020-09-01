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
					<span className='header__text__container'>
						<h2>Sukinairo wa?</h2>
						<p>
							Learn to express your favorite color in{' '}
							{name}
						</p>
					</span>
					<span>
						<MdCheckCircle /> {total_score}
					</span>{' '}
				</>
			) : (
				<ErrorBoundary error={error} />
			)}
		</header>
	)
}
