import React from 'react'
import Layout from '../components/layout/Layout'
import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/error/Error404'



const Routes = () => {


  return (
    <Layout>
        <ReactDomRoutes>

            <Route path='/' element={ <Home/> }  />
            <Route path='*' element={ <Error404/> }  />

        </ReactDomRoutes>
    </Layout>
  )
}

export default Routes