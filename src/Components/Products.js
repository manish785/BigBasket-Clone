import { useState, useEffect } from 'react';
import { PRODUCT_ITEM_URL } from '../utils/constants';
import ProductItem from './ProductItem';
import Footer from './Footer';
import Shimmer from './Shimmer';


const Products = () => {
    const [listOfProducts, setListOfProduct] = useState([]);
    const [filteredListOfProducts, setfilteredListOfProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(PRODUCT_ITEM_URL);
        const json = await data.json();

        setListOfProduct(json);
        setfilteredListOfProducts(json);
    }
    
    if(listOfProducts.length === 0){
       return <Shimmer/>
    }
   

    return (
        <>
           <div className='product'>
            <div className='flex flex-wrap'>
                {filteredListOfProducts.map((res) => (
                   <ProductItem key={res.title} {...res}/>
                ))}
            </div>
           </div>
           <div className='h-[160px] w-full mt-[28px]'>
               <Footer/>
           </div>
        </>  
    )
};


export default Products;