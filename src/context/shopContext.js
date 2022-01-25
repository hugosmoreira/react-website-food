import React, { Component } from 'react';
import Client from 'shopify-buy'

const ShopContext = React.createContext();


const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_KEY,
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN
  });


class ShopProvider extends Component {

    state = {
        product: {},
        products: {},
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false,
    }


    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout_id", checkout.id)
        this.setState({ checkout: checkout });
      };

    fetchCheckout = async () => {

    }

    addItemCheckout = async () => {

    }

    removeLineItem = async () => {

    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({ products: products });
    };

    
    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle);
        this.setState({ product: product });
    
        return product;
      };




    render() {
        return (
            <ShopContext.Provider>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext }

export default ShopProvider