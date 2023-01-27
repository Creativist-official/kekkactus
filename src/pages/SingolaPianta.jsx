import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Spec from '../components/Spec';
import InfoesCard from '../components/InfoesCard';
import Data from '../components/Data';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.bgLight};
    `;

const FotoPianta = styled.div`
    position: relative;
    & svg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    & img {
        width: 100%;
    }
    `;

const EssentialInfo = styled.div`
    display: flex;
    margin-left: 5%;
    margin-right: 10%;
    `;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    flex-grow: 1;
    `;

const Title = styled.h3`
    font-family: ${props => props.theme.fonts.normal};
    color: ${props => props.theme.colors.gray};
    font-weight: 500;
    font-size: 20px;
    `;

const Name = styled.h2`
    font-family: ${props => props.theme.fonts.normal};
    font-weight: 900;
    font-size: 35px;
    `;

const Eta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.gray};
    font-family: ${props => props.theme.fonts.normal};
    font-weight: 700;
    font-size: 17px;
    `;

const Specs = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 4%;
    `;

const Calendar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 12%;
    border-top: 1px solid ${props => props.theme.colors.gray};
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    `;

const Card = styled.div`
    display: flex;
    `;

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left: 5%;
    width: 90%;
    justify-content: center;
    & h3{
        font-family: ${props => props.theme.fonts.normal};
        font-weight: 900;
        font-size: 20px;
    }
`;

const Datas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 5%;
    
`;

const QeA = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.gray};
    & h3{
        font-family: ${props => props.theme.fonts.normal};
        font-weight: 900;
        font-size: 20px;
        margin-top: 3%;
        margin-bottom: 2%;
        margin-left: 3%;
    }
    & div{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 3%;
        font-weight: 700;
        font-size: 20px;
        margin-right: 5%;
        font-family: ${props => props.theme.fonts.normal};
        text-decoration: underline;
        & p{
            margin-right: 3%;
        }
    }
`;

const SingolaPianta = ({props}) => {
   return   <Container>
                <div>Header che non c'è</div>
                <FotoPianta>
                    <img src="/pianta1.png" alt="Foto pianta" />
                    <svg viewBox="0 0 393 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M109.5 15.5C66 15.5 27.3333 10.8334 0 2.00009V26.5001H392.5C278 -24.4999 160.5 15.5 109.5 15.5Z" fill="#FFEEE4"/>
                    </svg>
                </FotoPianta>

                <EssentialInfo>
                    <TitleContainer>
                        <Title>
                            Cactus
                        </Title>
                        <Name>
                            Pippo
                        </Name>
                    </TitleContainer>
                    <Eta>
                        <Icon width={20} height={20} color="#5CC58C" icon="mdi:leaf" />
                        1.5 anni
                    </Eta>
                </EssentialInfo>
                <Specs>
                    <Spec
                        icon="ph:sun-bold"
                        title="Esposizione alla luce"
                        value="Pieno sole"
                        colors={{bg: '#FCE9B8', icon: '#FFBD00'}}
                    />
                    <Spec
                        icon="material-symbols:garden-cart"
                        title="Terreno"
                        value="Terriccio universale"
                        colors={{bg: '#FFAA7A', icon: '#733619'}}
                    />
                    <Spec
                        icon="material-symbols:nature"
                        title="Ambiente"
                        value="Finestre, balconi, aiuole"
                        colors={{bg: '#E5EDCA', icon: '#24BA38'}}
                    />
                    <Spec
                        icon="mdi:flower"
                        title="Fioritura"
                        value="Inverno - Primavera - Estate"
                        colors={{bg: '#6CB4DA', icon: '#0057FF'}}
                    />
                </Specs>
                <Calendar>
                    <InfoesCard/>
                </Calendar>
                <Stats>
                    <h3>Statistiche</h3>
                    <Datas>
                        <Data
                            icon="mdi:arrow-left-right"
                            value="1 m"
                            what="Altezza"
                            rotate={1}
                        />
                        <Data
                            icon="material-symbols:water-drop"
                            value="10 l"
                            what="Acqua usata"
                            rotate={0}
                        />
                        <Data
                            icon="material-symbols:medical-information"
                            value="0"
                            what="Cure"
                            rotate={0}
                        />
                    </Datas>
                </Stats>
                <QeA>
                    <h3>Pensi che la tua pianta stia male?</h3>
                    <div>
                        <p>
                            Identifica la malattia
                        </p>
                        <Icon width={26} color="#000" icon="material-symbols:arrow-forward-ios-rounded" />
                    </div>
                </QeA>
            </Container>
}

export default SingolaPianta;