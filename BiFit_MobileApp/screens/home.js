import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/gym3.jpg')} style={styles.bannerImage} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Start your training</Text>
                <View
                    style={{
                    height: 0.05*(deviceHeight/8),
                    borderBottomColor: '#073e76',
                    borderBottomWidth: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 12,
                    }}
                >
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.ChallengesContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Challenges')} style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/dumbell6.png')} style={styles.dumbbellImage} />
                        <Text style={styles.titleText}>{`Challenges\nWorkouts for Fast Fat Burning`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.workoutRoutinesContainer}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/calendar-icon.png')} style={styles.calendarImage} />
                        <Text style={styles.titleText}>{`Workouts\nRoutines & Training Programs`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#d9d9d9',
    },
    imgContainer: {
        height: 3.2*(deviceHeight/8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        height: 0.7*(deviceHeight/8),
        marginVertical: 3,
        padding: 17,
      },
    optionsContainer: {
        height: 2*(deviceHeight/8),
        marginVertical: 0,
        padding: 18,
    },
    workoutRoutinesContainer: {
        
    },
    ChallengesContainer: {
        marginVertical: 20,
    },
    title: {
        color: '#073e76',
        fontSize: 25,
        fontFamily: 'SourceSansPro-Regular',
      },
    calendarImage: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    dumbbellImage: {
        width: 45,
        height: 45,
        marginHorizontal: 10,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    titleText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 18,
        color: '#001c38',
    },
})