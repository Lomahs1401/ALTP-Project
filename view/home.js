import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {

    const pressHandler = () => {
        // navigation.navigate('About')
        navigation.push('About')
    };

    return (
        <SafeAreaView style={styles.MainMenu}>
            <Image source={require('../Img/backgnd.png')} style={styles.MainIMG} />
            <TouchableOpacity onPress={pressHandler}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>Chơi ngay</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>Thống kê</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>Thoát trò chơi</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>Thông tin ứng dụng</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
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

export default Home;