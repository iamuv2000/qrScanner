import { createStackNavigator} from 'react-navigation-stack'
import  {createAppContainer } from 'react-navigation';
import qrScanner from './src/components/qrScanner'

const navigator = createStackNavigator(
  {
    qrScanner: qrScanner,
  },
  {
    initialRoutesName: 'qrScanner',
    defaultNavigationOptions: {
      title: 'Restraunt Search'
    }
  }
);

export default createAppContainer(navigator);