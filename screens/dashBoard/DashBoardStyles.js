import { StyleSheet } from 'react-native';
import { default as Theme } from '../../custom-theme.json';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		backgroundColor: Theme['color-primary-800'],
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 16,
	},
});

export default styles;
