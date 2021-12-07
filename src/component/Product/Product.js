import React from 'react'
import Axios from '../Axios/Axios'
import './Product.css'

export default class Product extends React.Component {

    state = {
        qty: 1
    } 

    addCart = () => {
        Axios.post('/api/data1/cart', {"data": {"product_id": this.props.product.id, "qty": this.state.qty}})
        this.props.updateCartNumber()
        this.props.handleJumpWindow()
    }

    handleQty = event => {
        let val = event.target.value
        if(val >= 5) val = 5
        if(val <= 0) val = 0
        this.setState({qty: parseInt(val)})
    }

    render() {
        const {title, price, image} = this.props.product
        return (
            <div className='product'>
                <div className='productImg'>
                    <img className='productImgContent' src={image} alt={title}/>
                </div>
                <div className='productName'>{title}</div>
                <div className='productFooter'>
                    <div className='productPrice'>${price}</div>
                    <input onClick={this.clickQty} onChange={this.handleQty} className='qty' type='number' value={this.state.qty} min='1' max='5' />
                    <div className='btnSize'>
                        <button onClick={this.addCart}  type='submit'  className='btnImg'><i className="fas fa-cart-plus fa-1x"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
