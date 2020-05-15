import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function DietPlan() {
    
    return (
      
      <View style={styles.container}>
        
        <View style={styles.imgContainer}>
          <Image source={require('../assets/dietBanner2.jpg')} style={styles.bannerImage} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>DIET PLAN DETAILS:</Text>
          <View
            style={{
              height: 0.05*(deviceHeight/8),
              borderBottomColor: '#073e76',
              borderBottomWidth: 4,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 10,
            }}
          >
          </View>
        </View>
        
        <View style={styles.dietContainer}>
          <ScrollView
            style={{ flex: 1 }}
          >
            <Text style={styles.DietMenuTitle}>Breakfast (287 calories)</Text>
            <Text style={styles.DietMenuDish}>
              <Entypo name='dot-single' size={22} color='#333' /> 1 serving Muesli with Raspberries
            </Text>
            <Text style={styles.DietMenuPrep}>
              Clean-Eating Shopping Tip: When buying muesli, look for a brand that doesn't have added sugars, 
              which take away from the healthy goodness of this whole-grain breakfast.
            </Text>
            <Text style={styles.DietMenuTitle}>A.M. Snack (62 calories)</Text>
            <Text style={styles.DietMenuDish}>
              <Entypo name='dot-single' size={22} color='#333' /> 1 medium orange 
            </Text>
            <Text style={styles.DietMenuTitle}>Lunch (360 calories)</Text>
            <Text style={styles.DietMenuDish}>
              <Entypo name='dot-single' size={22} color='#333' />4 cups White Bean & Veggie Salad
            </Text>
            <Text style={styles.DietMenuTitle}>P.M. Snack (95 calories)</Text>
            <Text style={styles.DietMenuDish}>
              <Entypo name='dot-single' size={22} color='#333' />1 medium apple
            </Text>
            <Text style={styles.DietMenuTitle}>Dinner (420 calories)</Text>
            <Text style={styles.DietMenuDish}>
              <Entypo name='dot-single' size={22} color='#333' />4 cups (1 1/2 servings) Kale Salad with Beets & Wild Rice
            </Text>
            <Text style={styles.DietMenuDish}>
              <Entypo name='dot-single' size={22} color='#333' />1 serving Balsamic-Dijon Chicken 
            </Text>
            <Text style={styles.DietMenuPrep}>Meal-Prep Tip: Save 1 serving Balsamic-Dijon Chicken (1/2 breast) for lunch of Day 2.</Text>
            <Text style={styles.DietMenuPrep}>Daily Totals: 1,224 calories, 61 g protein, 153 g carbohydrates, 40 g fiber, 47 g fat, 1,400 mg sodium.</Text>
        
            </ScrollView>
            
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
      height: 2.8*(deviceHeight/8),
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      height: 0.7*(deviceHeight/8),
      marginVertical: 3,
      padding: 20,
    },
    dietContainer: {
      height: 3.6*(deviceHeight/8),
      marginHorizontal: 20,
      marginVertical: 10,
    },
    title: {
      color: '#073e76',
      fontSize: 25,
      fontFamily: 'SourceSansPro-Regular',
    },
    DietMenuTitle: {
      color: '#3b3b3b',
      fontSize: 20,
      fontFamily: 'SourceSansPro-Bold',
      padding: 10,
    },
    DietMenuDish: {
      color: '#3b3b3b',
      fontSize: 19,
      fontFamily: 'SourceSansPro-Regular',
      marginHorizontal: 2,
    },
    DietMenuPrep: {
      color: '#3b3b3b',
      fontSize: 19,
      fontFamily: 'SourceSansPro-Regular',
      padding: 10,
    },
    bannerImage: {
      width: '100%',
      height: '100%',
    },
})