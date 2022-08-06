import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

const CartState = (props) => {
  const [cart, setCart] = useState([]);
  const [totalAmt, setTotalAmt] = useState({
    mrpAmt: 0,
    dis: 0,
    dC: 0,
    total: 0,
  });

  const calcAmount = (cartItems) => {
    let total = 0,
      mrpAmt = 0,
      dis = 0,
      dC = 0;
    cartItems.forEach((item) => {
      mrpAmt += item.qty * item.mrp;
      dis += (item.mrp - item.price) * item.qty;
    });
    if (mrpAmt - dis > 500) {
      dC = 0;
    } else if (mrpAmt - dis > 0) {
      dC = 50 - Math.floor(0.02 * (mrpAmt - dis));
    }
    total = mrpAmt + dC - dis;
    setTotalAmt({ mrpAmt, dis, dC, total });
  };

  const getCart = () => {
    const localCart = JSON.parse(localStorage.getItem("geardenim_cart"));
    localCart != null && setCart(localCart);
    localCart != null && calcAmount(localCart);
  };

  const addToCart = (product) => {
    let cartItems = [...cart];
    if (cartItems.find((item) => item.id === product.id)) {
      cartItems.map((item) => {
        if (item.id === product.id) {
          item.qty += 1;
        }
        return item;
      });
      setCart([...cartItems]);
    } else {
      cartItems = [...cart, product];
      setCart(cartItems);
    }
    localStorage.setItem("geardenim_cart", JSON.stringify(cartItems));
    calcAmount(cartItems);
  };

  const removeFromCart = (product) => {
    let cartItems = [...cart];
    cartItems = cartItems.filter((item) => item.id !== product.id);
    setCart([...cartItems]);
    localStorage.setItem("geardenim_cart", JSON.stringify(cartItems));
    calcAmount(cartItems);
  };

  const decProductQty = (product) => {
    let cartItems = [...cart];
    if (cartItems.find((item) => item.id === product.id).qty > 1) {
      cartItems.map((item) => {
        if (item.id === product.id) {
          item.qty = item.qty - 1;
        }
        return item;
      });
      setCart([...cartItems]);
      localStorage.setItem("geardenim_cart", JSON.stringify(cartItems));
      calcAmount(cartItems);
    } else removeFromCart(product);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("geardenim_cart", null);
    calcAmount([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalAmt,
        calcAmount,
        getCart,
        addToCart,
        removeFromCart,
        decProductQty,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
