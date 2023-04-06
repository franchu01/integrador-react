import React from 'react'
import { AboutContainerStyled, AboutSmallContainerStyled, AboutSmallContainerStyledd, BoldP, RedesCtn, SectionContactStyled, SectionRedesStyled, SpanStyled } from './AboutStyles'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';


const About = () => {

  const navigate = useNavigate()

  return (
    <AboutContainerStyled>
      <SectionContactStyled>
      <AboutSmallContainerStyled>
        <BoldP>SOLO <SpanStyled>VIRTOUS</SpanStyled> </BoldP>
        <p onClick={ () => navigate('/productos') } >Productos</p>
        <p onClick={ () => navigate('/preguntasfrecuentes') } >Preguntas frecuentes</p>
        <p onClick={ () => navigate('/metodosdepago') } >Metodos de pago</p>
        <p onClick={ () => navigate('/formasdeenvio') } >Formas de envio</p>
      </AboutSmallContainerStyled>
      <AboutSmallContainerStyled>
        <BoldP>Contacto / Agradecimiento</BoldP>
        <p> <EmailIcon/> franciscolcersosimo14@gmail.com</p>
        <p> <PlaceIcon/>  Todas las imagenes presentadas fueron gracias a <a href='https://pixabay.com/es/' >Pixabay</a>, <a href='https://www.pexels.com/es-es/'>Pexels</a>, <a href='https://www.freepik.es/fotos-populares'  >FreePik </a> y <a href='https://unsplash.com/es/images' >UnSplash</a> </p>
      </AboutSmallContainerStyled>
      </SectionContactStyled>

      <SectionRedesStyled>
      <AboutSmallContainerStyledd>

        <BoldP>Sumate a nuestra comunidad</BoldP>

        <RedesCtn>
        <p> <a href='https://www.linkedin.com/in/francisco-cersosimo-5799731b8/' > <TwitterIcon/> </a> </p>
        <p> <a href='https://www.linkedin.com/in/francisco-cersosimo-5799731b8/' >  <LinkedInIcon/></a></p>
        <p> <a href='https://www.instagram.com/francersosimo/' > <InstagramIcon/></a> </p>
        </RedesCtn>

      </AboutSmallContainerStyledd>
      </SectionRedesStyled>

    </AboutContainerStyled>
  )
}

export default About