import Menu from './Components/Menu';
import { useState } from 'react';
import { songlists } from './Components/SongLists';

function App() {

  const { songItems } = songlists;
  const [cartItems, setCartItems] = useState([]);

  //adding button functions
  //to add products in cart we created this function
  const handleAddProduct = (product) => {

    

    const ProductExist = cartItems.find(
      (item) => item.key === product.key);

    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.key === product.key
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );

    }
    else {
      alert(`You have successfully added "${product.name}" in the cart`)
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }



  }

  //adding if else condition to logically remove the products from the cart
  const handleRemoveProduct = (product) => {

    const ProductExist = cartItems.find((item) => item.key === product.key);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.key !== product.key))
    }
    else {
      setCartItems(
        cartItems.map((item) =>
          item.key === product.key
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      );
    }

  }

  //making empty array to show nothing if we click "clear cart"
  const handleClearCart = () => {
    setCartItems([]);
    
  }

  

  return (
    <div>
      <Menu
        songItems={songItems} cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
