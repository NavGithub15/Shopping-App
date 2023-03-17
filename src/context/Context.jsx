import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  // using useEffect to get the cart items totals 
  useEffect(() => {
    let qty = 0;

    cartItems.forEach((item) => {
      qty += item.quantity;
    });

    setTotalQty(qty);
  }, [cartItems]);

  // This function will add the item to the cart and it checks if the item already exists in the array then it will update the quantity of the item in the cart
  const addProduct = (item) => {
    const productIndex = cartItems.findIndex((i) => i._id === item._id);

    if (productIndex >= 0) {
      // Item already exists in the cart, increase its quantity
      const newCartItems = [...cartItems];
      newCartItems[productIndex].quantity++;
      setCartItems(newCartItems);
      setTotalPrice(totalPrice + item.retailPrice);
    } else {
      // Item does not exist in the cart, add it
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      setTotalPrice(totalPrice + item.retailPrice);
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
        setTotalPrice(totalPrice - item.retailPrice);
      } else {
        // Remove the item entirely
        newCartItems.splice(productIndex, 1);
        setCartItems(newCartItems);
        setTotalPrice(totalPrice - item.retailPrice);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQty,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
