import React, { useState } from 'react'
import Learning from '../../components/Learning/Learning'
import Guess from '../../components/Learning/Guess'
import Header from '../../components/Header/Header'

export default function LearningRoute() {
	const [hasAnswered, setHasAnswered] = useState(false)
	const [answer, setAnswer] = useState('')

	return (
		<div className='container'>
			<section className='dashboard__wrapper'>
				<Header />
				{!hasAnswered ? (
					<Learning
						hasAnswered={hasAnswered}
						setHasAnswered={setHasAnswered}
						setAnswer={setAnswer}
					/>
				) : (
					<>
						<Guess
							setHasAnswered={setHasAnswered}
							answer={answer}
						/>
					</>
				)}
			</section>
		</div>
	)
}
