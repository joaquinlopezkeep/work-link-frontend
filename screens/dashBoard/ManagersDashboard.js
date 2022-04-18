import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Card, Text, ButtonGroup, Button } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSites } from '../../redux/sites';
import { fetchSites } from '../../util/http';
import styles from './DashBoardStyles';

const ManagersDashboard = ({ navigation }) => {
	const token = useSelector(state => state.authenticate.token);
	const sites = useSelector(state => state.site.sites);
	const dispatch = useDispatch();

	//load data when screen is rendered.
	useEffect(() => {
		//fetch the sites from the API
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
			.catch(error => console.error('Failed in fetchSites: ' + error));
	}, []);

	return (
		<FlatList
			data={sites}
			renderItem={site => {
				function detailsPressHandler() {
					//navigate to Screen detail and send key to load all data.
					navigation.navigate('SiteDetail', {
						key: site.item.key,
					});
				}
				function ordersPressHandler() {
					//navigate to Screen detail and send key to load all data.
					navigation.navigate('OrderDetail', {
						key: site.item.key,
					});
				}

				return (
					<Card style={styles.card}>
						<Text
							style={{ alignSelf: 'center', marginBottom: 8 }}
							category='h4'>
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

export default ManagersDashboard;
