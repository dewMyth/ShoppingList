import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Touchable,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const AddItem = props => {
  const [text, setText] = useState('');

  const onChange = textValue => {
    setText(textValue);
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.textinput}
        onChangeText={onChange}
        placeholderTextColor="#9b9b9b"
      />
      <TouchableOpacity style={styles.btn} onPress={() => props.addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    fontFamily: 'SFUIDisplayMedium',
    fontSize: 16,
    height: 50,
    padding: 8,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 10,
    borderRadius: 15,
  },
  btnText: {
    fontFamily: 'Nunito-Bold',
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
