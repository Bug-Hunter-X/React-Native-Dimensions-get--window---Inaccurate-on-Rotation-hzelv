import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [dimensions, setDimensions] = useState({ width, height });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default MyComponent;