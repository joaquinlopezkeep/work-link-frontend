import { Image, View } from 'react-native';
import { Layout } from '@ui-kitten/components';
import styles from './LoginScreenStyles';
import logo from '../../assets/logo.png';

import LoginForm from '../../ui/loginform/LoginForm';

const LoginScreen = props => {
	return (
		<Layout style={{ flex: 1 }}>
			<View style={styles.container}>
				<Image source={logo} style={styles.logo} />
				<LoginForm />
			</View>
		</Layout>
	);
};

export default LoginScreen;
