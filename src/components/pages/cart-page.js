import React from 'react';
import CartTable from '../cart-table';

import '../cart-table/cart-table.scss';


const CartPage = () => {
    return (
        <div className="cart"> 
            <CartTable/>
        </div>
    )
}

export default CartPage;