import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';

import {itemsData} from './assets/data/items';
import AddItem from './components/AddItem';

import Header from './components/Header';
import ListItem from './components/ListItem';

import {v4 as uuidv4} from 'uuid';

const App = () => {
  const title = 'Shopping List';

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'Error',
        'Please Enter an Item',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text: text}, ...prevItems];
      });
    }
  };

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title={title} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} addItem={addItem} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
