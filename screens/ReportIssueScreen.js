import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function ReportIssueScreen() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    // For now, we'll just alert the user with the report details
    Alert.alert('Issue Reported', `Description: ${description}\nLocation: ${location}`);
    
    // Ideally, you'd send the report to a backend server here
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Report an Issue</Text>
      <TextInput 
        placeholder="Describe the issue"
        value={description}
        onChangeText={setDescription}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput 
        placeholder="Enter the location"
        value={location}
        onChangeText={setLocation}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
