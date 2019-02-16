


import {createStackNavigator, createAppContainer} from 'react-navigation';
import CharacterScreen from "./screens/CharacterScreen";
import ListScreen from "./screens/ListScreen";

const MainNavigator = createStackNavigator({
    List: {screen: ListScreen},
    Character: {screen: CharacterScreen},
});
const App = createAppContainer(MainNavigator);

export default App;