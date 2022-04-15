import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>Products</h1>
            <h2>{user? user.displayName : "No one"}</h2>
        </div>
    );
};

export default Products;