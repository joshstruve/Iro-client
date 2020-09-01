import React from 'react'

export default function ItemImage({ hex, script }) {
	return (
		<div className='img__container'>
			<div className='color' style={{ backgroundColor: hex }}>
				<img
					src={require(`../../../img/kana/${script}`)}
					alt='Japanese "Kana" script'
				/>
			</div>
		</div>
	)
}
