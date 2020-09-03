import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function DashboardHeader({
	name = 'Japanese',
	total_score = 0,
	error,
}) {
	return (
		<header className='dashboard__wrapper__header'>
			{!error && (
				<>
					<div className='header__item'>
						<MdCheckCircle className='icon' />
						{total_score}
					</div>
					<div className='header__item'>
						<div>
							<h2>Sukina nihongo no iro wa?</h2>
							<p>
								(What is your favorite color in {name}?)
							</p>
						</div>
					</div>
				</>
			)}
		</header>
	)
}
