import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function ChallengesList({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{ route.params?.challengeName ?? 'Challenge Not Found' }</Text>
      <Text style={globalStyles.titleText}>{ route.params?.timeFrame ?? 'Time Frame Not Found' }</Text>
      <Text style={globalStyles.titleText}>{ route.params?.imageSrc ?? 'Image Not Found' }</Text>
    </View>
  );
}