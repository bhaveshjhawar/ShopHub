import ProductDetails from '@/components/products/ProductDetails';
import React from 'react';

// import axios from "axios"

const getProductDetails = async(id)=>{
  let data = await fetch(`${process.env.API_URL}/api/products/${id}`)
  data = await data.json();
  return data


    // const {data} = await axios.get(`${process.env.API_URL}/api/products/${id}`)
    // return data

};

const productDetailsPage = async({params}) => {
    const product = await getProductDetails(params.id)
    
    return (
        <div>
            <ProductDetails product={product}/>
        </div>
    );
}

export default productDetailsPage;
