import React from 'react'
import Axios from '../Axios/Axios'
import Layout from '../Layout/Layout'
import CartBox from '../CartBox/CartBox'
import JumpWindow from '../JumpWindow/JumpWindow'
import './Cart.css'

export default class Cart extends React.Component {
    JumpWindowRef = React.createRef()
    noCartRef = React.createRef()
    buyerDataRef = React.createRef()
    buyerName = React.createRef()
    buyerEmail = React.createRef()
    buyerCode = React.createRef()
    buyerAddress = React.createRef()

    state = {
        carts: [],
        total: 0,
        buyerName: '',
        buyerEmail: '',
        buyerCode: '',
        buyerAddress: '',
        buyerMessage: ''
    }

    componentDidMount(){
        Axios.get('/api/data1/cart')
            .then(res => {
                let newTotal = 0
                res.data.data.carts.forEach(cart => {
                    newTotal = (cart.qty * cart.product.price) + newTotal
                })
                this.setState({carts: res.data.data.carts, total: newTotal})
                this.handleDisplay()
        })
    }

    updateTotal = () => {
        setTimeout(()=>{
            Axios.get('/api/data1/cart')
                .then(res => {
                    let newTotal = 0
                    res.data.data.carts.forEach(cart => {
                        newTotal = (cart.qty * cart.product.price) + newTotal
                    })
                    this.setState({total: newTotal})
            })
        },1000)
    }

    updateCart = (id) => {
        const newCarts = this.state.carts.filter(cart => {
            return (cart.id !== id)
        })
        this.setState({carts: newCarts})
    }

    handleChange = event => {
        const e = event.target
        this.setState({[e.name]:e.value})
    }

    handleDisplay = () => {
        this.handleNoCart()
        this.handleBuyerData()
    }

    handleNoCart = () => {
        if(this.state.total !== 0){
            this.noCartRef.current.display = 'none'
        }else{
            this.noCartRef.current.classList.remove('hide')
        }
    }

    handleBuyerData = () => {
        if(this.state.total !== 0){
            this.buyerDataRef.current.classList.remove('hide')
        }else{
            this.buyerDataRef.current.classList.add('hide')
        }
    }

    handleSubmit = event => {
        let counter = 0
        event.preventDefault()

        if(this.state.buyerName === ''){
            this.buyerName.current.classList.remove('hide')
        }else{
            this.buyerName.current.classList.add('hide')
            counter += 1
        }
        if(this.state.buyerEmail === ''){
            this.buyerEmail.current.classList.remove('hide')
        }else{
            this.buyerEmail.current.classList.add('hide')
            counter += 1
        }
        if(this.state.buyerCode === ''){
            this.buyerCode.current.classList.remove('hide')
        }else{
            this.buyerCode.current.classList.add('hide')
            counter += 1
        }
        if(this.state.buyerAddress === ''){
            this.buyerAddress.current.classList.remove('hide')
        }else{
            this.buyerAddress.current.classList.add('hide')
            counter += 1
        }

        if(counter > 3){
            this.JumpWindowRef.current.handleJumpWindow()
            Axios.post('/api/data1/order', {
                "data": {
                    "user": {
                      "name": this.state.buyerName,
                      "email": this.state.buyerEmail,
                      "tel": this.state.buyerCode,
                      "address": this.state.buyerAddress
                    },
                    "message": this.state.buyerMessage
                }
            })
            this.setState({
                carts: [],
                total: 0,
                buyerName: '',
                buyerEmail: '',
                buyerCode: '',
                buyerAddress: '',
                buyerMessage: ''
            })
        }
    }

    render(){
        return(
            <React.Fragment>
            <JumpWindow content={'已建立訂單'} ref={this.JumpWindowRef}/>
            <Layout>
                <div className='cartWrapper'>
                    <div className='cartLogo'>Shopping Cart</div>
                    <div className='shoppingCartCantent'>
                        {this.state.carts.map(cart => {
                            return <CartBox handleDisplay={this.handleDisplay} updateTotal={this.updateTotal} updateCart={this.updateCart}  key={cart.id} cart={cart}/> 
                        })}
                        <div ref={this.noCartRef} className='noCart hide'>
                            目前沒有商品
                        </div>
                        <div className='shoppingCartFooter'>
                            <div className='shoppingCartTotal'>
                                合計:
                                <span className='shoppingCartcontent'>
                                    {this.state.total}
                                </span>
                            </div>
                        </div>
                        <form ref={this.buyerDataRef} onSubmit={this.handleSubmit} className='buyerData hide'>
                            <div className='buyerLeft'>
                                <div className='buyerBox buyerName'>
                                    <div className='buyerBox'>收件人姓名:</div>
                                    <input onChange={this.handleChange} name='buyerName' className='buyerInput'></input>
                                    <div ref={this.buyerName} className='errerText hide'>此項目不能為空</div>
                                </div>
                                <div className='buyerBox buyerEmail'>
                                    <div className='buyerBox'>信箱:</div>
                                    <input onChange={this.handleChange} name='buyerEmail' className='buyerInput' type='email'></input>
                                    <div ref={this.buyerEmail} className='errerText hide'>此項目不能為空</div>
                                </div>
                                <div className='buyerBox buyerCode'>
                                    <div className='buyerBox'>收件人電話:</div>
                                    <input onChange={this.handleChange} name='buyerCode' className='buyerInput' type='tel'></input>
                                    <div ref={this.buyerCode} className='errerText hide'>此項目不能為空</div>
                                </div>
                                <div className='buyerBox buyerAddress'>
                                    <div className='buyerBox'>收件人住址:</div>
                                    <input onChange={this.handleChange} name='buyerAddress' className='buyerInput'></input>
                                    <div ref={this.buyerAddress} className='errerText hide'>此項目不能為空</div>
                                </div>
                            </div>
                            <div className='buyerRight'>
                                <textarea onChange={this.handleChange} name='buyerMessage' className='buyerMessage' type='text' placeholder='留言給賣家...' />
                                <button className='buyerBtn' type='submit' >購買</button>
                            </div>
                        </form >
                    </div>
                </div>
            </Layout>
            </React.Fragment>
        )
    }
}