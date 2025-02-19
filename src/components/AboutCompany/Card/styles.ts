import styled from "styled-components";

export const CardContainer = styled.div`
    width: 50%;
    margin: 5% auto 5% auto;
    height: 200px;
    padding: 5%;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media(max-width: 768px){
        width: 90%;
    }
`
export const LineFill = styled.div`
    width: 100%;
    height: 10px;
    background-color: #51b005;
    margin-bottom:  5%;
`

export const Circle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #51b005;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5%;
    @media (max-width: 768px){
        width: 50px;
        height: 50px;
    }
`

export const CircleText = styled.div`
    color: #fff;
    font-size: 24px;
    font-weight: 600;
`
export const CircleAndTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    height: auto;
`
export const PlastinsTitle = styled.div`
    color: #000;
    font-size: 30px;
    font-weight: 600;
    @media(max-width: 768px){
        width: 70%;
        font-size: 25px;
    }
`
export const PlastinsSubtitle = styled.div`
    color: #000;
    font-size: 24px;
    font-weight: 600;
    margin-top: 5%;
    text-align: center;
`