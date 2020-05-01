import React from 'react';
import Product from './Product/Product';

const products = props => {
    console.log('[Products.js] @Rendering');
    return props.products.map(
        (product, index) => {
            return (
                <Product
                    click={() => props.clicked(index)}
                    itemName={product.itemName}
                    itemReview={product.review}
                    key={product.itemId}
                    changed={event => props.changed(event, product.itemId)}
                ></Product>
            );
        });
};

export default products;
