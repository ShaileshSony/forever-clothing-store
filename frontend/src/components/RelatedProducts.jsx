import React, { useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import ProductItem from './productItem.jsx';

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {

        const productsList = products.slice();

        if (products.length > 0) {
            const filteredProducts = productsList.filter((product) => product.category === category && product.subCategory === subCategory);
            setRelatedProducts(filteredProducts);
            console.log(filteredProducts.slice(0, 5));
            console.log(filteredProducts[0].name);
        };

    },[products, category, subCategory]);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        { relatedProducts && relatedProducts.slice(0, 5).map((item, index) => {
           return <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        }) }
    </div>
  )
}

export default RelatedProducts
