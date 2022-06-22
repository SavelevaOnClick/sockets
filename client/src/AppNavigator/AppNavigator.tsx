import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Chat, SignIn} from '@screens';
import React from 'react';

const RootStack = createStackNavigator();

type TAppNavigatorProps = {};

const AppNavigator: React.FC<TAppNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <RootStack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
