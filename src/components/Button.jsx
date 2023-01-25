import React from 'react';
import styled from 'styled-components';

const ButtonS = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border: 0;
    border-radius: 20px;
    padding: 15px 10px;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.light};
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        transform: scale(1.05);
        box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
`;

const Button = ({ children, onClick, type="button"}) => {
   return <ButtonS onClick={onClick} type={type}>{children}</ButtonS>
}

Button.prototype = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default Button;