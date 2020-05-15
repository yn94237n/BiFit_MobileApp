import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#001c38',
    },
    ChallengeTitleText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 22,
        color: '#001c38',
    },
    doChallengeTitleText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 37,
        color: '#073e76',
        textAlign: 'center',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
  });

export const images = {
    imgFileName: {
        '1': require('../assets/crunches.gif'),
        '2': require('../assets/pushUps.gif'),
        '3': require('../assets/squatPulses.gif'),
        '4': require('../assets/lounges2.gif'),
        '5': require('../assets/vcrunches.gif'),
    }
}