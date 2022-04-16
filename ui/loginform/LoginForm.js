import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, Input, Spinner, Text } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { EmailIcon, EyeIcon } from '../../util/icons';
import styles from './LoginFormStyles';
import { authenticate } from '../../util/http';
import { authenticateUser } from '../../redux/auth';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	const dispatch = useDispatch();
	async function loginHandler() {
		//Display Spinner
		setIsAuthenticating(true);

		try {
			//Call API for Oauth token
			const token = await authenticate(email, password);
			//Store Token in redux store also sets isAuth to true which switches screensstack in App.js
			dispatch(authenticateUser({ token: token }));
		} catch (error) {
			//authenticate in http.js throws an error if no access token is present
			Alert.alert(`${error}`);
			//Remove Spinner
			setIsAuthenticating(false);
		}
	}

	//This is to avoid whitespaces at the end of the email address which cause 401 error
	const setEmailTrimmed = email => {
		setEmail(email.trim());
	};

	//Displays the loading Spinner
	if (isAuthenticating) {
		return (
			<View>
				<Spinner size='large' status='basic' />
				<Text>Loading...</Text>
			</View>
		);
	}
	return (
		//Or displays the Login form
		<View style={styles.container}>
			<Input
				value={email}
				label='Email'
				size='medium'
				autoCapitalize='none'
				placeholder='enter your email'
				accessoryRight={EmailIcon}
				onChangeText={nextValue => setEmailTrimmed(nextValue)}
				style={styles.inputs}
			/>

			<Input
				value={password}
				label='Password'
				size='medium'
				placeholder='enter your password'
				secureTextEntry={true}
				accessoryRight={EyeIcon}
				onChangeText={setPassword}
				style={styles.inputs}
			/>

			<Button
				appearance='outline'
				onPress={loginHandler}
				style={styles.btn}>
				Login
			</Button>
		</View>
	);
};

export default LoginForm;
