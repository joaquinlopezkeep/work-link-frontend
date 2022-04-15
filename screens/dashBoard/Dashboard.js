import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout, Text } from '@ui-kitten/components';

const Dashboard = props => {
	return (
		<Layout
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text>Dashboard</Text>
		</Layout>
	);
};

export default Dashboard;
