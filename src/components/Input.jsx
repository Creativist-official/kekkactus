import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputS = styled.input`
    width: 100%;
    background: ${({ theme }) => theme.colors.light};
    border: 0;
    border-radius: 10px;
    padding: 20px 15px;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & :focus{
        outline: none;
        border: 0;
    }
`;

const Input = ({ placeholder, type }) => {
   return <InputS placeholder={placeholder} type={type} />;
}

Input.prototype = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'password', "number", "date", "color"]).isRequired,
}
export default Input;