import { HTMLAttributes } from "react";
import styled, { createGlobalStyle, css, ThemeProvider } from "styled-components";
interface ImageCardProps {
  data: {
    name: string;
  };
  className: string;
}

export const ImageCard = ({data}: ImageCardProps, className: string): JSX.Element => {
  return (
    <div className={className}>

    <Image />
    <NameRow>
      <ImageName>Luis Monsanto</ImageName>
    </NameRow>


    </div>
  );
}
// styled(ImageCard)<ImageCardData>
export const StyledImageCard = styled(ImageCard)<ImageCardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #FBEE1F;
  border-radius: 5px;
`;

const Image = styled.div`
  flex-basis: 100%;
  --ratio: 150/250;
  --container-width: 100%;
  height: calc(100vw * var(--ratio));
  background: url(luis.png);
  background-size: contain;
background-repeat: no-repeat;
background-position: center center;
  /* align-self: stretch;
  flex-grow: 0; */
`;
const NameRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  > * {
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
  };
`;
const ImageName = styled.div`
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 700;
font-size: 1.563rem;
line-height: 30px;
/* color: ${props => props.theme.colors.borderColor}; */
`;
