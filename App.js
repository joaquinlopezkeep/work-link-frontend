import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/loginscreen/LoginScreen';
import Dashboard from './screens/dashBoard/Dashboard';
import { default as theme } from './custom-theme.json';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function MainStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Dashboard'
				screenOptions={{
					headerStyle: {
						backgroundColor: theme['color-info-100'],
						headerTintColor: 'white',
					},
				}}>
				<Stack.Screen name='Dashboard' component={Dashboard} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

function Content() {
	const auth = useSelector(state => state.authenticate.isAuthenticated);
	if (auth) {
		return <MainStack />;
	}
	return <LoginScreen />;
}

export default function App() {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
				<Provider store={store}>
					<Content />
				</Provider>
			</ApplicationProvider>
		</>
	);
}
