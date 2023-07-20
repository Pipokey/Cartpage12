import { StyleSheet } from 'react-native';
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
      marginLeft:-11,
      marginRight:-11,
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

export default styles;
