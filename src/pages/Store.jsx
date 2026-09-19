import React from 'react'
import {ProductsData} from '../Data/ProductsData.js'
import Product from '../components/Products/Product'
const Store = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2.5 p-20">
        {ProductsData.map((item) => {
          return <Product key={item.id} product_info={item} />;
        })}
      </div>
    </div>
  )
}

export default Store
