import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/Card';
import React, {useState} from 'react';
import CustomButtom from '../components/Button';

const cardItems = [
  {
    title: 'Card Title',
    description: 'This is card description',
  },
  {
    title: 'Card Title ',
    description: 'This is card description',
  },
  {
    title: 'Card Title ',
    description: 'This is card description',
  },
];

// In order to map. Create an array of size 10
const items = Array(10).fill(null);

const HomeScreen = () => {
  // Hooks in react native

  // useState to change the state of an item
  const [title, setTitle] = useState(
    'Учавствуй Совершенствуйся Выигрывай бабло',
  );

  return (
    <View style={styles.outerContainer}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/background.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>{title}</Text>
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
      {/* <FlatList
        data={cardItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Card
            key={index.toString()}
            cardTitle={item.title + index.toString()}
            description={item.description + index.toString()}
          />
        )}
      /> */}

      {/* Button Component */}
      {/* Base Button component doens't allow customization */}
      {/* <Button title="Click Me" onPress={() => alert('Button Pressed')} /> */}

      {/* Custom Button Component */}
      {/* Passing stle as a property to a custom component */}
      <CustomButtom
        onPress={() => {
          setTitle('This is a random title');
          alert('Title changed');
        }}
        text={'Custom Button'}
        style={{backgroundColor: 'red'}}
      />

      {/* Render the cards 10 times */}
      {/* Kind of like a ListView Builder in FLutter */}
      <ScrollView>
        {items.map((item, index) => (
          <Card
            key={index.toString()}
            cardTitle={`Card Title ${index + 1}`}
            description={`This is card description ${index + 1}`}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Heller blauer Hintergrund
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
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingHorizontal: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center', // Center the text inside the button
  },
});

export default HomeScreen;
