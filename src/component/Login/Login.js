import React from 'react'
import 'react-router-dom'
import Axios from '../Axios/Axios'
import Cookie from 'react-cookies'
import JumpWindow from '../JumpWindow/JumpWindow'
import './Login.css'

export default class Login extends React.Component {
    JumpWindowRef = React.createRef()

    state = {
        userName:'',
        password:''
    }

    handleChange = event => {
        const e = event.target
        this.setState({[e.name]:e.value})
    }

    handleLogin = event => {
        event.preventDefault()
        Axios.post('/admin/signin', 
            {username: this.state.userName,
            password: this.state.password})
        .then(res => {
            if(res.data.success === true){
                const token = res.data.token
                Cookie.save('sony', token, {path:'/'})
                this.props.history.push('/')
            }else{
                this.JumpWindowRef.current.handleJumpWindow()
            }
        }) 
    }

    render() {
        return (
            <div className='loginBody'>
                <JumpWindow content={'帳號或密碼錯誤'} ref={this.JumpWindowRef}/>
                <div className='loginImg'></div>
                <form className='loginWrapper'>
                    <div>
                        <label>
                            <div className='loginContent'>Email</div>
                            <input onChange={this.handleChange} name='userName' className='loginInput' type='text' placeholder='輸入email'/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <div className='loginContent'>Password</div>
                            <input onChange={this.handleChange} name='password' className='loginInput' type='password' placeholder='輸入password'/>
                        </label>
                    </div>
                    <button onClick={this.handleLogin} className='loginBtn'>LOGIN</button>
                </form>
                <div className='explanation'>※本網站僅供作業展示</div>
            </div>
        )
    }
}
