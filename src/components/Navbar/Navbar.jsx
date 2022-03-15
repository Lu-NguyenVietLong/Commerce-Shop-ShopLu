import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {Link, useLocation} from 'react-router-dom'

import logo from '../../assets/shoplu.jpg'
import useSlytes from './styles'

const Navbar = ({totalItems}) => {
    const classes = useSlytes()
    const location = useLocation()


  return (
    <>
        <AppBar position='fixed' className={classes.AppBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='Shop Lu' height='25px' className={classes.image} />
                    ShopLu
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    
                    <IconButton component={Link} to="/cart" alt-label='Show carts items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
                )}
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar