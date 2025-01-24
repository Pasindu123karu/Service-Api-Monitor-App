import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './GetStarted/GetStarted';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import ServiceDetails from './ServiceDetails/ServiceDetails'
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
