import React, { useState, useEffect } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import config from '../../config'
import TokenService from '../../services/token-service'
import Score from './item-components/Score'

export default function Guess({ setHasAnswered, answer }) {
	const [head, setHead] = useState(null)
	const [error, setError] = useState(null)
	// const [hasAnswered, setHasAnswered] = useState(null)
	const handleAnswer = async (guess) => {
		try {
			const data = await fetch(
				`${config.API_ENDPOINT}/language/guess`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
						authorization: `Bearer ${TokenService.getAuthToken()}`,
					},
					body: JSON.stringify(guess),
				}
			)
			const res = await data.json()
			console.log('handleAnswer response', res)
			if (res.error) {
				throw res.error
			}

			setHead(res)
		} catch (error) {
			setError(error)
		}
	}

	useEffect(() => {
		if (answer) {
			let guess = { guess: answer }

			if (!error) {
				handleAnswer(guess)
			}
		}

		return () => {}
	}, [answer, error])

	return (
		<>
			<div className='learning-total-score'>
				<div className='learning-score-box-item'>
					<MdCheckCircle className='icon' />
					<span>{head && head.total_score}</span>
				</div>
			</div>
			<div className='learning-card'>
				<>
					{head && head.isCorrect ? (
						<h2>Sugoi! You answered correctly.</h2>
					) : (
						<h2>Ottotto! You answered incorrectly.</h2>
					)}

					<div className='spacer-v'></div>
					<p>
						Wataschi no sukinairo wa{' '}
						{head && head.answer.toLowerCase()}
						desu.
					</p>
					<p>
						(My favorite color is{' '}
						{head && head.original.toLowerCase()}.)
					</p>
					<div className='spacer-v'></div>
				</>

				<Score {...head} />

				<div>
					<button onClick={() => setHasAnswered(false)}>
						Next Word
					</button>
				</div>
			</div>
		</>
	)
}
