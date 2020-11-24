import { createStore } from 'vuex';
import datas from './data/players.json'

export const store = createStore({
	state: {
		counter: 0,
		players: datas.players,
		selection: []
	},
	mutations: {
		ADD_PLAYER: (state, player) => {
			if(!state.selection.includes(player) && state.counter < 11) {
				state.counter += 1
			}

			if (state.selection.length < 12) {
				state.selection.push(player);
			}
		},
		REMOVE_PLAYER: (state, player) => {
			if(state.counter > 0) {
				state.counter -= 1
			}

			state.selection = state.selection.filter(item => {
				return item.name !== player.name
			});
		},
		REMOVE_ALL: (state) => {
			state.selection = [];
			state.counter = 0;
		},
		GET_PSG_TEAM: (state, team) => {
			state.players = team;
		}
	},
	getters: {
		counter: state => state.counter,
		players: state => state.players,
		selection: state => state.selection
	},
	actions: {
		addPlayer: (store, player) => {
			store.commit('ADD_PLAYER', player);
		},
		removePlayer: (store, player) => {
			store.commit('REMOVE_PLAYER', player);
		},
		removeAll: (store) => {
			store.commit('REMOVE_ALL');
		},
		getPSGTeam: (store, team) => {
			store.commit('GET_PSG_TEAM', team);
		}
	}
});