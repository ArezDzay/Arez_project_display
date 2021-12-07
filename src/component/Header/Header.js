import React from 'react'
import {Link} from 'react-router-dom'
import Axios from '../Axios/Axios';
import Cookie from 'react-cookies'
import Decode from 'jwt-decode'
import './Header.css'

export default class Header extends React.Component {

    state = {
        userName: ''
    }

    logOut = () => {
        Axios.post('/logout')
        Cookie.remove('sony',  { path:'/' })
    }

    componentDidMount(){
        if(Cookie.load('sony') !== undefined){
            const email = (Decode(Cookie.load('sony'))).email
            const num = email.search('@')
            const name = email.substring(0, num).toUpperCase()
            this.setState({userName: name})
        }
    }

    render() {
        return (
            <div className='headerContent'>
                <Link to='/' className='headerLeft'>SONY</Link>
                    <span className='headerRightAdmin'>
                        <Link className='userName' to='/order'>
                            <span className='headerImg'>
                                <i className='far fa-user'/>
                            </span>    
                                {this.state.userName}
                        </Link>
                        <div>
                            <Link className='logout' onClick={this.logOut} to='/login'>
                                <i className="fas fa-sign-out-alt"></i>
                            </Link>
                        </div>
                    </span>
            </div>
        )
    }
}
