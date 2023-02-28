import styled from "styled-components"

export const AboutContainerStyled = styled.div`

    display: flex;
    justify-content: right;
    height: 25%;
    width: 100%;
    background-color: #d9d9d9;
    @media(max-width: 640px){
        gap:60px;
    }
`

export const SectionContactStyled = styled.div`
    display: flex;
    width: 35%;
    height: 80%;
    background-color: #d9d9d9;
    align-items: center;
    margin-right: 60px;
    
`

export const SectionRedesStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    background-color: #353535;
    

`

export const AboutSmallContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 70%;
    width: 90%;
    gap: 8px;
   

    & p {
        color: black;
        cursor: pointer;
        margin: 0;
    }

    a{
        text-decoration: none;
        color: #ba181b;
    }
    @media(max-width: 640px){
        width: 60%;
    }
`
export const AboutSmallContainerStyledd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 90%;
    gap: 8px;

    p{
        cursor: pointer;
        
    }

   
`


export const RedesCtn = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    a{
        text-decoration: none;
        color: black;
    }
`



export const SpanStyled = styled.span`

    color: #ba181b;
    font-family: 'Cinzel', serif;

`
export const BoldP = styled.p`

    font-weight: bold;

`
