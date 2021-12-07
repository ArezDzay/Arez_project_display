import React from 'react'
import './SkeletonCartBox.css'

export default class SkeletonCartBox extends React.Component {
    render() {
        return (
            <div className='cartBoxWrepper'>
                <div className='cartBoxImg'>
                    <div className='skeletonCartBoxImg skeleton'></div>
                </div>
                <div className='cartBoxCenter'>
                    <div className='skeletoncartBoxName skeleton'>
                    </div>
                    <div className='skeletoncartBoxPrice skeleton'>
                    </div>
                </div>
                <div className='cartBoxRight'>
                    <div className='skeletonPurchaseQty skeleton'>
                    </div>
                    <div className='skeletonBox_2 skeleton'>
                    </div>
                    <div className='cartBoxBtn'>
                        <div className='skeletonCartBoxBtn skeleton'></div>
                    </div>
                </div>
            </div>
        )
    }
}
