import React from 'react'
import ProductsPage from './ProductsPage'
import { Oukkahaproducts } from '../data/OukkahaData'

export default function Ouakkaha() {
  return (
    <div>
      <ProductsPage products={Oukkahaproducts}/>
    </div>
  )
}
