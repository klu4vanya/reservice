import { Container } from '@mui/material'
import React from 'react'
import { AboutContainer, CursiveText, InfoContainer, InfoWrapper, Line, RepairPriveliges, RepairPriveligesContainer, RepairText } from './styles'

import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpeg'
import image4 from '../../assets/image4.jpeg'
import image5 from '../../assets/image5.jpeg'
import image6 from '../../assets/image6.jpeg'
import image7 from '../../assets/image7.jpeg'
import image8 from '../../assets/image8.jpeg'
import image9 from '../../assets/image9.jpeg'
import image10 from '../../assets/image10.jpeg'
import Carousel from 'react-material-ui-carousel';
import Background from '../../assets/background.jpg'
import Card from './Card'
interface Image {
    src: string;
}
const images: Image[] = [
    {
        src: image1
    },
    {
        src: image2
    },
    {
        src: image3
    },
    {
        src: image4
    },
    {
        src: image5
    },
    {
        src: image6
    },
    {
        src: image7
    },
    {
        src: image8
    },
    {
        src: image9
    },
    {
        src: image10
    },

]
const card = [
    {
        color: '#51b005',
        subtitle: 'от 700 рублей за пластину',
        title: 'Стоимость',
        count: 1
    },
    {
        color: '#c86017',
        subtitle: 'от 30 до 60 дней',
        title: 'Сроки выполнения',
        count: 2
    },
    {
        color: '#b50600',
        subtitle: 'от 5 штук',
        title: 'Минимальная партия',
        count: 3
    }
]
export default function AboutCompany() {
    return (
        <Container
            sx={{
                backgroundColor: '#f2f2f2',
                height: 'auto'
            }}
        >
            <AboutContainer>
                Восстановление
                твердосплавных пластин –
                выгода и экологичность
            </AboutContainer>
            <CursiveText>
                Дайте инструменту новую жизнь
            </CursiveText>
            <Line />
            <Carousel className="rounded-xl" navButtonsAlwaysVisible
                sx={{ width: 'auto', height: '500px' }}>
                {images.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={item.src}
                            alt={`Slide ${index}`}
                            style={{
                                width: 'auto',
                                height: '100%'
                            }}
                        />
                    </div>
                ))}
            </Carousel>
            <Line />
            <AboutContainer>
                Мы превращаем износ
                в выгоду
            </AboutContainer>
            <InfoContainer>
                <InfoWrapper>
                    до 5 процессов
                    восстановления
                    пластины
                </InfoWrapper>
                <InfoWrapper>
                    до 50% экономии
                    на инструментах
                </InfoWrapper>
            </InfoContainer>
            <Line />
            <InfoContainer
                style={{
                    backgroundImage: `url(${Background})`,
                    height: '600px',
                    alignItems: 'normal',
                    justifyContent: 'normal',
                    display: 'grid'
                }}
            >
                <RepairText>
                    Преимущества восстановления пластин
                </RepairText>
                <RepairPriveligesContainer>
                    <RepairPriveliges>
                        <p>Экономия — <span>до 50% на каждой пластине</span></p>
                        <p>Долговечность — <span>до 5 восстановлений</span> </p>
                        <p>Экологичность — <span>сокращение расходов</span></p>
                        <p>Точность — <span>идеальная геометрия после обработки</span></p>
                    </RepairPriveliges>
                </RepairPriveligesContainer>
            </InfoContainer>
            <Line />
            {card.map((item, index) => (
                <Card
                    key={index}
                    color={item.color}
                    title={item.title}
                    subtitle={item.subtitle}
                    count={item.count}
                />
            ))}
             <AboutContainer>
                Довольные клиенты
            </AboutContainer>
        </Container>
    )
}
