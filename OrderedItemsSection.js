import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const OrderedItemsSection = ({
  orderedItems,
  totalPrice,
  handleRemoveFromCart,
  handleAddSameOption,
  handleRemoveAllFromCart,
  handleCheckboxToggle,
  checkboxChecked,
  textInputVisible,
  textInputValue,
  handleTextInputChange,
}) => {
  return (
    <View style={styles.orderedItemsContainer}>
    
      <View style={styles.orderedItemsList}>
        {orderedItems.map((item, index) => (
          <View key={`${item.id}-${item.option}-${index}`} style={styles.orderedItem}>
            <Image source={item.image} style={styles.orderedItemImage} />
            <View style={styles.orderedItemDetails}>
              <Text style={styles.orderedItemName}>{item.name}</Text>
              {item.option && <Text style={styles.orderedItemOption}>{item.option}</Text>}
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleRemoveFromCart(item)}
                >
                  <Image
                    source={require('my-app/assets/p4.png')}
                    style={styles.quantityButtonImage}
                  />
                </TouchableOpacity>
                <Text style={styles.orderedItemQuantity}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleAddSameOption(item)}
                >
                  <Image
                    source={require('my-app/assets/p22.png')}
                    style={styles.quantityButtonImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.orderedItemPrice}>${item.price * item.quantity}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => handleRemoveAllFromCart(item)}
            >
              <Image
                source={require('my-app/assets/p2.png')}
                style={styles.closeButtonImage}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {orderedItems.length > 0 && (
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.subtotalPrice}>${totalPrice}</Text>
        </View>
      )}

     
      <View style={styles.additionalInfoContainer}>
        <TouchableOpacity
          style={styles.checkboxButton}
          onPress={handleCheckboxToggle}
          activeOpacity={1} 
        >
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleCheckboxToggle}
            activeOpacity={1} 
          >
            {checkboxChecked ? (
              <Icon name="check-square" size={24} color="gray" />
            ) : (
              <Icon name="square-o" size={24} color="gray" />
            )}
          </TouchableOpacity>
          <Text style={styles.additionalInfoText}>Do you have any special request? We'll make it happen!</Text>
        </TouchableOpacity>

        {textInputVisible && (
          <TextInput
            style={styles.textInput}
            placeholder="Enter additional information"
            value={textInputValue}
            onChangeText={handleTextInputChange}
            multiline={true}
          />
        )}
      </View>
    </View>
  );
};

export default OrderedItemsSection;
