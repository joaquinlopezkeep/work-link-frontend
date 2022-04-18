import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Spinner, Text } from '@ui-kitten/components';
import { fetchUser } from '../../util/http';
import { setCurrentUser } from '../../redux/user';
import ManagersDashboard from './ManagersDashboard';
import CleanerDashboard from './CleanersDashboard';

const Dashboard = ({ navigation }) => {
	const [loading, setLoading] = useState(true);
	const token = useSelector(state => state.authenticate.token);
	const email = useSelector(state => state.authenticate.authEmail);
	const group = useSelector(state => state.user.groups);
	const dispatch = useDispatch();

	//load data when screen is rendered.
	useEffect(() => {
		//get the user from API
		fetchUser(email, token)
			.then(response => {
				// save the details to the store for later use
				dispatch(
					setCurrentUser({
						url: response.url,
						first_name: response.first_name,
						last_name: response.last_name,
						email: response.email,
						groups: response.groups[0],
					})
				);
				setLoading(false);
			})
			.catch(error => Alert.alert(`${error}`));
	}, []);

	const Content = () => {
		if (loading) {
			return <Spinner size='large' />;
		}
		if (group === 'Managers') {
			return <ManagersDashboard navigation={navigation} />;
		}
		return <CleanerDashboard navigation={navigation} />;
	};

	return (
		<Layout style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
			<Content />
		</Layout>
	);
};

export default Dashboard;
