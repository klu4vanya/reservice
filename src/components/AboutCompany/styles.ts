import Slider from "react-slick";
import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 8%;
    height: auto;
    color: #444444;
    font-size: 35px;
    line-height: 1.3em;
    font-weight: 600;
    text-align: center;
    @media (max-width: 768px){
        width: 90%;
        font-size: 28px;
        margin-bottom: 5%;
    }
`

export const CursiveText = styled.div`
    width: 80%;
    padding: 5% 0 5% 0;
    margin: 0 auto;
    height: auto;
    color: #444444;
    font-size: 30px;
    line-height: 1.3em;
    font-style: italic;
    @media (max-width: 768px){
        width: 90%;
        font-size: 25px;
    }
`
export const Line = styled.div`
    width: 200px;
    height: 5px;
    margin: 7% auto 7% auto;
    background-color: #E03C31;
`
export const InfoContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 5%;
    @media (max-width: 768px){
        width: 90%;
    }
`
export const InfoWrapper = styled.div`
    width: 40%;
    height: auto;
    font-size: 22px;
    line-height: 1.3em;
    padding: 4%;
    text-align: center;
    background-color: #E03E31;
    color: #fff;
    @media (max-width: 768px){
        font-size: 18px;
        height: 100px;
    }
`
export const RepairText = styled.div`
    width: 100%;
    height: 100px;
    background-color: rgba(224, 60, 49, .9);
    font-size: 35px;
    line-height: 1.3em;
    font-weight: 600;
    text-align: center;
    color: #fff;
    padding: inherit;
    @media (max-width: 768px){
        font-size: 28px;
        height: auto;
        margin: 0 auto;
        width: 90%;
    }
`

export const RepairPriveligesContainer = styled.div`
    width: 100%;
    display: flex;
    height: 300px;
    background-color: rgba(224, 60, 49, .9);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px){
        height: auto;
        width: 90%;
        margin: 0 auto 5% auto;
    }
`
export const RepairPriveliges = styled.div`
    width: 80%;
    margin: 0 auto;
    height: auto;
    font-size: 25px;
    line-height: 1.3em;
    font-weight: 400;
    color: #fff;

    &  span {
        font-weight: 600;
    }
    @media(max-width: 768px){
        & p{
            font-size: 20px;
        }
    }
`