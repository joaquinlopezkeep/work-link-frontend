import { Layout, Text } from '@ui-kitten/components';
import { useState } from 'react';
import { View } from 'react-native';

const OrderForm = ({ navigation, route }) => {
	const [orderDetails, setOrderDetails] = useState({
		category: '',
		name: '',
		quantity: 0,
		fullfilled: false,
	});

	return (
		<Layout style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
			<View>
				<Text>Form Goes here!</Text>
			</View>
		</Layout>
	);
};

export default OrderForm;
