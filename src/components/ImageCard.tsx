import { HTMLAttributes } from "react";
import styled, { createGlobalStyle, css, ThemeProvider } from "styled-components";
interface ImageCardProps {
  data: {
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
        <span>expand</span>
      </NameRow>
    </div>
  );
}
// styled(ImageCard)<ImageCardData>
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

const Image = styled.div`
  min-width: 350px;
  min-height: 200px;
  background: url(luis.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
const NameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-of-type(2) {
    font-family: '${props => props.theme.fonts.captionText.fontFamily}';
  }
`;
const ImageName = styled.div`
  line-height: 30px;
  font-family: '${props => props.theme.fonts.largeTitle.fontFamily}';
  font-size: ${props => props.theme.fonts.largeTitle.fontSize};
`;
