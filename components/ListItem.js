import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemViewText}>{props.item.text}</Text>
        <Icon
          name="trash-alt"
          size={20}
          color="firebrick"
          onPress={() => props.deleteItem(props.item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemViewText: {
    fontFamily: 'SFUIDisplayMedium',
    fontSize: 20,
  },
});

export default ListItem;
