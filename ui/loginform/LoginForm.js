import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, Input, Spinner, Text } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
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
		setIsAuthenticating(true);
		try {
			const token = await authenticate(email, password);
			dispatch(authenticateUser({ token: token }));
		} catch (error) {
			console.error(`${error}`);
		}
		setIsAuthenticating(false);
	}

	const setEmailTrimmed = email => {
		setEmail(email.trim());
	};

	if (isAuthenticating) {
		return (
			<View>
				<Spinner size='large' status='basic' />
				<Text>Loading...</Text>
			</View>
		);
	}
	return (
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
