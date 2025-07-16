import React from 'react';
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { action } from '../redux/slices/cartSlice'; 
import { useDispatch, useSelector } from 'react-redux';

function ProductList({ productList }) {
  const cartProducts = useSelector((store) => store.cartReducer.cartProducts);
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(action.addToCart(product));
  };

  const handleDeleteProduct = (product) => {
    dispatch(action.deleteFromCart(product));
  };

  return (
    <>
      {productList.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        productList.map((product) => (
          <div className='product' key={product.id}>
            <img src={product.image} alt='product_img' className='product_image' />
            <div className='product_meta'>
              <p className='product_title'>{product.title}</p>
              <p className='price'>₹{product.price}</p>
            </div>
            <div className="add_to_cart_container">
              <FaPlusSquare fontSize="large" onClick={() => handleAddProduct(product)} />
              <div className="currentCartCount">
                <PrintCount cartProducts={cartProducts} id={product.id} />
              </div>
              <FaMinusSquare fontSize="large" onClick={() => handleDeleteProduct(product)} />
            </div>
          </div>
        ))
      )}
    </>
  );
}

function PrintCount({ cartProducts, id }) {
  const foundProduct = cartProducts.find(p => p.id === id);
  return <>{foundProduct ? foundProduct.indQuantity : 0}</>;
}

export default ProductList;
