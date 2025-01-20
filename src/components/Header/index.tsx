import React from 'react'
import { ContactContainer, HeaderContainer, HeaderWrapper, LogoContainer, PhoneContainer, TGicon } from './styles'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>
          <img
            src={logo}
            style={{
              width: '100%'
            }}
          />
        </LogoContainer>
        <ContactContainer>
          <PhoneContainer>
            +7 962 210 76 77
          </PhoneContainer>
          <TGicon to='' />
        </ContactContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
