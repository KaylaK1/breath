import styled from 'styled-components';
import StyledSiteHeader from './components/HeaderBar';
import { ImageCard, ImageName } from './components/ImageCard';

const App = () => {
  return (
    <Container>
      <StyledSiteHeader className=''/>
      <ImageCard>
        <ImageName>Luis Monsanto</ImageName>
      </ImageCard>
      <ImageCard>
        <ImageName>Luis Monsanto</ImageName>
      </ImageCard>
      <ImageCard>
        <ImageName>Luis Monsanto</ImageName>
      </ImageCard>
      <ImageCard>
        <ImageName>Luis Monsanto</ImageName>
      </ImageCard>
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

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Source+Sans+Pro:wght@300;400;700&display=swap');
  font-family: 'Source Sans Pro';

  flex-basis: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
`;
