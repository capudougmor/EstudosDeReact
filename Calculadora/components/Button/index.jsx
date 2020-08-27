import React from 'react';

import { Container, RectButton } from './styles.js';

function Button({ operation, label, click, doble, triple } ) {
  return (
    <Container
    doble={doble}
    triple={triple}
    
    >
        <RectButton 
          operation={operation}
          onClick={e => click(label)}
        >
          {label}
        </RectButton>    
    </Container>
  )
}

export default Button;