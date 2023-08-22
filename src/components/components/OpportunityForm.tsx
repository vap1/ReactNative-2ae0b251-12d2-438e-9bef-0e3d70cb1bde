
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface OpportunityFormProps {
  onSubmit: (opportunity: OpportunityDetails) => void;
}

interface OpportunityDetails {
  // Define the fields for opportunity details here
}

const OpportunityForm: React.FC<OpportunityFormProps> = ({ onSubmit }) => {
  const [opportunity, setOpportunity] = useState<OpportunityDetails>({
    // Initialize the opportunity details state here
  });

  const handleInputChange = (field: keyof OpportunityDetails, value: string) => {
    setOpportunity(prevOpportunity => ({
      ...prevOpportunity,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(opportunity);
  };

  return (
    <View style={styles.container}>
      {/* Render the input fields for opportunity details */}
      <TextInput
        style={styles.input}
        placeholder="Opportunity Name"
        value={opportunity.name}
        onChangeText={value => handleInputChange('name', value)}
      />
      {/* Add more input fields for other opportunity details */}
      
      {/* Render the submit button */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default OpportunityForm;