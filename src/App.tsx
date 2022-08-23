import styled from 'styled-components';
import StyledSiteHeader from './components/HeaderBar';
import { ImageCard } from './components/ImageCard';
// import { SinglePersonView } from './components/SinglePersonView';
import sourceSansPro900 from "./fonts/source-sans-pro-v21-latin-900.woff2";
import sourceSansProRegular from "./fonts/source-sans-pro-v21-latin-regular.woff2";
import sourceSansPro300 from "./fonts/source-sans-pro-v21-latin-300.woff2";

import TestComponent from './components/TestComponent';
/**
 * Query the data.
 * Retrieve an array of objects
 * Each object has the persons basic info
 * iterate over the array and print out an Image Card for each object.
 * Each Image Card accepts the Single Users information
 * @returns 
 */
const App = () => {
  const obj = [{
    id: 100,
    name: 'Luis Monsanto',
  }];
  const obj2 = [{
    id: 101,
    name: 'Luis Monsanto',
  }, {
    id: 105,
    name: 'John Doe',
  },


];
  const userData = [{
    id: 101,
    name: 'Luis Monsanto',
    location: 'NYC',
  }, {
    id: 105,
    name: 'John Doe',
    location: 'MN',
  }, {
    id: 111,
    name: 'Jane Doe',
    location: 'Philly',
  },
];

  return (
    <Container>
      <StyledSiteHeader className=''/>
       {
         userData.map((user) => (
          <ImageCard key={user.id} data={user} className='' />
         ))
       }
    </Container>
  )
}

export default App;

// Container wraps the contents
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px 8px;
  gap: 16px;

  @font-face {
    font-family: 'Source Sans Pro 900';
    src: url(${sourceSansPro900}) format('woff2');
  }
  @font-face {
    font-family: 'Source Sans Pro Regular';
    src: url(${sourceSansProRegular}) format('woff2');
  }
  @font-face {
    font-family: 'Source Sans Pro 300';
    src: url(${sourceSansPro300}) format('woff2');
  }

  font-family: ${props => props.theme.fonts.bodyText.fontFamily};
  flex-basis: 100%;
  height: 100%;
  flex: 1;
  /* overflow-y: auto; */
  color: ${props => props.theme.colors.textColor};

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    font-family: ${props => props.theme.fonts.smallTitle.fontFamily};
    background-color: ${props => props.theme.colors.borderColor};
  }

  h1, h2,h3, h4 {
    margin: 0 0 0 0;
  }
  h1 {

  }

  h2 {
    font-size: ${props => props.theme.fonts.mediumTitle.fontSize};
  }

  h3 {

  }

  p {
    margin: 0;
  }

`;
