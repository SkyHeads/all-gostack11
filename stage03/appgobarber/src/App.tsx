import React from 'react';
import { StatusBar, View } from 'react-native';

import Title from './components/Title';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <StatusBar backgroundColor="#312e38" barStyle="light-content" />
    </View>
  );
};

export default App;
