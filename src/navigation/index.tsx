import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigatorScreenName} from '../enums';
import PostListScreen from '../screens/postList';
import PostDetailScreen from '../screens/postDetail';

const Stack = createStackNavigator();

const StackNavigator: FC<{}> = () => {
  const screenOptions = {
    headerShown: false,
    headerTitle: 'Detail',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={StackNavigatorScreenName.PostListScreen}>
        <Stack.Screen
          name={StackNavigatorScreenName.PostListScreen}
          component={PostListScreen}
          options={screenOptions}

        />
        <Stack.Screen
          name={StackNavigatorScreenName.PostDetailScreen}
          component={PostDetailScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
