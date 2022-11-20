import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import Home from '../view/home';
import About from '../view/about';

const views = {
    Hello: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(views);

export default createAppContainer(HomeStack);