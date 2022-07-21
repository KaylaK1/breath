import styled from 'styled-components';
import StyledSiteHeader from './HeaderBar';
import HeaderBar from './HeaderBar';
import image from './image.jpg';

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
  border: 1px solid black;

  flex-basis: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;

`;
// Image Container
const ImageCard = styled.div`
  display: flex;

  height: 100%;
  flex-basis: 100%;
  width: initial;



  flex: 1;
  align-self: stretch;
  width: auto;
  align-items: flex-end;
  padding: 0 8px;
  border-radius: 5px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 81.26%,
  rgba(0, 0, 0, 0.4) 90.96%),
  url('./image.jpg');
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-position: center;
  background-repeat: no-repeat;
  background-size: initial, cover;
  overflow-y: auto;

`;
const ImageName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

const App = () => {
  return (
    <Container>
      <StyledSiteHeader />
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
