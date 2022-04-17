import { StyleSheet } from 'react-native';
import { default as Theme } from '../../custom-theme.json';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},

	list: {
		flex: 1,
	},
	listItem: {
		marginTop: 32,
		padding: 16,
		backgroundColor: Theme['color-danger-300'],
	},
});

export default styles;
