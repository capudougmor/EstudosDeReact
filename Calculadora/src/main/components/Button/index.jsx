import React from 'react';

import { Container, RectButton, Operation, Double, Triple } from './styles.js';

function Button({ operation, label, click, doble } ) {
  return (
    <Container>
        <RectButton 
          onClick={e => click(label)}
          operation={operation}
          doble={doble}
        >
          {label}
        </RectButton>    
    </Container>
  )
}

export default Button;