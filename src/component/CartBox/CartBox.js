import React from 'react'
import Axios from '../Axios/Axios'
import './CartBox.css'

export default class CartBox extends React.Component {

    state = {
        qty: this.props.cart.qty
    }

    deleteCart = () => {
        Axios.delete(`/api/data1/cart/${this.props.cart.id}`)
        this.props.updateCart(this.props.cart.id)
        this.props.updateTotal()
        setTimeout(()=>{this.props.handleDisplay()},1300)
    }

    render() {
        const {image, title, price} = this.props.cart.product
        return (
            <div className='cartBoxWrepper'>
                <div className='cartBoxImg'>
                    <img src={image} alt={title}/>
                </div>
                <div className='cartBoxCenter'>
                    <div className='cartBoxName'>
                        {title}
                    </div>
                    <div className='cartBoxPrice'>
                        ${price}
                    </div>
                </div>
                <div className='cartBoxRight'>
                    <div className='purchaseQty'>
                        數量:
                        <span className='purchaseBox'>
                            {this.props.cart.qty}
                        </span>
                    </div>
                    <div className='box_2'>
                        價格:
                        <span className='purchaseBox'>
                            {price * this.props.cart.qty}
                        </span>
                    </div>
                    <div className='cartBoxBtn'>
                        <button onClick={this.deleteCart}><i className="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
