import React from 'react'
import { CardContainer, Circle, CircleAndTitleContainer, CircleText, LineFill, PlastinsSubtitle, PlastinsTitle } from './styles'
import { number } from 'prop-types'
interface CardProps {
  color: string
  title: string
  subtitle: string
  count: number
}

export default function Card({color, title, subtitle, count }: CardProps) {
  return (
    <CardContainer>
      <LineFill 
        style={{
          backgroundColor: color
        }}
      />
      <CircleAndTitleContainer>
        <Circle
          style={{
            backgroundColor: color
          }}
        >
          <CircleText>{count}</CircleText>
        </Circle>
        <PlastinsTitle>{title}</PlastinsTitle>
      </CircleAndTitleContainer>
      <PlastinsSubtitle>{subtitle}</PlastinsSubtitle>
    </CardContainer>
  )
}
