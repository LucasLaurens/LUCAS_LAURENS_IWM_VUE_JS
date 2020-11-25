import { createStore } from 'vuex';

export const store = createStore({
	state: {
		counter: 0,
		characters: [],
		selection: []
	},
	mutations: {
		ADD_CHARACTER: (state, character) => {
			if(!state.selection.includes(character) && state.counter < 11) {
				state.counter += 1
				state.selection.push(character);
			}
		},
		REMOVE_CHARACTER: (state, character) => {
			if(state.counter > 0) {
				state.counter -= 1
			}

			state.selection = state.selection.filter(item => {
				return item.name !== character.name
			});
		},
		REMOVE_ALL: (state) => {
			state.selection = [];
			state.counter = 0;
		},
		GET_CHARACTERS_SQUAD: (state, characters) => {
			state.characters = []
			state.characters = [...state.characters, ...characters]
		}
	},
	getters: {
		counter: state => state.counter,
		characters: state => state.characters,
		selection: state => state.selection
	},
	actions: {
		addCharacter: (store, character) => {
			store.commit('ADD_CHARACTER', character);
		},
		removeCharacter: (store, character) => {
			store.commit('REMOVE_CHARACTER', character);
		},
		removeAll: (store) => {
			store.commit('REMOVE_ALL');
		},
		getCharactersSquad: (store, characters) => {
			store.commit('GET_CHARACTERS_SQUAD', characters);
		}
	}
});