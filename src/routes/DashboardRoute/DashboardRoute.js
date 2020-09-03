import React, { useState, useEffect } from 'react'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import DashboardList from '../../components/DashboardList/DashboardList'
import FetchService from '../../services/fetch-service'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import Header from '../../components/Header/Header'

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

				if (!res) {
					throw res.error
				}
				setLanguage(res.language)
				setWords(res.words)
			} catch (error) {
				setError(error.message)
			}
		}

		if (!error) {
			getWords()
		}
		return () => {}
	}, [error])

	return (
		<div className='container-2'>
		<section className='dashboard__wrapper'>
			{error ? (
				<ErrorBoundary />
			) : (
				<>
					<Header />
					<DashboardHeader error={error} {...language} />
					<DashboardList error={error} words={words} />
					<a href='/learn'>
						<button>Start Learning</button>
					</a>
				</>
			)}
		</section>
		</div>
	)
}
