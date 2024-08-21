import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  {key: '1', name: 'John Doe', age: 30, profession: 'Developer'},
  {key: '2', name: 'Jane Smith', age: 25, profession: 'Designer'},
  {key: '3', name: 'John Doe', age: 30, profession: 'Developer'},
  {key: '4', name: 'Jane Smith', age: 25, profession: 'Designer'},
  {key: '5', name: 'John Doe', age: 30, profession: 'Developer'},
  {key: '6', name: 'Jane Smith', age: 25, profession: 'Designer'},
  {key: '7', name: 'John Doe', age: 30, profession: 'Developer'},
  {key: '8', name: 'Jane Smith', age: 25, profession: 'Designer'},
  {key: '9', name: 'John Doe', age: 30, profession: 'Developer'},
  {key: '10', name: 'Jane Smith', age: 25, profession: 'Designer'},

];

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>Name: {item.name}</Text>
              <Text style={styles.info}>Age: {item.age}</Text>
              <Text style={styles.info}>Profession: {item.profession}</Text>
            </View>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }

  renderSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#f0f0f0', // Light grey background
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffffff', // White background for items
    borderRadius: 10, // Rounded corners for items
    shadowColor: '#000', // Shadow for elevation effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, // Elevation for Android
  },
  name: {
    fontSize: 22,
    fontWeight: '600', // Slightly less bold
    color: '#333333', // Darker text color
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
    color: '#666666', // Grey text color for less emphasis
  },
  separator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "14%",
  },
});

export default App;
