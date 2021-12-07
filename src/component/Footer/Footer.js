import React from 'react'
import './Footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footerWrapper'>
                <div className='footerBox'>
                    <div className='footerTitle'>關於 Sony</div>
                    <div className='footerContent'>Sony 企業網站</div>
                    <div className='footerContent'>數位教室</div>
                </div>
                <div className='footerBox'>
                    <div className='footerTitle'>常見問題</div>
                    <div className='footerContent'>網站使用</div>
                    <div className='footerContent'>Sony會員</div>
                    <div className='footerContent'>網站購物</div>
                </div>
                <div className='footerBox'>
                    <div className='footerTitle'>會員專區</div>
                    <div className='footerContent'>修改會員資料</div>
                    <div className='footerContent'>我的追蹤清單</div>
                    <div className='footerContent'>購物記錄查詢</div>
                    <div className='footerContent'>到貨提醒設定</div>
                    <div className='footerContent'>送貨地址管理</div>
                </div>
            </div>
        )
    }
}
