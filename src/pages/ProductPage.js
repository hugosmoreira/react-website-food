import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';


import { ShopContext } from '../context/shopContext';

const ProductPage = () => {
    let { handle } = useParams()

    const { fetchProductWithHandle, fetchAllProducts, addItemToCheckout, product, products } = useContext(ShopContext)
  
    useEffect(() => {
      fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])
  
    useEffect(() => {
      fetchAllProducts()
      return () => {
  
      }
    }, [fetchAllProducts])
  
  
    if (!product.title) return <div>loading...</div>
  

  return (
      <div>
          <h1>{product.title}</h1>
      </div>
  )
};

export default ProductPage;
