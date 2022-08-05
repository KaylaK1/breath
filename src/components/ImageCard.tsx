import styled from "styled-components";
interface ImageCardProps {
  data: {
    id: string;
    name: string;
  };
  className: string;
}

export const ImageCard = ({data, className}: ImageCardProps): JSX.Element => {
  return (
    <div className={className}>
      <Image />
      <NameRow>
        <ImageName>{data.name}</ImageName>
        <span onClick={() => toggleInfo(data.id)}>Expand</span>
      </NameRow>
      <ExpandedInfo id={data.id} style={displayStyle} >
          <span>Details</span>
          <div>
            <span>Date: </span><span>01/01/2022</span>
          </div>
          <div>
            <span>Location: </span><span>NYC</span>
          </div>
          <p>Short explaination about the person.</p>
          <span><a href="#">More Info</a></span>
        </ExpandedInfo>
    </div>
  );
}

const displayStyle = {
  display: 'none',
} as const;

const toggleInfo = (id: string): void => {
  const expandedInfo = document.getElementById(`${id}`);
  expandedInfo?.style.display === 'none' ?
  expandedInfo.style.display = 'flex' : expandedInfo!.style.display = 'none';
}

export const ExpandedInfo = styled.div`
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

export const StyledImageCard = styled(ImageCard)<ImageCardProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #FBEE1F;
  border-radius: 5px;
  padding: 8px;
  flex-grow: 1;
`;

export const Image = styled.div`
  min-width: 350px;
  min-height: 200px;
  background: url(luis.png);
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
