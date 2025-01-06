import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

import AppNavigator from './commonComponent/Navigation';

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <View style={styleSheet.container}>
      <AppNavigator />
    </View>
  );
}

export default App;

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
});
