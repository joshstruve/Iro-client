import React from 'react'
import { MdCheckCircle, MdCancel } from 'react-icons/md'

export default function Score({
	wordCorrectCount,
	wordIncorrectCount,
}) {
	return (
		<>
			<MdCheckCircle />
			<span>{wordCorrectCount}</span>
			<MdCancel />
			<span>{wordIncorrectCount}</span>
		</>
	)
}
