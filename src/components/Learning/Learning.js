import React, { useState, useEffect } from 'react'
import { MdCheckCircle, MdCancel } from 'react-icons/md'
import { Input, Label } from '../Form/Form'
import Question from '../../components/Learning/item-components/Question'
import config from '../../config'
import TokenService from '../../services/token-service'
import Score from './item-components/Score'

export default function Learning() {
	const [head, setHead] = useState(null)
	const [error, setError] = useState(null)
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
	}, [])

	return (
		<section>
      <div className='learning-total-score'>
        <div className='learning-score-box-item'>
			  <MdCheckCircle className='icon'/>
			<span>{head && head.total_score}</span>
      </div>
      </div>
			<div className='learning-card'>
				<Question {...head} />
				<Score {...head} />
				<form>
					<Label />
					<Input
						type='text'
						placeholder='Translate the color'
					/>
          <div className='spacer-v'>
          </div>
          <div>
					  <button type='submit'>Submit</button>
          </div>
				</form>
			</div>
		</section>
	)
}
