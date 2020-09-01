import config from '../config'
import TokenService from './token-service'

const FetchService = {
	getWords() {
		return fetch(`${config.API_ENDPOINT}/language`, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		})
	},
}

export default FetchService
