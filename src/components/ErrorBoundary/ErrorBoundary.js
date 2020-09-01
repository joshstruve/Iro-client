import React from 'react'

export default function ErrorBoundary({ error }) {
	return (
		<div>
			<p>Sorry, but something went wrong!</p>
			<p>{error}</p>
		</div>
	)
}
