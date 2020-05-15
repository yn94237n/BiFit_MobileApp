import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import { globalStyles, images } from '../styles/globalStyles';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function DoChallenge({ route, navigation }) {

  const challengeKey = route.params?.key ?? 'Challenge Not Found';
  const reps = route.params?.reps ?? 'Reps Not Found';

  const [isRunning, setIsRunning] = useState(false);
  //const [countReps, setCountReps] = useState(reps);
  const [counter, setCounter] = useState(reps);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1200);
    return () => clearInterval(timer);
  }, [counter]);

  const handleTime = () => {
    setIsRunning(!isRunning);
    //handleReps2(_reps)
  };

  function handleReps() {
    setIsRunning(!isRunning);
    CountDown(countReps);
  }

  function CountDown(_reps) {
    let countReps = _reps;
    if(isRunning) {
      countReps = countReps - 1;
      setCountReps(countReps);
    }
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <View style={styles.titleSection}>
        <Text style={globalStyles.doChallengeTitleText}>
          { route.params?.reps ?? 'Time Frame Not Found' } { route.params?.challengeName ?? 'Challenge Not Found' }
        </Text>
        <Text style={globalStyles.doChallengeTitleText}>Challenge</Text>
      </View>
      <View style={styles.img}>
        <Image source={images.imgFileName[challengeKey]} style= {{ width: 350, height: 350}} />
      </View>
      <View style={styles.repsCount}>
        <Text style={globalStyles.doChallengeTitleText}>
          {counter} reps left
        </Text>
        <Button 
          title={'    Go Back    '}
          onPress={goBack} 
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
  },
  titleSection: {
    height: 1.5*(deviceHeight/8),
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  img: {
    height: 3.5*(deviceHeight/8),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imgChallenge: {
    flex: 1,
    width: 350,
    height: 350,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12,
    marginTop: 5,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  repsCount: {
    height: 1.5*(deviceHeight/8),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
  },
})