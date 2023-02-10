import React from 'react'
import { AboutContainerStyled, AboutSmallContainerStyled } from './AboutStyles'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';


const About = () => {
  return (
    <AboutContainerStyled>

      <AboutSmallContainerStyled>

        <p>Inicio</p>
        <p>Productos</p>
        <p>Quienes somos</p>
        <p>Preguntas frecuentes</p>
        <p>Metodos de pago</p>
        <p>Formas de envio</p>

      </AboutSmallContainerStyled>

      <AboutSmallContainerStyled>

        <p>Contactanos!</p>
        <p> <WhatsAppIcon/>  54128352123</p>
        <p> <PhoneIphoneIcon/> 2342-123212</p>
        <p> <EmailIcon/> franciscolcersosimo14@gmail.com</p>
        <p> <PlaceIcon/>  Almagro 879, Belgrano, Buenos Aires, ARG</p>

      </AboutSmallContainerStyled>

      <AboutSmallContainerStyled>

        <p>REDES</p>

        <p> <TwitterIcon/></p>
        <p> <LinkedInIcon/></p>
        <p> <InstagramIcon/></p>

      </AboutSmallContainerStyled>

    </AboutContainerStyled>
  )
}

export default About