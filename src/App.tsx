import styled from 'styled-components';
import StyledSiteHeader from './components/HeaderBar';
import { StyledImageCard, ImageCard } from './components/ImageCard';
import sourceSansPro900 from "./fonts/source-sans-pro-v21-latin-900.woff2";
import sourceSansProRegular from "./fonts/source-sans-pro-v21-latin-regular.woff2";
import sourceSansPro300 from "./fonts/source-sans-pro-v21-latin-300.woff2";

const App = () => {
  const obj = {
    id: '100',
    name: 'Luis Monsanto',
  };
  const obj2 = {
    id: '101',
    name: 'Luis Monsanto',
  };
  const obj3 = {
    id: '102',
    name: 'Luis Monsanto',
  };

  return (
    <Container>
      <StyledSiteHeader className=''/>
      <StyledImageCard data={obj} className='' />
      <StyledImageCard data={obj2} className='' />
      <StyledImageCard data={obj3} className='' />
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

`;
