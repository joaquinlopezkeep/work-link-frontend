import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Spinner, Text } from '@ui-kitten/components';
import { fetchUser, fetchGroup } from '../../util/http';
import { setCurrentUser } from '../../redux/user';
import styles from './DashBoardStyles';

const Dashboard = props => {
	const [loading, setLoading] = useState(true);
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [group, setGroup] = useState('');

	const token = useSelector(state => state.authenticate.token);
	const groupURL = useSelector(state => state.user.groups[0]);
	const dispatch = useDispatch();
	useEffect(() => {
		//get the user from API
		fetchUser(token)
			.then(response => {
				// save the details to the store for later use
				dispatch(
					setCurrentUser({
						url: response.url,
						first_name: response.first_name,
						last_name: response.last_name,
						email: response.email,
						groups: response.groups,
					})
				);
				//set the Name
				setFullName(`${response.first_name} ${response.last_name}`);
				//set Email
				setEmail(`${response.email}`);
			})
			.catch(error => console.error(error));
		//get the group name to render the correct dashboard
		fetchGroup(groupURL, token)
			.then(response => {
				setGroup(response);
				setLoading(false);
			})
			.catch(error => console.error(error));
	}, []);

	function Content() {
		if (loading) {
			return <Spinner size='large' />;
		}
		return <Text>{fullName}</Text>;
		// if (group == 'Managers') {
		// 	return <ManagersDashboard/>
		// }
		// return <CleanersDashboard/>
	}

	return (
		<Layout style={styles.container}>
			<Content />
		</Layout>
	);
};

export default Dashboard;
