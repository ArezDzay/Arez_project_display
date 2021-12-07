import React from 'react'
import './Skeleton.css'

export default class Skeleton extends React.Component {

    render() {
        return (
            <div className='skeletonWrapper'>
                <div className='skeletonproduct'>
                    <div className='skeletonproductImg skeleton'>
                        <div className='skeletonproductImgContent'>
                        </div>
                    </div>
                    <div className='skeletonproductName'>
                        <div className='skeletonName skeleton'></div>
                    </div>
                    <div className='skeletonproductFooter'>
                        <div className='skeletonproductPrice'>
                            <div className='skeletonPrice skeleton'></div>
                        </div>
                        <div>
                            <div className='skeletonPrice skeletonQty skeleton'></div>
                        </div>
                        <div className='skeletonbtnSize'>
                            <button onClick={this.addCart}  type='submit'  className='skeletonbtnImg skeleton'>
                                <div className='skeletonImg'></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
