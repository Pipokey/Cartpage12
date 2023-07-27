import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Navbar = ({ selectedCategory, handleCategoryPress }) => {
  return (
    <React.Fragment>
      <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Home' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Home')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'Home' && styles.selectedText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Arrivals' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Arrivals')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'Arrivals' && styles.selectedText]}>New Arrivals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Faces' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Faces')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'Faces' && styles.selectedText]}>Faces of Feel22</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Offers' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Offers')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'Offers' && styles.selectedText]}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Bazzar' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Bazzar')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'Bazzar' && styles.selectedText]}>Bazaar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Women' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Women')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'Women' && styles.selectedText]}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Men' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Men')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'Men' && styles.selectedText]}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Kids' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Kids')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'Kids' && styles.selectedText]}>Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarItem,
            selectedCategory === 'Salon' && styles.selectedItem,
          ]}
          onPress={() => handleCategoryPress('Salon')}
        >
          <Text style={[styles.navbarItemText, selectedCategory === 'salon' && styles.selectedText]}>Home Salon</Text>
        </TouchableOpacity>
    </React.Fragment>
  );
};

export default Navbar;
