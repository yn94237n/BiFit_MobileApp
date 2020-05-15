import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Card from '../shared/card';
import { Entypo } from '@expo/vector-icons';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function Challenges({ navigation }) {

    const [challenges, setChallenges] = useState([
        {challengeName: 'Crunches', reps: 100, imageSrc: 'crunches.gif', key: '1'},
        {challengeName: 'Push-Ups', reps: 100, imageSrc: 'pushUps.gif', key: '2'},
        {challengeName: 'Squat Pulse', reps: 100, imageSrc: 'squatPulses.gif',  key: '3'},
        {challengeName: 'Lounges', reps: 90, imageSrc: 'lounges2.gif',  key: '4'},
        {challengeName: 'V-Crunches', reps: 90, imageSrc: 'vcrunches.gif',  key: '5'}
    ]);

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}> 
                <Text style={styles.titleText}>
                    Select a Challenge
                </Text>
            </View>
            <View style={styles.ChallengesContainer}>
                <FlatList 
                    data={challenges}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DoChallenge', item )}>
                            <Card>
                                <Text style={globalStyles.ChallengeTitleText}>{ item.challengeName }
                                    <Text style={styles.chevron}><Entypo name="chevron-right" size={24} color="#073e76" /> </Text>
                                </Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#d9d9d9',
        padding: 14,
    },
    titleContainer: {
        height: 1*(deviceHeight/8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    ChallengesContainer: {
        justifyContent: 'center',
        height: 4*(deviceHeight/8),
    },
    titleText: {
        textAlign: 'center',
        color: '#073e76',
        fontSize: 30,
        fontFamily: 'SourceSansPro-Regular',
    },
    chevron: {
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 12,
    },
})