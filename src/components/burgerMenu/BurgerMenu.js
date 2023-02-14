import React from 'react'
import { BurgerMenuStyled } from './BurgerMenuStyles'

const BurgerMenu = (props) => {
  return (
    <BurgerMenuStyled>
        <div className={ ` icon nav-icon-5 ${ props.active && 'open' } ` }>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </BurgerMenuStyled>
  )
}

export default BurgerMenu
