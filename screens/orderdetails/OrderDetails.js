import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../../redux/order';
import { fetchOrders } from '../../util/http';
import styles from './OrderDetailsStyles';

const OrderDetail = ({ route, navigation }) => {
	const site = useSelector(state =>
		state.site.sites.find(site => site.key == route.params.key)
	);
	const token = useSelector(state => state.authenticate.token);
	const orders = useSelector(state => state.order.orders);
	const dispatch = useDispatch();
	const categories = [
		'',
		'Personal Protective Equipment',
		'Cleaning Chemicals',
		'Janitorial Products',
	];

	useEffect(() => {
		fetchOrders(site.name, token)
			.then(response => {
				const orders = [];
				response.forEach(order => {
					const orderObject = {
						key: order.id,
						name: order.name,
						category: categories[order.category[0]],
						quantity: order.quantity,
						date: order.date,
					};
					orders.push(orderObject);
				});
				dispatch(setOrders(orders));
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<Layout style={styles.container}>
			<FlatList
				data={orders}
				style={styles.list}
				ListHeaderComponent={
					<Text category='h1'>{site.name} Orders</Text>
				}
				renderItem={order => {
					return (
						<View style={styles.listItem}>
							<Text category='h4'>Order Name:</Text>
							<Text>{order.item.name}</Text>
							<Divider />
							<Text category='h4'>Category:</Text>
							<Text>{order.item.category}</Text>
							<Divider />
							<Text category='h4'>Quantity:</Text>
							<Text>{order.item.quantity}</Text>
							<Divider />
							<Text category='h4'>Date of Order:</Text>
							<Text>{order.item.date}</Text>
						</View>
					);
				}}
			/>
		</Layout>
	);
};

export default OrderDetail;
