import { createRouter, createWebHistory } from 'vue-router'

// Import Main Components
import PlayerView from './screens/PlayerView'
import SelectionView from './screens/SelectionView'

// Routes
const routes = [
	{ path: '/', name: 'players', component: PlayerView },
	{ path: '/selection', name: 'selection', component: SelectionView }
];

export const router = createRouter({
	history: createWebHistory(),
	routes
})