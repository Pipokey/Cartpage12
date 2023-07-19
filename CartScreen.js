import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Beverly Hills1',
      price: 10,
      image: require('my-app/assets/p1.png'),
      liked: false,
      options: ['01 Black', '02 white'],
    },
    {
      id: '2',
      name: 'Beverly Hills2',
      price: 20,
      image: require('my-app/assets/p1.png'),
      liked: false,
    },
    {
      id: '3',
      name: 'Beverly Hills3',
      price: 15,
      image: require('my-app/assets/p1.png'),
      liked: false,
      options: [' 01 200 ml', ' 02 300 ml', ' 03 500 ml'],
    },
    {
      id: '4',
      name: 'Beverly Hills4',
      price: 10,
      image: require('my-app/assets/p1.png'),
      liked: false,
    },
    {
      id: '5',
      name: 'Beverly Hills5',
      price: 20,
      image: require('my-app/assets/p1.png'),
      liked: false,
    },
    {
      id: '6',
      name: 'Beverly Hills6',
      price: 15,
      image: require('my-app/assets/p1.png'),
      liked: false,
      options: ['01 small'],
    },
  ]);

  const [orderedItems, setOrderedItems] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState(false); // New state variable
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  // Calculate the total price and count for each ordered item
  const totalPrice = orderedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleAddToOrderedItems = () => {
    const newItem = {
      id: '7', // Generate a unique ID for the new item
      name: 'Donate For Children Cancer Center To Save  Childrens Lifes',
      price: 5,
      image: require('my-app/assets/22.jpg'),
      quantity: 1,
    };

    const existingItemIndex = orderedItems.findIndex(
      (orderedItem) => orderedItem.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      // Increase the quantity of the existing item if it is already in the list
      setOrderedItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      });
    } else {
      // Add the new item to the list if it doesn't exist
      setOrderedItems((prevItems) => [...prevItems, newItem]);
    }
  };



  const handleAddToOrderedItems2 = () => {
    const newItem2 = {
      id: '10', // Generate a unique ID for the new item
      name: 'Donate For Children Cancer Center',
      price: 5,
      image: require('my-app/assets/cross.png'),
      quantity: 1,
    };

    const existingItemIndex = orderedItems.findIndex(
      (orderedItem) => orderedItem.id === newItem2.id
    );

    if (existingItemIndex !== -1) {
      // Increase the quantity of the existing item if it is already in the list
      setOrderedItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      });
    } else {
      // Add the new item to the list if it doesn't exist
      setOrderedItems((prevItems) => [...prevItems, newItem2]);
    }
  };


  const handleLikeToggle = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, liked: !item.liked } : item
      )
    );
  };

  const handleCheckout = () => {
    // Implement the logic for handling the checkout here
    // For example, navigate to the checkout screen or process the payment
    console.log('Checkout pressed');
  };

  const handleAddToCart = (item) => {
    if (item.options && item.options.length > 0) {
      setSelectedItem(item);
      setIsModalVisible(true);
    } else {
      // Handle adding to cart for items without options
      console.log('Added to cart:', item.name);
      const existingItemIndex = orderedItems.findIndex(
        (orderedItem) =>
          orderedItem.name === item.name && !orderedItem.option
      );
      if (existingItemIndex !== -1) {
        // Increase the quantity of the previous ordered item if it has the same name and no option
        setOrderedItems((prevItems) => {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += 1;
          return updatedItems;
        });
      } else {
        // Add the item with quantity 1 if it is not already in the orderedItems
        setOrderedItems((prevItems) => [
          ...prevItems,
          { ...item, quantity: 1 },
        ]);
      }
    }
  };

  const handleModalOption = (option) => {
    setSelectedOption(option);
    handleConfirmOption();
  };

  const handleConfirmOption = () => {
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      setIsModalVisible(false);
      setSelectedOption(null);
      setSelectedItem(null);
      const existingItemIndex = orderedItems.findIndex(
        (orderedItem) =>
          orderedItem.name === selectedItem.name &&
          orderedItem.option === selectedOption
      );
      if (existingItemIndex !== -1) {
        // Increase quantity if an item with the same name and selected option already exists
        setOrderedItems((prevItems) => {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += 1;
          return updatedItems;
        });
      } else {
        // Add the item with option and quantity 1 if it is not already in the orderedItems
        setOrderedItems((prevItems) => [
          ...prevItems,
          { ...selectedItem, option: selectedOption, quantity: 1 },
        ]);
      }
    }
  };
  const handleCheckboxToggle = () => {
    // Toggle checkbox and text input visibility
    setCheckboxChecked(!checkboxChecked);
    setTextInputVisible(!textInputVisible);
  };

  const handleTextInputChange = (text) => {
    // Handle text input value change
    setTextInputValue(text);
  };


  const handleRemoveFromCart = (item) => {
    const existingItem = orderedItems.find(
      (orderedItem) =>
        orderedItem.id === item.id &&
        orderedItem.option === item.option // Check if the option matches
    );
    if (existingItem) {
      if (existingItem.quantity === 1) {
        // Remove the item from the orderedItems if its quantity is 1
        setOrderedItems((prevItems) =>
          prevItems.filter(
            (orderedItem) =>
              orderedItem.id !== item.id || orderedItem.option !== item.option
          )
        );
      } else {
        // Decrease the quantity by one if the item's quantity is greater than 1
        setOrderedItems((prevItems) =>
          prevItems.map((orderedItem) =>
            orderedItem.id === item.id && orderedItem.option === item.option
              ? { ...orderedItem, quantity: orderedItem.quantity - 1 }
              : orderedItem
          )
        );
      }
    }
  };


  const handleRemoveAllFromCart = (item) => {
    setOrderedItems((prevItems) =>
      prevItems.filter(
        (orderedItem) =>
          orderedItem.id !== item.id || orderedItem.option !== item.option
      )
    );
  };




  const renderItem = ({ item }) => (
    <View
      style={[
        styles.cartItem,
        { height: 190, width: 150, marginRight: 8, padding: 16 },
      ]}
    >
      <TouchableOpacity
        onPress={() => handleLikeToggle(item.id)}
        style={styles.likeButton}
      >
        <Icon
          name={item.liked ? 'heart' : 'heart-o'}
          size={24}
          color={item.liked ? 'red' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => handleAddToCart(item)}
      >
        <Icon name="cart-plus" size={24} color="gray" />
      </TouchableOpacity>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
  );

  const handleAddSameOption = (item) => {
    const existingItem = orderedItems.find(
      (orderedItem) =>
        orderedItem.id === item.id && orderedItem.option === item.option
    );
    if (existingItem) {
      // Increase quantity if the item is already in the orderedItems
      setOrderedItems((prevItems) =>
        prevItems.map((orderedItem) =>
          orderedItem.id === item.id && orderedItem.option === item.option
            ? { ...orderedItem, quantity: orderedItem.quantity + 1 }
            : orderedItem
        )
      );
    } else {
      // Add the item with quantity 1 if it is not already in the orderedItems
      setOrderedItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  const renderOrderedItem = ({ item }) => (
    <View style={styles.orderedItem}>
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
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        {orderedItems.length > 0 && (
          <View style={styles.orderedItemsContainer}>
            {/* Render ordered items */}
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

            {/* Additional information section */}


            <View style={styles.additionalInfoContainer}>
              <TouchableOpacity
                style={styles.checkboxButton}
                onPress={handleCheckboxToggle}
                activeOpacity={1} // Disable default opacity effect on press
              >
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={handleCheckboxToggle}
                  activeOpacity={1} // Disable default opacity effect on press
                >
                  {checkboxChecked ? (
                    <Icon name="check-square" size={24} color="gray" />
                  ) : (
                    <Icon name="square-o" size={24} color="gray" />
                  )}
                </TouchableOpacity>
                <
                  Text style={styles.additionalInfoText}>Do you have any special request?We'll make it happen!</Text>
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
        )}




        <View style={[styles.orderedItem2, { backgroundColor: '#dddcde', marginLeft: -20, marginRight: -20, paddingVertical: 10 }]}>
          <Image source={require('my-app/assets/22.jpg')} style={[styles.orderedItemImage2, { marginLeft: 14 }]} />
          <View style={styles.orderedItemDetails}>
            <Text style={[styles.orderedItemName, { marginLeft: -12, marginBottom: 35, fontWeight: '400', marginTop: 2 }]}>Donate For Children Cancer Center To Save  Childrens Lifes</Text>
            <Text style={[styles.orderedItemOption, { marginLeft: -12, marginTop: -10, fontWeight: '300', fontSize: 17, }]}>$5</Text>
          </View>

          <TouchableOpacity
            style={styles.closeButton2}
            onPress={handleAddToOrderedItems}
          >
            <Text style={styles.closeButton3}>+ADD</Text>
          </TouchableOpacity>
        </View>



        <View style={[styles.orderedItem2, { backgroundColor: '#dddcde', marginLeft: -20, marginRight: -20, marginTop: -16, paddingVertical: 10 }]}>
          <Image source={require('my-app/assets/cross.png')} style={[styles.orderedItemImage2, { marginLeft: 14, }]} />
          <View style={styles.orderedItemDetails}>
            <Text style={[styles.orderedItemName, { marginLeft: -12, marginBottom: 35, fontWeight: '400', marginTop: 2 }]}>Donate Red Cross Lebanon To Protect your and others Lifes</Text>
            <Text style={[styles.orderedItemOption, { marginLeft: -12, marginTop: -10, fontWeight: '300', fontSize: 17, }]}>$5</Text>
          </View>

          <TouchableOpacity
            style={styles.closeButton2}
            onPress={handleAddToOrderedItems2}
          >
            <Text style={styles.closeButton3}>+ADD</Text>
          </TouchableOpacity>
        </View>











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
        </View>


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
      </ScrollView>
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
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  TT: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: -10,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 54,
  },
  cartContainer: {
    flex: 1,
  },
  cartList: {
    paddingTop: 16,
  },
  cartItem: {
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 2,
    padding: 8,
  },
  likeButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 1,
  },
  addToCartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
    marginTop: 30,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 1,
    right: 8,
    zIndex: 1,
  },
  closeButton2: {
    position: 'absolute',
    top: 50,
    right: 15,

    zIndex: 1,
  },
  closeButton3: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeButtonImage: {
    width: 20,
    height: 20,
  },
  totalContainer: {
    backgroundColor: 'white',
    paddingRight: 51,
    paddingTop: 2,
    marginLeft: -16,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 40,

  },
  totalPrice: {
    fontSize: 16,
    paddingLeft: 40,
  },
  checkoutButton: {
    backgroundColor: 'black',
    paddingHorizontal: 75,
    paddingVertical: 12,
    marginRight: -15,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    width: 300,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  modalOptionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  orderedItemsContainer: {
    marginTop: 16,
    marginBottom: 0,
    padding: 8,
    marginLeft: -20,
    marginRight: -20,
  },
  orderedItemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderedItemsList: {
    paddingBottom: 16,
  },
  orderedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderTopColor: 'lightgray',
  },
  orderedItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  orderedItemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  orderedItemImage2: {
    width: 85,
    height: 93,
    marginRight: 16,

  },
  orderedItemDetails: {
    flex: 1,
    marginRight: 8,
  },
  orderedItemName: {
    fontSize: 14,
    marginBottom: 4,
    color: 'black',
  },
  orderedItemOption: {
    fontSize: 12,
    color: 'gray',
  },
  orderedItemQuantity: {
    fontSize: 14,
    color: 'gray',
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  orderedItemPrice: {
    fontSize: 14,
    color: 'gray',
    paddingTop: 60,
    paddingRight: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: -15,
  },
  quantityButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
  },
  quantityButtonGray: {
    backgroundColor: 'lightgray',
  },
  quantityButtonImage: {
    width: 16,
    height: 16,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 16,
    marginTop: -15,
  },


  subtotalText: {
    fontSize: 20,
    fontWeight: '300',
  },
  subtotalPrice: {
    fontSize: 20,
    fontWeight: '400',
  },
  additionalInfoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 8,
    marginHorizontal: 10,
  },

  checkboxButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  checkbox: {
    marginRight: 8,


  },



  checkbox: {
    marginRight: 8,
  },
  additionalInfoText: {
    fontSize: 15,
    marginRight: 15,
    fontWeight: '300',
  },
  textInput: {
    borderWidth: 1,
    textAlignVertical: 'top',
    borderColor: 'lightgray',
    height: 200,
    width: '100%',
    marginVertical: 8,
    padding: 8,
  },


  checkboxLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabelText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 4,
  },
});

export default CartScreen;
