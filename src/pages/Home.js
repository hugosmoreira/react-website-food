import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from "@chakra-ui/react"

import { ShopContext } from '../context/shopContext';

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);


    if(!products) return <di>Loading...</di>

  return (
      <Box>
        <Grid templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']}>
            {products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id} >
                <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                <Image
                    src={product.images[0].src}
                />
                <Text fontWeight="bold" position="absolute" bottom="15%" w="100%">{product.title}</Text>
                <Text color="gray.500" position="absolute" bottom="5%" w="100%">${product.variants[0].price}</Text>
                </Box>
            </Link>
            ))}
        </Grid>
      </Box>
  )
};

export default Home;
