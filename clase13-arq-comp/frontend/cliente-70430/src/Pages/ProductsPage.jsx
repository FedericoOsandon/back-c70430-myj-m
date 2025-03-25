import { useEffect, useState } from "react"
import ProductsList from "../Components/ProductsList/ProductsList"


const ProductsPage = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        // acciones fetch - llamada a las api - Deleay
        const getProduct = async () => {
            const data = await fetch('http://localhost:8080/api/products').then(res => res.json())
            setProducts(data.payload)
        }
        getProduct()
    }, [])
    // console.log(products)

    return (
          <div>
               <h1>Home - products</h1>
               <ProductsList products={products} />
        </div>
    )
}

export default ProductsPage