import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import { globalStyles, images } from '../styles/globalStyles';

export default function Test({ route, navigation }) {

    const reps = 10;
    const [isRunning, setIsRunning] = useState(false);
    const [counter, setCounter] = React.useState(reps);

    useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);

      function handleReps() {
        setIsRunning(!isRunning);
        if(isRunning) {
            useEffect();
        }
      }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                {counter}
            </Text>
            <Button 
                title={isRunning ? 'End Challenge' : 'Start Challenge'}
                
            />
        </View>
    )

}