import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Test from './routers/Test/index';

const AppContainer = createStackNavigator({
    ...Test
}, {
    initialRouteName: 'One'
});

  
export default createAppContainer(AppContainer);


