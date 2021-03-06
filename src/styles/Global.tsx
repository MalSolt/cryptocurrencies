import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1;
  font-family: 'Roboto', sans-serif;
  border: none;
  outline: none;
}

button {
  cursor: pointer;
}
`
