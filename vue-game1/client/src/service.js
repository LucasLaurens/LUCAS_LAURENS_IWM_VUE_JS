import axios from 'axios'
const Character = {
	datas: async (number = 3) => {
		try {
			let array = []
			let config = {
				headers: {
					'Authorization': `Bearer ${process.env.VUE_APP_API_TOKEN}`
				}
			}

			let response = await axios.get(`${process.env.VUE_APP_BASE_URL}character?limit=${number}`, config);

			response.data.docs.map(item => {
				if (!array.includes(item)) {
					array.push(item)
				}
			})

			return array;
		} catch (err) {
			console.error(err);
		}
	},
}

export default Character;