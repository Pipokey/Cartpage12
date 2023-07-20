import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
const DonationItem = ({ imageSource, name, price, onPressAdd }) => {
  return (
    <View style={styles.orderedItem2}>
      <Image source={imageSource} style={styles.orderedItemImage2} />
      <View style={styles.orderedItemDetails}>
        <Text style={styles.orderedItemName}>{name}</Text>
        <Text style={styles.orderedItemOption}>${price}</Text>
      </View>

      <TouchableOpacity style={styles.closeButton2} onPress={onPressAdd}>
        <Text style={styles.closeButton3}>+ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonationItem;
