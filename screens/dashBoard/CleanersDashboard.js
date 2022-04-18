import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import {
	Card,
	Text,
	Button,
	Divider,
	TopNavigation,
} from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
import { setSchedules } from '../../redux/schedule';
import { fetchSchedules } from '../../util/http';
import styles from './DashBoardStyles';

const DAYS_IN_WEEK = {
	1: 'Monday',
	2: 'Tueday',
	3: 'Wednesday',
	4: 'Thurday',
	5: 'Friday',
	6: 'Saturday',
	7: 'Sunday',
};

const CleanerDashboard = ({ navigation }) => {
	const token = useSelector(state => state.authenticate.token);
	const email = useSelector(state => state.authenticate.authEmail);
	const schedules = useSelector(state => state.schedule.schedules);
	const dispatch = useDispatch();

	function getDays(arr) {
		const days = [];
		arr.forEach(day => {
			days.push(DAYS_IN_WEEK[day]);
		});
		return days;
	}

	useEffect(() => {
		//fetch user schedules
		fetchSchedules(email, token)
			.then(response => {
				const schedules = [];
				response.forEach(schedule => {
					const scheduleObject = {
						key: schedule.id,
						siteName: schedule.job.site,
						jobName: schedule.job.name,
						jobDescription: schedule.job.description,
						rate: schedule.job.rate,
						shiftStart: schedule.shift_start_time,
						shiftEnd: schedule.shift_end_time,
						frequency: getDays(schedule.frequency),
					};
					schedules.push(scheduleObject);
				});
				dispatch(setSchedules(schedules));
			})
			.catch(error =>
				console.error('Failed at fetchSchedules: \n' + error)
			);
	}, []);

	const Header = () => {
		return (
			<View>
				<Text
					category='h2'
					style={{ alignSelf: 'center', marginBottom: 8 }}>
					Your Schedules
				</Text>
			</View>
		);
	};

	return (
		<FlatList
			data={schedules}
			ListHeaderComponent={Header}
			renderItem={schedule => {
				function orderPressHandler() {
					navigation.navigate('OrderForm', {
						key: schedule.item.jobName,
					});
				}
				return (
					<Card style={styles.card}>
						<View>
							<Text category='h2'>{schedule.item.siteName}</Text>
							<Text category='h6'>{schedule.item.jobName}</Text>
						</View>
						<Divider />
						<Text category='s1'>
							Shift start: {schedule.item.shiftStart}
						</Text>
						<Text category='s1'>
							Shift ends: {schedule.item.shiftEnd}
						</Text>
						<Divider />
						<Text category='h6'>Frequency: </Text>
						{schedule.item.frequency.map(day => (
							<Text key={day} category='s2'>
								{day}
							</Text>
						))}
						<Divider />
						<View>
							<Text category='h6'>Your hourly rate:</Text>
							<Text category='s2'>£{schedule.item.rate}</Text>
						</View>
						<Divider />
						<Button
							appearance='outline'
							onPress={orderPressHandler}>
							Place an Order
						</Button>
					</Card>
				);
			}}
		/>
	);
};

export default CleanerDashboard;
