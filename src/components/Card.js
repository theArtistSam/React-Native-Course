import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Card = ({cardTitle, description}) => {
  return (
    <View style={styles.newContainer}>
      {/* pass data to a component */}
      <Text style={styles.headerText}>{cardTitle}</Text>
      <Text style={styles.subText}>20 октября 2021</Text>

      <View style={styles.tagContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Дизайн</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>Data Science</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>AR</Text>
        </View>
      </View>

      <Text style={styles.descriptionText}>{description}</Text>

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>● Есть отбор</Text>
        <Text style={styles.linkText}>● Регистрация до 21.09</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newContainer: {
    marginTop: 20,
    marginHorizontal: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  subText: {
    fontSize: 14,
    color: 'grey',
    marginTop: 4,
  },

  tagContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },

  tag: {
    backgroundColor: '#E4EAFF', // Hellblauer Hintergrund für Tags
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
  },

  tagText: {
    fontSize: 12,
    color: '#0D38CE', // Textfarbe für Tags
  },

  descriptionText: {
    marginTop: 12,
    fontSize: 14,
    color: '#666', // Graue Textfarbe für die Beschreibung
  },

  linkContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },

  linkText: {
    fontSize: 14,
    color: '#0D38CE', // Blaue Textfarbe für die Links
    marginRight: 16,
  },
});
export default Card;
