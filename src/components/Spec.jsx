import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';


const Container = styled.div`
    display: flex;
    flex-basis: 50%;
    margin-bottom: 2%;
    `;

const ImageSpec = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background-color: ${props => props.color};
    `;

const InfoSpecs = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    `;

const TitleSpec = styled.h3`
    font-family: ${props => props.theme.fonts.normal};
    color: ${props => props.theme.colors.dark};
    font-weight: 400;
    font-size: 13px;
    `;

const ValueSpec = styled.p`
    font-family: ${props => props.theme.fonts.normal};
    color: ${props => props.theme.colors.dark};
    font-weight: 800;
    font-size: 13px;
    `;


const Spec = ({icon, title, value, colors}) => {
   return <Container>
            <ImageSpec color={colors.bg}>
                <Icon color={colors.icon} width={24} height={24} icon={icon} />
            </ImageSpec>
            <InfoSpecs>
                <TitleSpec>{title}</TitleSpec>
                <ValueSpec>{value}</ValueSpec>
            </InfoSpecs>
        </Container>
}

Spec.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    colors: PropTypes.shape({
        bg: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
}
export default Spec;