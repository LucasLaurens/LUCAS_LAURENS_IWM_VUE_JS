import axios from 'axios'
const Teams = {
	datas: async () => {
		try {
			const response = await axios.get('http://api.football-data.org/v2/teams/524', {
				headers: {
					'X-Auth-Token': process.env.VUE_APP_API_TOKEN
				}
			});

			return response.data.squad
		} catch (err) {
			console.error(err);
		}
	},
}

export default Teams;