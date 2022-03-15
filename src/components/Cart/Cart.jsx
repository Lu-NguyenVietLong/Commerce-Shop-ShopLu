import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({cart, handleUpdateQty, handleRemoveFromCart, handleEmptyCart}) => {
    console.log(cart.line_items)
    const classes = useStyles()


    const EmptyCart = () => (
        <Typography variant='subtitle1'>Bạn không có sản phẩm nào trong giỏ hàng
            <Link to='/' className={classes.link}>. Tiếp tục lựa mua</Link>!
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=> (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant='h4' >
                        Tổng giá: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Dọn giỏ</Button>
                        <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary' component={Link} to="/checkout">Thanh toán</Button>

                    </div>
            </div>
        </>
    )

    if (!cart.line_items) return 'Loading...';

  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} gutterBottom variant='h3'>Giỏ hàng của bạn</Typography>
        {!cart.line_items.length ? <EmptyCart/> : <FilledCart />}
    </Container>
  )
}

export default Cart