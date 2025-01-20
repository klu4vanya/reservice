import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tg_icon from '../../assets/tg-icon.svg'

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    height: 900px;
`
export const WhiteFormContainer = styled.div`
    width: 50%;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: end;
`

export const GrayFormContainer = styled.div`
    width: 50%;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: start;
`
export const FeedFormContainer = styled.div`
    width: 580px;
    height: 780px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FieldsFormContainer = styled.div`
    width: 430px;
    height: 594px;
`
export const TitileContainer = styled.div`
    width: 290px;
    height: 208px;
    font-size: 52px;
    text-align: center;
    color: #fff;
`
export const FormWrapper = styled.div`
    width: 350px;
    height: 350px;
`
export const StyledTextField = styled(TextField)({
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInputBase-root': {
      height: '44px',
      backgroundColor: '#2E3033',
      borderRadius: '8px',
    },
    '& MuiFormControl-root': {
      backgroundColor: '#2E3033',
    },
    '& .MuiInputBase-input:-webkit-autofill': {
      backgroundColor: '#2E3033', 
      color: '#fff !important', 
      WebkitTextFillColor:'#fff', 
      transition: 'background-color 5000s ease-in-out 0s', 
    },
    '& .MuiInputBase-input:-webkit-autofill:focus': {
      backgroundColor: '#2E3033', 
      color: '#fff', 
    },
  });
  export const StyledButton = styled(Button)`
  && {
    color: #fff;
    text-transform: none;
    width: 100%;
    height: 44px;
    border-radius: 8px;
    background-color: #e03c31;
  }
`;
export const FooterWrapper = styled.div`
    width: 416px;
    height: 470px;

`
export const FooterTitle = styled.div`
    width: 100%;
    height: 57px;
    font-size: 16px;
    color: #f2f2f2;

`
export const TelegramHrefContainer = styled(NavLink)`
    margin-top: 5%;
    width: 230px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
`
export const TelegramTitle = styled.div`
    width: 170px;
    height: auto;
    font-size: 17px;
    color: #f2f2f2;
`
