import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const Dato = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    & div{
        font-family: ${props => props.theme.fonts.normal};
        font-weight: 600;
        font-size: 17px;
        & h5{
            font-weight: 600;
            font-size: 20px;
        }
        & p{
            font-weight: 500;
            font-size: 17px;
        }
    }
`;


const Data = ({icon, value, what, rotate}) => {
   return <Dato>
      <Icon width={35} icon={icon} rotate={rotate} />
      <div>
         <h5>{value}</h5>
         <p>{what}</p>
      </div>
   </Dato>
}

Data.propTypes = {
   icon: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   what: PropTypes.string.isRequired,
   rotate: PropTypes.number
}

export default Data;