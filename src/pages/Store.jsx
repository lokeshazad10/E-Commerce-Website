import React from 'react'
import {ProductsData} from '../Data/ProductsData.js'
import Product from '../components/Products/Product'
const Store = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 px-4 py-10 sm:gap-5 sm:px-8 sm:py-14 lg:grid-cols-4 lg:px-20 lg:py-20">
        {ProductsData.map((item) => {
          return <Product key={item.id} product_info={item} />;
        })}
      </div>
    </div>
  )
}

export default Store
