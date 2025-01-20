import React from 'react'
import { FeedFormContainer, FieldsFormContainer, FooterTitle, FooterWrapper, FormContainer, FormWrapper, GrayFormContainer, StyledButton, StyledTextField, TelegramHrefContainer, TelegramTitle, TitileContainer, WhiteFormContainer } from './styles'
import { TextField } from '@mui/material'
import { TGicon } from '../Header/styles'
import { NavLink } from 'react-router-dom'
import { ReactComponent as TGIconSVG } from '../../assets/tg-icon.svg';
import styled from 'styled-components'


const StyledTGIconSVG = styled(TGIconSVG)`
  path {
    fill: #1080b8 
  }
`;

export default function FormFeedback() {
    return (
        <FormContainer>
            <WhiteFormContainer>
                <FeedFormContainer
                    style={{
                        backgroundColor: '#545454'
                    }}
                >
                    <FieldsFormContainer>
                        <TitileContainer>
                            Свяжитесь с <span style={{ color: '#E03C31' }}>нами</span>
                        </TitileContainer>
                        <FormWrapper>
                            <StyledTextField
                                id="filled-basic"
                                label="Телефон"
                                variant="filled"
                                fullWidth
                                style={{
                                    marginBottom: '24px'
                                }}
                            />
                            <StyledTextField
                                id="filled-basic"
                                label="Telegram"
                                variant="filled"
                                fullWidth
                                style={{
                                    marginBottom: '24px'
                                }}
                            />
                            <StyledButton >Подтвердить</StyledButton>
                        </FormWrapper>
                    </FieldsFormContainer>
                </FeedFormContainer>
            </WhiteFormContainer>
            <GrayFormContainer>
                <FeedFormContainer
                    style={{
                        backgroundColor: '#545454'
                    }}
                >
                    <FooterWrapper>
                        <FooterTitle>
                            Продукт Ресервис создан компанией проминструмент
                        </FooterTitle>
                        <div
                            style={{ position: 'relative', overflow: 'hidden' }}>
                            <a href="https://yandex.ru/maps/org/moskva_siti/1192932552/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                            >Москва-Сити</a>
                            <a href="https://yandex.ru/maps/213/moscow/category/sale_and_lease_of_commercial_real_estate/184107521/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                            >Продажа и аренда коммерческой недвижимости в Москве</a>
                            <a href="https://yandex.ru/maps/213/moscow/category/apartments_in_new_buildings/184107519/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}
                            >Квартиры в новостройках в Москве</a>
                            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.539665%2C55.747063&mode=search&oid=1192932552&ol=biz&z=16.26" width="100%" height="400" frameBorder={1} allowFullScreen={true}
                                style={{ position: 'relative' }}></iframe>
                        </div>
                        <TelegramHrefContainer to=''>
                           <NavLink style={{width: '50px'}} to=''>
                           <StyledTGIconSVG
                           />
                           </NavLink>
                            <TelegramTitle
                                style={{
                                    textDecoration: 'none'
                                }}
                            >Наш телеграм</TelegramTitle>
                        </TelegramHrefContainer>
                    </FooterWrapper>
                </FeedFormContainer>
            </GrayFormContainer>
        </FormContainer >
    )
}
