import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function DashboardHeader({
	name = 'Japanese',
	total_score = 0,
}) {
	return (
		<header className='dashboard__wrapper__header'>
			<div className='header__text__container'>
				<h2>Sukinairo wa?</h2>
				<p>Learn to express your favorite color in {name}</p>
			</div>
			<span>
				{' '}
				<MdCheckCircle /> {total_score}
			</span>
		</header>
	)
}
