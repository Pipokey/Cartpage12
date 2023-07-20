import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
const BottomSection = ({ totalPrice, handleCheckout }) => {
  return (
    <View style={styles.bottomSection}>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>${totalPrice}</Text>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleCheckout}
      >
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSection;
