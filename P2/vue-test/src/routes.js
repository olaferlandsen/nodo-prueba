import List from './components/List.vue'
import Character from './components/Character.vue'
/*
	array of all global routes of the proyect, in  here we asociated all the components with his routes.
*/
const routes = [
  { path: '/', component: List, name: 'list' },
  { path: '/character/:id', component: Character, name: 'character' }
]

export default routes
