import React, { Component } from 'react';

import { Container } from './styles.js';
import Button from './components/Button';
import Display from './components/Display/index.jsx';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }

  clearMemory() {
    console.log('limpar');
  }

  setOperation(n) {
    console.log(n);
  }

  addDigit(n) {
    console.log(n);
  }


  render() {

    return (
      <Container >
        <Display value={100} />
        <Button label='AC' operation click={this.clearMemory}/>
        <Button label='/' click={this.setOperation} />
        <Button label='7' click={this.addDigit} />
        <Button label='8' click={this.addDigit} />
        <Button label='9' click={this.addDigit} />
        <Button label='*' click={this.setOperation}/>
        <Button label='4' click={this.addDigit}/>
        <Button label='5' click={this.addDigit}/>
        <Button label='6' click={this.addDigit}/>
        <Button label='-' click={this.setOperation}/>
        <Button label='1' click={this.addDigit}/>
        <Button label='2' click={this.addDigit}/>
        <Button label='3' click={this.addDigit}/>
        <Button label='+' click={this.setOperation}/>
        <Button label='0' doble click={this.addDigit}/>
        <Button label='.' click={this.addDigit}/>
        <Button label='=' click={this.setOperation}/>
      </Container>
    )
  }
}

export default Calculator;