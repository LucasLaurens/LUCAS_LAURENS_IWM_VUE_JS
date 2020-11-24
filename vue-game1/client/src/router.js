import { createRouter, createWebHistory } from 'vue-router'

// Import Main Components
import PlayerView from './screens/PlayerView'
import SelectionView from './screens/SelectionView'

// Routes
const routes = [
	{ path: '/', component: PlayerView },
	{ path: '/selection', component: SelectionView }
];
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;