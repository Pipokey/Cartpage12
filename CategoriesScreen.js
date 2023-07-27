import React, { useState } from 'react';
import { View } from 'react-native';
import Navbar from './VerticalNav';
import styles from './styles';
import MenScreen from './MenScreen';
import WomenScreen from './WomenScreen';
import KidsScreen from './KidsScreen';
import Home from './Home';
import NewArrivals from './NewArrivals';
import Faces from './Faces';
import Offers from './Offers';
import Bazzar from './Bazzar';
import Salons from './Salons';

const CategoriesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Men');

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (

    <View style={styles.container}>

      <View style={styles.navbar}>
        <Navbar selectedCategory={selectedCategory} handleCategoryPress={handleCategoryPress} />
      </View>
      <View style={styles.content}>
        {selectedCategory === 'Home' && <Home />}
        {selectedCategory === 'Arrivals' && <NewArrivals />}
        {selectedCategory === 'Faces' && <Faces />}
        {selectedCategory === 'Offers' && <Offers />}
        {selectedCategory === 'Bazzar' && <Bazzar />}
        {selectedCategory === 'Women' && <WomenScreen />}
        {selectedCategory === 'Men' && <MenScreen />}
        {selectedCategory === 'Kids' && <KidsScreen />}
        {selectedCategory === 'Salon' && <Salons />}
      </View>
    </View>
  );
};

export default CategoriesScreen;
