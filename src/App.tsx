import styled from 'styled-components';
import StyledSiteHeader from './components/HeaderBar';
import { StyledImageCard, ImageCard } from './components/ImageCard';
import sourceSansPro900 from "./fonts/source-sans-pro-v21-latin-900.woff2";
import sourceSansProRegular from "./fonts/source-sans-pro-v21-latin-regular.woff2";
const App = () => {
  const obj = {
    name: 'Luis Monsanto'
  };

  return (
    <Container>
      <StyledSiteHeader className=''/>
      <StyledImageCard data={obj} className='' />
    </Container>
  )
}

export default App;

// Container wraps the contents
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 8px;
  gap: 16px;

  /* position: absolute;
  left: 0px;
  right: 0px;
  top: 0px; */

  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${sourceSansPro900}) format('woff2');
  }
  @font-face {
    font-family: 'Source Sans Pro Regular';
    src: url(${sourceSansProRegular}) format('woff2');
  }
  /* font-family: ${props => props.theme.fonts.mediumTitle.fontFamily}; */



  flex-basis: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  color: ${props => props.theme.colors.textColor};
`;
