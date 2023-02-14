import React from 'react'
import Layout from '../components/layout/Layout'
import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/error/Error404'
import Cart from '../pages/cart/Cart'
import Product from '../pages/product/Product'



const Routes = () => {


  return (
    <Layout>
        <ReactDomRoutes>

            <Route path='/' element={ <Home/> }  />
            <Route path='cart' element={ <Cart/> }  />
            <Route path='product/:id' element={ <Product/> } />
            <Route path='*' element={ <Error404/> }  />

        </ReactDomRoutes>
    </Layout>
  )
}

export default Routes