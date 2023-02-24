import React from 'react'
import { AboutContainerStyled, AboutSmallContainerStyled, AboutSmallContainerStyledd, BoldP, RedesCtn, SectionContactStyled, SectionRedesStyled, SpanStyled } from './AboutStyles'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { fontWeight } from '@mui/system';


const About = () => {
  return (
    <AboutContainerStyled>

      <SectionContactStyled>
      <AboutSmallContainerStyled>
        <BoldP>SOLO <SpanStyled>VIRTOUS</SpanStyled> </BoldP>
        <p>Productos</p>
        <p>Preguntas frecuentes</p>
        <p>Metodos de pago</p>
        <p>Formas de envio</p>
      </AboutSmallContainerStyled>
      <AboutSmallContainerStyled>
        <BoldP>Contacto</BoldP>
        <p> <WhatsAppIcon/>  54128352123</p>
        <p> <PhoneIphoneIcon/> 2342-123212</p>
        <p> <EmailIcon/> franciscolcersosimo14@gmail.com</p>
        <p> <PlaceIcon/>  Almagro 879, Belgrano, Buenos Aires, ARG</p>
      </AboutSmallContainerStyled>
      </SectionContactStyled>

      <SectionRedesStyled>
      <AboutSmallContainerStyledd>

        <BoldP>Sumate a nuestra comunidad</BoldP>

        <RedesCtn>
        <p> <TwitterIcon/></p>
        <p> <LinkedInIcon/></p>
        <p> <InstagramIcon/></p>
        </RedesCtn>

      </AboutSmallContainerStyledd>
      </SectionRedesStyled>

    </AboutContainerStyled>
  )
}

export default About