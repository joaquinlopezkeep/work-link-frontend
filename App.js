import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/loginscreen/LoginScreen';
import Dashboard from './screens/dashBoard/Dashboard';
import { default as theme } from './custom-theme.json';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName='Login'
						screenOptions={{
							headerStyle: {
								backgroundColor: theme['color-info-100'],
								headerTintColor: 'white',
							},
						}}>
						<Stack.Screen name='Login' component={LoginScreen} />
						<Stack.Screen name='Dashboard' component={Dashboard} />
					</Stack.Navigator>
				</NavigationContainer>
			</ApplicationProvider>
		</>
	);
}
