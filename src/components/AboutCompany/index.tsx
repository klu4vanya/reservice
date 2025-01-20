import { Container } from '@mui/material'
import React from 'react'
import { AboutContainer, CursiveText, InfoContainer, InfoWrapper, Line, RepairPriveliges, RepairPriveligesContainer, RepairText } from './styles'

import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
// import image4 from '../../../assets/image4.jpg'
// import image5 from '../../../assets/image5.jpg'
// import image6 from '../../../assets/image6.jpg'
import Carousel from 'react-material-ui-carousel';
import Background from '../../assets/background.jpg'
import { url } from 'inspector'
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
        </Container>
    )
}
