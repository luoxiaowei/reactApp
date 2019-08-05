import {
    createStackNavigator,
    createAppContainer,
    StackNavigator
} from 'react-navigation';

import Test from './routers/Test/index';

const AppNavigator = createStackNavigator({
    ...Test
}, {
    initialRouteName: 'Test'
});

  
export default createAppContainer(AppNavigator);
