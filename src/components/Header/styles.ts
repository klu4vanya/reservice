import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tg_icon from '../../assets/tg-icon.svg'
import PropTypes from "prop-types";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 90px;
    background-color: #545454;
`
export const HeaderWrapper = styled.div`
    width: 80%;
    height: 90px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const LogoContainer = styled.div`
    width: 15%;
    height: 80px;
    display: flex;
    align-items: center;
`

export const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 20%;
`
export const PhoneContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    width: auto;
    height: 40px;
    font-size: 20px;
    color: #fff;
    text-align: center; 
`
export const TGicon = styled(NavLink)`
    background-image: url(${tg_icon});
    width: 25px;
    height: 25px;

`
