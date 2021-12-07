import React from 'react'
import './JumpWindow.css'

export default class JumpWindow extends React.Component {
    JumpWindowRef = React.createRef()

    state = {
        context: ''
    }

    componentDidMount(){
        this.setState({context: this.props.content})
    }

    handleJumpWindow = () => {
        this.JumpWindowRef.current.style.opacity = '100%'
        setTimeout(()=>{this.JumpWindowRef.current.style.opacity = '0%'},1500)
    }

    render() {
        return (
            <div className='JumpWindowWrapper'>
                <div ref={this.JumpWindowRef} className='JumpWindow'>
                    {this.state.context}
                </div>
            </div>
        )
    }
}
