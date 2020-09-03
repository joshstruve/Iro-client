import React, { useState, useEffect } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { Input, Label } from '../Form/Form'
import Question from '../../components/Learning/item-components/Question'
import config from '../../config'
import TokenService from '../../services/token-service'
import Score from './item-components/Score'

export default function Learning({
	hasAnswered,
	setHasAnswered,
	setAnswer,
	handleAnswer,
}) {
	const [head, setHead] = useState(null)
	const [error, setError] = useState(null)
	// const [hasAnswered, setHasAnswered] = useState(null)

	useEffect(() => {
		const getHead = async () => {
			try {
				const data = await fetch(
					`${config.API_ENDPOINT}/language/head`,
					{
						method: 'GET',
						headers: {
							authorization: `Bearer ${TokenService.getAuthToken()}`,
						},
					}
				)
				const res = await data.json()

				if (res.error) {
					throw res.error
				}

				setHead(res)
			} catch (error) {
				setError(error)
			}
		}

		if (!error) {
			getHead()
		}
		return () => {}
	}, [error])

	const handleSubmit = (e) => {
		e.preventDefault()

		// handleAnswer()
		setHasAnswered(true)
		console.log(hasAnswered)
	}

	return (
		<>
			<div className='learning-total-score'>
				<div className='learning-score-box-item'>
					<MdCheckCircle className='icon' />
					<span>{head && head.total_score}</span>
				</div>
			</div>
			<div className='learning-card'>
				<Question {...head} />
				<Score {...head} />
				<form
					onSubmit={
						(e) => handleSubmit(e)

						/**api call
						 * set has answered true
						 * 		unmount the component
						 * 		render another
						 * 		next button will setHasAnswered(false)
						 *
						 * effect call to fetch '/head'
						 *
						 */
					}
				>
					<Label htmlFor='learn-guess-input' />
					<Input
						type='text'
						id='learn-guess-input'
						name='learn-guess-input'
						defaultValue=''
						placeholder='Translate the color'
						onChange={(e) => setAnswer(e.target.value)}
						required
					/>
					<div className='spacer-v'></div>
					<div>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</>
	)
}
