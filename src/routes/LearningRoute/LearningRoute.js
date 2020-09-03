import React, { useState } from 'react'
import Learning from '../../components/Learning/Learning'
import Guess from '../../components/Learning/Guess'

export default function LearningRoute() {
	const [hasAnswered, setHasAnswered] = useState(false)
	const [answer, setAnswer] = useState('')
	console.log('from learning route', answer)
	return (
		<section className='dashboard__wrapper'>
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
	)
}
