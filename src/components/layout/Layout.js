import React from 'react'
import { PageContainerStyled } from './LayoutStyles'

const Layout = ( {children} ) => {
  return (
    <>
        
        <PageContainerStyled>{children}</PageContainerStyled>
    </>
  )
}

export default Layout