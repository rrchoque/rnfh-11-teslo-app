import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { StackNavigator } from './presentation/navigation/StackNavigator';

export const ProductsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

  )
}
