import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
const ProductRecommendation = ({
  cartItems,
  renderItem,
  selectedOption,
  handleModalOption,
  selectedItem,
  isModalVisible,
}) => {
  return (
    <View style={styles.cartContainer}>
      <Text style={styles.TT}>YOU MAY ALSO LIKE</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      {selectedItem && (
        <Modal visible={isModalVisible} transparent={true} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ marginBottom: 15, fontSize: 17 }}>
                Choose a Product
              </Text>
              {selectedItem.options.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleModalOption(option)}
                  style={styles.modalOption}
                >
                  <View style={styles.radioButton}>
                    {selectedOption === option && (
                      <View style={styles.radioButtonSelected} />
                    )}
                  </View>
                  <Text style={styles.modalOptionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default ProductRecommendation;
