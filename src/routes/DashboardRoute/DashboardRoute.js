import React, { useState, useEffect } from 'react'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import DashboardList from '../../components/DashboardList/DashboardList'
import FetchService from '../../services/fetch-service'

// wrapper
//    header container
//    flex container
//      item has a container
//      1st. header container - translation and word
//      2nd. info container - score
//      3rd. image container - color box and script image

export default function DashboardRoute() {
	const [language, setLanguage] = useState({})
	const [words, setWords] = useState([])
	const [error, setError] = useState(null)
	// on mount fetch data

	useEffect(() => {
		const getWords = async () => {
			try {
				const data = await FetchService.getWords()

				const res = await data.json()

				if (res.error) {
					throw res.error
				}

				setLanguage(res.language)
				setWords(res.words)
			} catch (error) {
				setError(error)
			}
		}
		if (!error) {
			getWords()
		}
		return () => {}
	}, [error])
	// counts score
	console.log(words)
	return (
		<section className='dashboard__wrapper'>
			{!error ? (
				<>
					<DashboardHeader {...language} />
					<DashboardList words={words} />
				</>
			) : (
				<div>{'oopsie'}</div>
			)}
		</section>
	)
}
