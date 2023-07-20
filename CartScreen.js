import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import BottomSection from './BottomSection';
import DonationItem from './DonationItem';
import ProductRecommendation from './ProductRecommendation';
import styles from './styles';
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
import OrderedItemsSection from './OrderedItemsSection';
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
  const [checkboxChecked, setCheckboxChecked] = useState(false); 
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  
  const totalPrice = orderedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleAddToOrderedItems = () => {
    const newItem = {
      id: '7',
      name: 'Donate For Children Cancer Center To Save  Childrens Lifes',
      price: 5,
      image: require('my-app/assets/22.jpg'),
      quantity: 1,
    };

    const existingItemIndex = orderedItems.findIndex(
      (orderedItem) => orderedItem.id === newItem.id
    );

    if (existingItemIndex !== -1) {
     
      setOrderedItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      });
    } else {
    
      setOrderedItems((prevItems) => [...prevItems, newItem]);
    }
  };



  const handleAddToOrderedItems2 = () => {
    const newItem2 = {
      id: '10', 
      name: 'Donate For Children Cancer Center',
      price: 5,
      image: require('my-app/assets/cross.png'),
      quantity: 1,
    };

    const existingItemIndex = orderedItems.findIndex(
      (orderedItem) => orderedItem.id === newItem2.id
    );

    if (existingItemIndex !== -1) {
      
      setOrderedItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      });
    } else {
     
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
   
    console.log('Checkout pressed');
  };

  const handleAddToCart = (item) => {
    if (item.options && item.options.length > 0) {
      setSelectedItem(item);
      setIsModalVisible(true);
    } else {
    
      console.log('Added to cart:', item.name);
      const existingItemIndex = orderedItems.findIndex(
        (orderedItem) =>
          orderedItem.name === item.name && !orderedItem.option
      );
      if (existingItemIndex !== -1) {
       
        setOrderedItems((prevItems) => {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += 1;
          return updatedItems;
        });
      } else {
      
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
      
        setOrderedItems((prevItems) => {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += 1;
          return updatedItems;
        });
      } else {
        
        setOrderedItems((prevItems) => [
          ...prevItems,
          { ...selectedItem, option: selectedOption, quantity: 1 },
        ]);
      }
    }
  };
  const handleCheckboxToggle = () => {
   
    setCheckboxChecked(!checkboxChecked);
    setTextInputVisible(!textInputVisible);
  };

  const handleTextInputChange = (text) => {
 
    setTextInputValue(text);
  };


  const handleRemoveFromCart = (item) => {
    const existingItem = orderedItems.find(
      (orderedItem) =>
        orderedItem.id === item.id &&
        orderedItem.option === item.option 
    );
    if (existingItem) {
      if (existingItem.quantity === 1) {
        
        setOrderedItems((prevItems) =>
          prevItems.filter(
            (orderedItem) =>
              orderedItem.id !== item.id || orderedItem.option !== item.option
          )
        );
      } else {
       
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
    
      setOrderedItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
      {orderedItems.length > 0 && (
        <OrderedItemsSection
          orderedItems={orderedItems}
          totalPrice={totalPrice}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddSameOption={handleAddSameOption}
          handleRemoveAllFromCart={handleRemoveAllFromCart}
          handleCheckboxToggle={handleCheckboxToggle}
          checkboxChecked={checkboxChecked}
          textInputVisible={textInputVisible}
          textInputValue={textInputValue}
          handleTextInputChange={handleTextInputChange}
        />
      )}




<DonationItem
        imageSource={require('my-app/assets/22.jpg')}
        name="Donate For Children Cancer Center To Save Children's Lives"
        price={5}
        onPressAdd={handleAddToOrderedItems}
      />

    
      <DonationItem
        imageSource={require('my-app/assets/cross.png')}
        name="Donate Red Cross Lebanon To Protect your and others Lives"
        price={5}
        onPressAdd={handleAddToOrderedItems2}
      />

<ProductRecommendation
        cartItems={cartItems}
        renderItem={renderItem}
        selectedOption={selectedOption}
        handleModalOption={handleModalOption}
        selectedItem={selectedItem}
        isModalVisible={isModalVisible}
      />
      </ScrollView>
      <BottomSection totalPrice={totalPrice} handleCheckout={handleCheckout} />
    </View>
  );
};





export default CartScreen;
