import React, { useState } from 'react';
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
