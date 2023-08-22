
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

interface LeadFormProps {
  onSubmit: (lead: LeadDetails) => void;
}

interface LeadDetails {
  name: string;
  email: string;
  phone: string;
  company: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const handleFormSubmit = () => {
    if (name && email && phone && company) {
      const lead: LeadDetails = {
        name,
        email,
        phone,
        company,
      };
      onSubmit(lead);
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Company"
        value={company}
        onChangeText={setCompany}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};

export default LeadForm;