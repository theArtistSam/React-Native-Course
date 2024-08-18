import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import Card from '../components/Card';
import React from 'react';

const HomeScreen = () => {
  const cardItems = [
    {
      title: 'Card Title',
      description: 'This is card description',
    },
    {
      title: 'Card Title ',
      description: 'This is card description',
    },
  ];
  return (
    <View style={styles.outerContainer}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/background.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>
            Учавствуй Совершенствуйся Выигрывай бабло
          </Text>
          <Text style={styles.normalText}>последнее не точно</Text>
        </View>
      </View>

      {/* Card Component*/}
      {/* Scrollable Components */}
      {/* Render same of different types of components */}
      {/* <ScrollView>
        <Card cardTitle="CARD TITLE" description={'This is card description'} />
        <Card cardTitle="CARD TITLE" description={'This is card description'} />
        <Card cardTitle="CARD TITLE" description={'This is card description'} />
      </ScrollView> */}

      {/* FlatList: Renders one component a certain number of times */}
      <FlatList
        data={cardItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Card
            key={index.toString()}
            cardTitle={item.title + index.toString()}
            description={item.description + index.toString()}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    // backgroundColor: '#ADD8E6', // Heller blauer Hintergrund
  },

  image: {
    width: null,
    height: 235,
    resizeMode: 'cover',
  },

  textContainer: {
    position: 'absolute',
    left: 24,
    bottom: 24,
  },

  boldText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingRight: 24,
    color: 'white',
  },

  normalText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'white',
  },
});

export default HomeScreen;
