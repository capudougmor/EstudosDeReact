import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-right: solid 1px #888;
  border-bottom: solid 1px #888;
  grid-column: ${props => props.doble  ? 'span 2' : ''};
  grid-column: ${props => props.triple  ? 'span 3' : ''};
`;

export const RectButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.4em; 
  background-color: ${props => props.operation  ? '#fa8231' : ''};
  color: ${props => props.operation  ? '#fff' : ''};
  border: none;
  
  :active {
    background-color: ${props => props.operation  ? '#fa8231cc' : '#ccc'};   
  }  
`; 

