import React from 'react'
import TopBox from '../TopBox/TopBox'
import Product from '../Product/Product'
import Skeleton from '../Skeleton/Skeleton'
import Axios from '../Axios/Axios'
import JumpWindow from '../JumpWindow/JumpWindow'
import SliderBox from '../SliderBox/SliderBox'
import './Products.css'

export default class Products extends React.Component {
    topBoxRef = React.createRef()
    JumpWindowRef = React.createRef()

    state = {
        products:[],
        sourceProducts:[],
        cartNumber: 0 ,
    }

    componentDidMount(){
        Axios.get('/api/data1/products')
            .then(res => {
                this.setState({
                    products: res.data.products,
                    sourceProducts: res.data.products
                })
            })
        this.updateCartNumber()
    }

    updateCartNumber = () => {  
        setTimeout(()=>{
            Axios.get('/api/data1/cart')
                .then(res => {
                    let newCartNumber = 0
                    res.data.data.carts.forEach(c => {
                        newCartNumber = newCartNumber + c.qty
                    })
                    this.setState({cartNumber: newCartNumber})
                })
        },1000)
    }

    search = value => {
        let newProducts = [...this.state.sourceProducts]
        newProducts = newProducts.filter(p => {
            const matchProducts = p.title.match(new RegExp(value, 'gi'))
            return matchProducts !== null
        })
        this.setState({products: newProducts})
    }

    handleJumpWindow = () => {
        this.JumpWindowRef.current.handleJumpWindow()
    }

    render() {
        return (
            <React.Fragment> 
                <JumpWindow content={'已加入購物車'} ref={this.JumpWindowRef}/>
                <SliderBox/>
                <div className='productsWrapper'>
                    <TopBox closeJumpWindow={this.closeJumpWindow} ref={this.topBoxRef} search={this.search} cartNumber={this.state.cartNumber}/>
                    <div className='products'>
                        {this.state.products.length>0?
                            this.state.products.map(p => {
                                return (
                                    <div className='column is-3' key={p.id}>
                                        <Product handleJumpWindow={this.handleJumpWindow} updateCartNumber={this.updateCartNumber} product={p}/>
                                    </div>
                                )
                            })
                            :
                            <React.Fragment> 
                                <div className='column is-3'>
                                    <Skeleton/>
                                </div>
                                <div className='column is-3'>
                                    <Skeleton/>
                                </div>
                                <div className='column is-3'>
                                    <Skeleton/>
                                </div>
                                <div className='column is-3'>
                                    <Skeleton/>
                                </div>
                                <div className='column is-3'>
                                    <Skeleton/>
                                </div>
                                <div className='column is-3'>
                                    <Skeleton/>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}