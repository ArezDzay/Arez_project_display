import React from 'react'
import Axios from '../Axios/Axios'
import Layout from '../Layout/Layout'
import JumpWindow from '../JumpWindow/JumpWindow'
import OrderBox from '../OrderBox/OrderBox'
import './Order.css'

export default class Order extends React.Component {

    state = {
        orders: []
    }

    componentDidMount(){
        Axios.get('/api/data1/orders?page=1')
            .then(res => {
                this.setState({orders: res.data.orders})
            })
    }
  
    render(){
        return(
            <React.Fragment>
            <JumpWindow />
            <Layout>
                <div className='orderWrapper'>
                    <div className='orderLogo'>Track Order</div>
                    <div className='orderCantent'>
                        <div className='orderTop'>
                            <div className='orderName orderContent'>
                                收件人名字
                            </div>
                            <div className='orderProduct orderContent'>
                                購買商品
                            </div>
                            <div className='orderPrice orderContent'>
                                應付金額
                            </div>
                            <div className='pay orderContent'>
                                是否付款
                            </div>
                        </div>
                        {this.state.orders.map(o => {
                            return (
                                <div key={o.id}>
                                    <OrderBox order={o}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
            </React.Fragment>
        )
    }
}