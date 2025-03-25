import { ProductCard } from "../ProudctCard/ProductCard"


const ProductsList = ({products}) => {
    return (
        <div style={{display:'flex', flexDirection: 'rows', justifyContent: 'space-between', alignItems: 'center' , width: '100%'}}>
            {
                products.map(product =>  <ProductCard key={product._id}  {...product} />       )
            }
        </div>
    )
}

export default ProductsList