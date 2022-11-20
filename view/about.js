import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import firestore from '@react-native-firebase/firestore'

// class About extends Component {
//     data = {
//         questions: {
//             content: "",
//             type: "",
//             answers: ""
//         }
//     }

//     constructor(props) {
//         super(props);
//         this.getQuestions();
//         this.subscriber = firestore().collection("questions").doc('RTamGXX4f9oDWlEie0Nb').onSnapshot(doc => {
//             this.setState({
//                 questions: {
//                     content: doc.data().content,
//                     type: doc.data().type,
//                     answers: doc.data().answers,
//                 }
//             })
//         });
//     }

//     getQuestions = async() => {
//         const question = await firestore().collection("questions").doc('RTamGXX4f9oDWlEie0Nb').get();
//     }

//     render() {
//         return (
//             <View>
//                 <Text>Content: {this.data.questions.content}</Text>
//                 <Text>Type: {this.data.questions.type}</Text>
//                 <Text>Answers: {this.data.questions.answers}</Text>
//             </View>
//         )
//     }

// }

const About = (props) => {

    const ReadData = () => {
        const questionCollection = doc()
    }

    data = {
        questions: {
            content: "",
            type: "",
            answers: ""
        }
    }

    getQuestions = async() => {
        const question = await firestore().collection("questions").get().then(querySnapshot => {
            console.log('Total questions: ', querySnapshot.size)
            querySnapshot.forEach(documentSnapshot => {
                console.log('Question ID: ', documentSnapshot.id, documentSnapshot.data());
            });
        });
        
    }

    return (
        <View>
            <Text>Hello</Text>
            <Text>Hello world!</Text>
            <Text>Hello world!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    MainIMG: {
        alignSelf: 'center',
        marginVertical: 20
    },
    MainMenu: {
        backgroundColor: 'slateblue',
        height: 800,
    },
    Button: {
        alignContent: 'center',
        marginTop: 20,
        marginLeft: 50,
        paddingTop: 5,
        alignItems: 'center',
        backgroundColor: 'midnightblue',
        height: 45,
        width: 300,
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

export default About;