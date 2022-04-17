import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
	Card,
	Layout,
	Spinner,
	Text,
	Button,
	ButtonGroup,
} from '@ui-kitten/components';
import { fetchUser, fetchSites } from '../../util/http';
import { getFullName, setCurrentUser } from '../../redux/user';
import { setCurrentSites } from '../../redux/sites';
import styles from './DashBoardStyles';

const Dashboard = props => {
	const [loading, setLoading] = useState(true);
	const token = useSelector(state => state.authenticate.token);
	const sites = useSelector(state => state.site.sites);
	const email = useSelector(state => state.authenticate.authEmail);
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
						groups: response.groups,
					})
				);
				setLoading(false);
			})
			.catch(error => Alert.alert(`${error}`));

		fetchSites(token)
			.then(response => {
				const sites = [];
				response.forEach(site => {
					const siteObject = {
						key: site.url,
						name: site.name,
						address: site.address,
						post_code: site.post_code,
						client_name: site.client_name,
						client_contact_number: site.client_contact_number,
						manager: site.manager,
					};
					sites.push(siteObject);
				});
				dispatch(setCurrentSites(sites));
			})
			.catch(error => console.error(error));
	}, []);

	const Content = () => {
		if (loading) {
			return <Spinner size='large' />;
		}
		return (
			<FlatList
				data={sites}
				renderItem={site => {
					function detailsPressHandler() {
						//navigate to Screen detail and send key to load all data.
						props.navigation.navigate('SiteDetail', {
							key: site.item.key,
						});
					}
					function ordersPressHandler() {
						//navigate to Screen detail and send key to load all data.
						props.navigation.navigate('OrderDetail', {
							key: site.item.key,
						});
					}

					return (
						<Card style={styles.card}>
							<Text style={{ alignSelf: 'center' }} category='h4'>
								{site.item.name}
							</Text>
							<ButtonGroup appearance='outline'>
								<Button onPress={detailsPressHandler}>
									View details
								</Button>
								<Button onPress={ordersPressHandler}>
									View Orders
								</Button>
							</ButtonGroup>
						</Card>
					);
				}}
				alwaysBounceVertical={false}
				style={{ flex: 1 }}
			/>
		);
	};

	return (
		<Layout style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
			<Content />
		</Layout>
	);
};

export default Dashboard;
