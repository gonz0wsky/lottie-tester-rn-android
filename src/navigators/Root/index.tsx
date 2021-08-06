import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {List, View} from '../../containers';
import {ThemeProvider} from 'styled-components/native';
import theme from '../../theme';

const {Navigator, Group, Screen} = createStackNavigator();

const Root: FC = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Navigator initialRouteName="List">
        <Group>
          <Screen
            name="List"
            options={{title: 'Choose a lottie'}}
            component={List}
          />
          <Screen
            name="View"
            options={{title: 'Shake your phone to see fps'}}
            component={View}
          />
        </Group>
      </Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default Root;
