import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Layout, Text, Card, Divider } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJob } from '../../util/http';
import { setJob } from '../../redux/job';
import { FlatList } from 'react-native';
import styles from './SiteDetailStyles';

const SiteDetail = ({ route, navigation }) => {
	const site = useSelector(state =>
		state.site.sites.find(site => site.key == route.params.key)
	);
	const token = useSelector(state => state.authenticate.token);
	const jobs = useSelector(state => state.job.jobs);
	const dispatch = useDispatch();

	useEffect(() => {
		fetchJob(site.name, token)
			.then(response => {
				const jobs = [];
				response.forEach(job => {
					const jobObject = {
						key: job.url,
						name: job.name,
						site: job.site,
						cleaner: job.cleaner,
						start_date: job.start_date,
						rate: job.rate,
						hours: job.hours,
						description: job.description,
					};
					jobs.push(jobObject);
				});
				dispatch(setJob(jobs));
			})
			.catch(error => console.error(error));
	});

	return (
		<Layout style={styles.container}>
			<FlatList
				data={jobs}
				style={styles.list}
				ListHeaderComponent={
					<Card style={styles.card}>
						<Text category='h4'>Site name:</Text>
						<Text>{site.name}</Text>
						<Divider />
						<Text category='h4'>Site Address:</Text>
						<Text>{site.address}</Text>
						<Text>{site.post_code}</Text>
						<Divider />
						<Text category='h4'>Client name:</Text>
						<Text>{site.client_name}</Text>
						<Divider />
						<Text category='h4'>Client contact number:</Text>
						<Text>{site.client_contact_number}</Text>
					</Card>
				}
				renderItem={job => {
					return (
						<View style={styles.listItem}>
							<Text category='h4'>Job name:</Text>
							<Text>{job.item.name}</Text>
							<Divider />
							<Text category='h4'>Assigned cleaner:</Text>
							<Text>{job.item.cleaner}</Text>
							<Divider />
							<Text category='h4'>Started on:</Text>
							<Text>{job.item.start_date}</Text>
							<Divider />
							<Text category='h4'>Hourly Rate:</Text>
							<Text>£{job.item.rate}</Text>
							<Divider />
							<Text category='h4'>Hours per shift:</Text>
							<Text>{job.item.hours}</Text>
							<Divider />
							<Text category='h4'>Duties:</Text>
							<Text>{job.item.description}</Text>
						</View>
					);
				}}
			/>
		</Layout>
	);
};

export default SiteDetail;
