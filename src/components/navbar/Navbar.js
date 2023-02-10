import React from 'react'
import { ButtonsContainerStyled, LinkButtonStyled, NavbarStyled } from './NavbarStyles'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Navbar = () => {
  return (
    <NavbarStyled>
        <>.</>
        <h1>VIRTUOUS</h1>

        <ButtonsContainerStyled>

            <LinkButtonStyled>
              <DensityMediumIcon/>
            </LinkButtonStyled>

        </ButtonsContainerStyled>

    </NavbarStyled>
  )
}

export default Navbar