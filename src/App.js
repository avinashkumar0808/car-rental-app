import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import auth from '@react-native-firebase/auth';

import AppNavigator from './commonComponent/Navigation';

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    };

    init().finally(async () => {
      
        if(!initializing){
          await BootSplash.hide({fade: true});
      
      console.log('BootSplash has been hidden successfully');
        }
    });
  }, [initializing]);

  return (
    <View style={styleSheet.container}>
      <AppNavigator user={user} />
    </View>
  );
}

export default App;

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
});
