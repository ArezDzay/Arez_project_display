import React from 'react'
import { Redirect } from 'react-router-dom'
import Cookie from 'react-cookies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'


export default class Layout extends React.Component {
    render() {
        return  Cookie.load('sony') !== undefined ?
            (
                <div className='Layout'>
                    <Header/>
                    {this.props.children}
                    <Footer/>
                </div>
            )
            :
            <Redirect to='login'/>
    }
}
