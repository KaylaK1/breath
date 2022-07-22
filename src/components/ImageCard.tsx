import styled from "styled-components";

export const ImageCard = styled.div`
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

export const ImageName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  color: white;
  font-size: 24px;
  font-weight: 700;
`;
