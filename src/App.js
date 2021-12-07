import React from 'react'
import Layout from './component/Layout/Layout'
import Products from './component/Products/Products'

export default class App extends React.Component {
    render(){
        return(
            <Layout>
                <Products/>
            </Layout>
        )
    }
}

 