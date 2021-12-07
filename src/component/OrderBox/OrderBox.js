import React from 'react'
import './OrderBox.css'

export default class OrderBox extends React.Component {

    state = {
        pay:'尚未付款',
        products:[]
    }

    componentDidMount(){
        if(this.props.order.is_paid){
            this.setState({pay: '已付款'})
        }
        let newProducts = Object.keys(this.props.order.products)
            .map(key => this.props.order.products[key])
        
        this.setState({products: newProducts})
    }
    
    render() {
        const {user, total} = this.props.order
        return (
            <div className='borderWrapper'>
                <div className='changeOrderBoxWrapper'>
                    <div className='orderBoxContent orderBoxTop orderBoxContentName'>
                            收件人名字
                    </div>
                    <div className='orderBoxContent orderBoxTop orderBoxContentNum'>
                            應付金額
                    </div>
                    <div className='orderBoxContent orderBoxTop orderBoxContentPay'>
                            是否付款
                    </div>
                </div>
                <div className='orderBoxWrapper'>
                    <div className='orderBoxContent orderBoxName'>
                        {user.name}
                    </div>
                    <div className='orderBoxProduct '>
                            <div>
                                {this.state.products.map(p => {
                                    return <div key={p.id}>{p.product.title}</div>
                                })}
                            </div>
                            <div>
                                {this.state.products.map(p => {
                                    return <div key={p.id}>{p.qty}</div>
                                })}
                            </div>
                    </div>
                    <div className='orderBoxContent orderBoxNum'>
                        {total}
                    </div>
                    <div className='orderBoxContent orderBoxPay'>
                        {this.state.pay}
                    </div>
                </div>
                <div className='orderBoxProduct_2'>
                    <div>
                        {this.state.products.map(p => {
                            return <div key={p.id}>{p.product.title}</div>
                        })}
                    </div>
                    <div>
                        {this.state.products.map(p => {
                            return <div key={p.id}>{p.qty}</div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
