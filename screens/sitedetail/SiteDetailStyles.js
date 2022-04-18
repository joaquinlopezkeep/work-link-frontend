import { StyleSheet } from 'react-native';
import { default as Theme } from '../../custom-theme.json';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 32,
	},
	card: {
		flex: 1,
		padding: 8,
		backgroundColor: Theme['color-info-300'],
	},
	list: {
		flex: 1,
		marginBottom: 16,
	},
	listItem: {
		marginTop: 32,
		padding: 16,
		backgroundColor: Theme['color-success-500'],
	},
});

export default styles;
