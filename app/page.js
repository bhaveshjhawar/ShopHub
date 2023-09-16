
import styles from './page.module.css'
import axios from "axios"
import ListProducts from '@/components/products/ListProducts';
import queryString from 'query-string';



const getProducts = async(searchParams)=>{
  // const {data} = await axios.get(`${process.env.API_URL}/api/products`)
  // return data

  const urlParams = {
    keyword:searchParams.keyword,
    page:searchParams.page,
    category: searchParams.category,
    "ratings[gte]":searchParams.ratings,
    "price[gte]":searchParams.min,
    "price[lte]":searchParams.max,
  }
  const searchQuery = queryString.stringify(urlParams)
  // console.log(searchQuery);

  // let data = await fetch(`${process.env.API_URL}/api/products?${searchQuery}`)
  // data = await data.json();

  const {data} =  await axios.get(`${process.env.API_URL}/api/products?${searchQuery}`)
  return data
};



export default async function Home({searchParams}) {
  const productsData = await getProducts(searchParams)

  return (
    <main >
    <ListProducts data={productsData}/>
    </main>
  )
}
