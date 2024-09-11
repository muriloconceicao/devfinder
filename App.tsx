import React from 'react';
import {View} from 'react-native';
import Mainscreen from './src/screens/Mainscreen';

const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Mainscreen />
    </View>
  );
};

export default App;
