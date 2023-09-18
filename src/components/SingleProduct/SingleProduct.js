import React, { useState } from 'react'
import './SingleProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalVisible } from '../../store/modalSlice';
import { formatPrice } from '../../utils/helpers';



const SingleProduct = () => {

    const dispatch = useDispatch();
    const { data: product } = useSelector(state => state.modal);

    return (
        <div className='overlay-bg'>
            <div className='product-details-modal bg-white'>
                <button type='button' className='modal-close-btn flex flex-center fs-14'
                    onClick={() => dispatch(setIsModalVisible(false))}>
                    <i className='fas fa-times'></i>
                </button>
                <div className='details-content-grid'>
                    <div className='details-right'>
                        <div className='details-img'>
                            <img src={product.images[0]} alt={product.title} />
                        </div>
                    </div>
                    <div className='details-right'>
                        <div className='details-info'>
                            <h3 className='title text-regal-blue fs-22 fw-5 '>
                                {product.title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct