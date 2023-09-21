import React, { useEffect } from 'react';
import './HomePage.css';
import Slider from '../../components/Slider/Slider';
import ProductList from '../../components/ProductList/ProductList'
import Category from '../../components/Category/Category';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProductByCategory } from '../../store/categorySlice';
import SingleCategory from '../../components/SingleCategory/SingleCategory'
import { fetchProducts } from '../../store/productSlice';



const HomePage = () => {

    const dispatch = useDispatch();
    const { data: categories, status: categoryStatus } = useSelector((state) => state.category)
    const { catProductAll: productsByCategory, catProductAllStatus } = useSelector((state) => state.category);
    const { data: products, status: productStatus } = useSelector((state) => state.product)



    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories());
        dispatch(fetchProductByCategory(1, 'all'))
        dispatch(fetchProductByCategory(2, 'all'))
    }, [dispatch])


    return (
        <div className='home-page'>
            <Slider />
            <Category categories={categories} status={categoryStatus} />

            <ProductList products={products} status={productStatus} />

            <section>
                {productsByCategory[1] && <SingleCategory products={productsByCategory[1]}
                    status={catProductAllStatus} />}
            </section>

            <section>
                {productsByCategory[0] && <SingleCategory products={productsByCategory[0]}
                    status={catProductAllStatus} />}
            </section>

        </div>
    )
}

export default HomePage