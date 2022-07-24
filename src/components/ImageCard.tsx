import { HTMLAttributes } from "react";
import styled from "styled-components";
// interface ImageCardData extends HTMLAttributes<HTMLHeadingElement> {
//   data: {
//   // personId: number;
//   // imgPath: string;
//   name: string;
//   // date: string;
//   // location: string;
//   // description: string;
//   };
//   as?: keyof JSX.IntrinsicElements // Note the keyof!
// }
interface ImageCardProps {
  data: {
    name: string;
  };

}
// query and pass in only a portion of the details
// description?
// then if the user clicks more info, pass in ImageCardProps
// then query for the full details object?
// export const ImageCard = ({data}: ImageCardData, { className }: { className: string }): JSX.Element => {
//   return (
//     <div className={className}>
//       <ImageName>{data.name}</ImageName>
//     </div>
//   );
// }
export const ImageCard = ({data}: ImageCardProps, { className }: { className: string }): JSX.Element => {
  return (
    <div className={className}>
      <ImageName>{data.name}</ImageName>
    </div>
  );
}
// styled(ImageCard)<ImageCardData>
export const StyledImageCard = styled.div<ImageCardProps>`
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 0px 8px;
gap: 10px;

flex-basis: 100%;
--ratio: 150/250;
--container-width: 100%;
height: calc(100vw * var(--ratio));


background: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0) 85.26%,
  rgba(0, 0, 0, 0.25) 90.96%),
  url(luis.png);
background-size: contain;
background-repeat: no-repeat;
background-position: center center;

filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
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
