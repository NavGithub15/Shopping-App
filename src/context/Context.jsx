import { createContext, useState } from "react";

export const CartContext = createContext();

export const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // This function will add the item to the cart and it checks if the item already exists in the array then it will update the quantity of the item in the cart
  const addProduct = (item) => {
    const productIndex = cartItems.findIndex((i) => i._id === item._id);

    if (productIndex >= 0) {
      // Item already exists in the cart, increase its quantity
      const newCartItems = [...cartItems];
      newCartItems[productIndex].quantity++;
      setCartItems(newCartItems);
      setTotalPrice(totalPrice + item.rentalPrice);
    } else {
      // Item does not exist in the cart, add it
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      setTotalPrice(totalPrice + item.rentalPrice);
    }
  };

  // This function searches the cartItems array for the product with the given id and removes items from the array using the splice method
  const removeProduct = (item) => {
    const productIndex = cartItems.findIndex((i) => i._id === item._id);

    if (productIndex >= 0) {
      const newCartItems = [...cartItems];
      if (newCartItems[productIndex].quantity > 1) {
        // Decrease the quantity of the item
        newCartItems[productIndex].quantity--;
        setCartItems(newCartItems);
        setTotalPrice(totalPrice - item.rentalPrice);
      } else {
        // Remove the item entirely
        newCartItems.splice(productIndex, 1);
        setCartItems(newCartItems);
        setTotalPrice(totalPrice - item.rentalPrice);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
