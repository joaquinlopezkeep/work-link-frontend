import { StyleSheet } from 'react-native';
import { default as Theme } from '../../custom-theme.json';
import styles from '../loginscreen/LoginScreenStyles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 16,
	},
	card: {
		backgroundColor: Theme['color-info-100'],
		maxWidth: '80%',
	},
});

export default styles;
