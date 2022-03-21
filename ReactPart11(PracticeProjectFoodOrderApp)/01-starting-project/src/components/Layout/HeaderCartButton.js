import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                {/* this CartIcon is just an svg cart icon we could have done with with react icons */}
            <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton;