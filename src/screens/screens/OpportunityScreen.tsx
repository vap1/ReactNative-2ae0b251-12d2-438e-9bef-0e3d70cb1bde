
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { OpportunityDetails, UserRegistrationResponse } from '../api/types';
import { getOpportunities } from '../api/api';

const OpportunityScreen: React.FC = () => {
  const [opportunities, setOpportunities] = useState<OpportunityDetails[]>([]);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const response: UserRegistrationResponse = await getOpportunities();
      if (response.success) {
        setOpportunities(response.data);
      } else {
        console.log('Error fetching opportunities:', response.errorMessage);
      }
    } catch (error) {
      console.log('Error fetching opportunities:', error);
    }
  };

  const renderOpportunityItem = ({ item }: { item: OpportunityDetails }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.status}</Text>
      {/* Render other opportunity details */}
    </View>
  );

  return (
    <View>
      <Text>Opportunity Screen</Text>
      <FlatList
        data={opportunities}
        renderItem={renderOpportunityItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default OpportunityScreen;