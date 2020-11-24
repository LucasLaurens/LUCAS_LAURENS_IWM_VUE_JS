import { createStore } from 'vuex';
import datas from './data/players.json'

export const store = createStore({
	state: {
		players: datas.players,
		selection: []
	},
	mutations: {
		ADD_PLAYER: (state, player) => {
			state.selection.push(player)
		},
		REMOVE_PLAYER: (state, player) => {
			state.selection = state.selection.filter(item => {
				return item.name !== player.name
			});
		},
	},
	getters: {
		players: state => state.players,
		selection: state => state.selection
	},
	actions: {
		addPlayer: (store, player) => {
			store.commit('ADD_PLAYER', player)
		},
		removePlayer: (store, player) => {
			store.commit('REMOVE_PLAYER', player)
		}
	}
});