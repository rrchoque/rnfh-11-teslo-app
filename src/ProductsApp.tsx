import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useColorScheme } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AuthProvider } from './presentation/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const ProductsApp = () => {

  const queryClient = new QueryClient();

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;
  const backgroundColor =
    colorScheme === 'dark'
      ? theme['color-basic-800']
      : theme['color-basic-100'];
      
  return (
    <QueryClientProvider client={ queryClient }>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer
          theme={{
            dark: colorScheme === 'dark',
            colors: {
              primary: theme['color-primary-500'],
              background: backgroundColor,
              card: theme['color-basic-100'],
              text: theme['text-basic-color'],
              border: theme['color-basic-800'],
              notification: theme['color-primary-500'],
            },
          }}>

          <AuthProvider>
            <StackNavigator />
          </AuthProvider>

        </NavigationContainer>
      </ApplicationProvider>
    </QueryClientProvider>
    


  )
}
