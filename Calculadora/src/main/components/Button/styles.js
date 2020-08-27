import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
`;

export const RectButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.4em;
  background-color: ${props => props.operation  ? '#fa8231' : ''};
  color: ${props => props.operation  ? '#fff' : ''};
  border: none;
  border-right: solid 1px #888;
  border-bottom: solid 1px #888;
  
  :active {
    background-color: ${props => props.operation  ? '#fa8231cc' : '#ccc'};   
  }  
  `; 

export const ReButton = styled.div`
${props => props.doble  ? ReButton : ''};
grid-column: span 2;  
`;

