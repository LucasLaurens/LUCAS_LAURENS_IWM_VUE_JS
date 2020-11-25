import { createRouter, createWebHistory } from 'vue-router'

// Import Main Components
import CharactersView from './screens/CharactersView'
import SelectionView from './screens/SelectionView'

// Routes
const routes = [
	{ path: '/', name: 'characters', component: CharactersView },
	{ path: '/selection', name: 'selection', component: SelectionView }
];

export const router = createRouter({
	history: createWebHistory(),
	routes
})