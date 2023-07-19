import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const HelloWorldComponent = () => {
  const [displayText, setDisplayText] = useState('');

  const handlePress = () => {
    setDisplayText('Hello, World!');
  };

  return (
    <View>
      <Button title="Press Me" onPress={handlePress} />
      <Text>{displayText}</Text>
    </View>
  );
};

export default HelloWorldComponent;