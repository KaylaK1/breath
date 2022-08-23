import styled from "styled-components";
import Luis from './luis.png';
//const Luis = './luis.png';

export interface ImageCardProps {
  
  data: {
    id: number;
    name: string;
    location: string;
  }
  className: string;
};

export const ImageCard = ({data, className}: ImageCardProps): JSX.Element => {
  const personId = String(data.id);
  const [name, location] = [ data.name, data.location ];
  
  Image.defaultProps = {
    src: Luis,
  };
  return (
    <StyledContainer className={className}>
      <Image />
      <NameRow>
        <ImageName>{name}</ImageName>
        <span onClick={() => toggleInfo(personId)}>Expand</span>
      </NameRow>
      <ExpandedInfo id={personId} style={displayStyle} >
          <span>Details</span>
          <div>
            <span>Date: </span><span>01/01/2022</span>
          </div>
          <div>
            <span>Location: </span><span>{location}</span>
          </div>
          <p>Short explaination about the person.</p>
          <span><a href="#">More Info</a></span>
        </ExpandedInfo>
    </StyledContainer>
  );
}

export let displayStyle = {
  display: 'none',
};

const toggleInfo = (id: string): void => {
  const expandedInfo = document.getElementById(`${id}`);
  expandedInfo?.style.display === 'none' ?
  expandedInfo.style.display = 'flex' : expandedInfo!.style.display = 'none';
}

export const ExpandedInfo = styled.section`
  display: none;
  flex-direction: column;
  gap: 8px;
  span:nth-of-type(1) {
    font-family: '${props => props.theme.fonts.smallTitle.fontFamily}';
  }
  div {
    flex-direction: row;
   }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #FBEE1F;
  border-radius: 5px;
  padding-top: 8px;
  flex-grow: 1;
`;
/*
Image.defaultProps = {
  src: defaultImg,
};
*/
export const Image = styled.img`
  min-width: 350px;
  min-height: 200px;
  //background: url('${Luis}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const NameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-of-type(2) {
    font-family: '${props => props.theme.fonts.captionText.fontFamily}';
  }
`;
export const ImageName = styled.div`
  line-height: 30px;
  font-family: '${props => props.theme.fonts.largeTitle.fontFamily}';
  font-size: ${props => props.theme.fonts.largeTitle.fontSize};
`;
