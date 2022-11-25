import React from "react";
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
function GameUI(){
    return(
        <SafeAreaView style={styles.MainMenu}>
       <View style={styles.Question}>
        <Text style={styles.QuestionText}>Question</Text>
       </View>
        <View style ={styles.Help}>
        <TouchableOpacity>
            <Image/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image/>
        </TouchableOpacity>
        </View>

       <TouchableOpacity>
         <View style={styles.Button}>
           <Text style={styles.ButtonText}>A</Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity>
         <View style={styles.Button}>
           <Text style={styles.ButtonText}>B</Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity>
         <View style={styles.Button}>
           <Text style={styles.ButtonText}>C</Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity>
         <View style={styles.Button}>
           <Text style={styles.ButtonText}>D</Text>
         </View>
       </TouchableOpacity>
     </SafeAreaView>
    
    );
}
const styles = StyleSheet.create({
  MainMenu: {
    backgroundColor: 'slateblue',
    height: 800,
  },
  Question:{
    height: 200,
    backgroundColor: 'midnightblue',
  },
  QuestionText:{
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
  },
  Button: {
    alignContent: 'center',
    marginTop: 20,
    marginLeft: 5,
    paddingTop: 5,
    alignItems: 'center',
    backgroundColor: 'midnightblue',
    height: 45,
    width: 380,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  ButtonText: {
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
  },
});

export default GameUI;