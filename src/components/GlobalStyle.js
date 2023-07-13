import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: sans-serif;
  line-height: 1.5;
  background-color: #DDDBDB;
  
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}`;
