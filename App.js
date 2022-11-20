/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Navigator from './routes/homeStack'

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <Navigator />
  )
  //  return (
  //    <SafeAreaView style={styles.MainMenu}>
  //      <Image source={require('./Img/backgnd.png')} style={styles.MainIMG} />
  //      <TouchableOpacity>
  //        <View style={styles.Button}>
  //          <Text style={styles.ButtonText}>Chơi ngay</Text>
  //        </View>
  //      </TouchableOpacity>
  //      <TouchableOpacity>
  //        <View style={styles.Button}>
  //          <Text style={styles.ButtonText}>Thống kê</Text>
  //        </View>
  //      </TouchableOpacity>
  //      <TouchableOpacity>
  //        <View style={styles.Button}>
  //          <Text style={styles.ButtonText}>Thoát trò chơi</Text>
  //        </View>
  //      </TouchableOpacity>
  //      <TouchableOpacity>
  //        <View style={styles.Button}>
  //          <Text style={styles.ButtonText}>Thông tin ứng dụng</Text>
  //        </View>
  //      </TouchableOpacity>
  //    </SafeAreaView>
  //  );
};

// const styles = StyleSheet.create({
//   MainIMG: {
//     alignSelf: 'center',
//     marginVertical: 20
//   },
//   MainMenu: {
//     backgroundColor: 'slateblue',
//     height: 800,
//   },
//   Button: {
//     alignContent: 'center',
//     marginTop: 20,
//     marginLeft: 50,
//     paddingTop: 5,
//     alignItems: 'center',
//     backgroundColor: 'midnightblue',
//     height: 45,
//     width: 300,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: 'white',
//   },
//   ButtonText: {
//     fontSize: 22,
//     fontWeight: '500',
//     color: 'white',
//   },
// });

export default App;
