import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from '@ui-kitten/components';
import { EmailIcon, EyeIcon } from '../../util/icons';
import styles from './LoginFormStyles';
import { authenticate } from '../../util/http';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [status, setStatus] = useState(null);

	function loginHandler() {
		async function getStatus() {
			const res = await authenticate(email, password);
			setStatus(res);
		}
		getStatus();
		if (status) {
			console.log(status);
		}
	}

	const setEmailTrimmed = email => {
		setEmail(email.trim());
	};

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
