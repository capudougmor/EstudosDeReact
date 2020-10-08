import styled from 'styled-components'

export const Container = styled.div`
  height: 320px;
  width: 235px;
  border-radius: 8px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;

`