import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function ReportIssueScreen() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          location,
        }),
      });

      const result = await response.json();

      if (response.status === 201) {
        Alert.alert('Success', 'Issue reported successfully');
      } else {
        Alert.alert('Error', 'Failed to report the issue');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
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
