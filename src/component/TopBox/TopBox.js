import React from 'react'
import {Link} from 'react-router-dom'
import Axios from '../Axios/Axios'
import './TopBox.css'

export default class TopBox extends React.Component {

    state = {
        searchText:''
    }

    componentDidMount(){
        Axios.get('/api/data1/cart')
        .then(res => {
            let newCartNumber = 0
            res.data.data.carts.forEach(c => {
                newCartNumber = newCartNumber + c.qty
            })
            this.setState({cartNumber: newCartNumber})
        })
    }

    handleSearch = event => {
        this.setState({searchText: event.target.value})
        this.props.search(event.target.value)
    }

    clearSearch = () => {
        this.setState({searchText: ''})
        this.props.search('')
    }

    render(){
        return(
            <div className='topBoxWrapper'>
                <div className='topBoxWrapperContent'>
                    <div className='topBoxLogo'>STORE</div>
                    <div className='topBoxCenter'>
                        <input onChange={this.handleSearch} className='topBoxInput' value={this.state.searchText} placeholder='Search Product'/>
                        <div onClick={this.clearSearch} className='topBoxInputBtn'>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <Link to='/cart' className='topBoxImg'>
                        <i className="fas fa-shopping-cart fa-2x"></i>
                        <div className='shoppingCounter'>({this.props.cartNumber})</div>
                    </Link>
                </div>
                <div className='topBoxCenter_2'>
                    <input onChange={this.handleSearch} className='topBoxInput_2' value={this.state.searchText} placeholder='Search Product'/>
                    <div onClick={this.clearSearch} className='topBoxInputBtn_2'>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
        )
    }
}