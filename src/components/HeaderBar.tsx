import styled from 'styled-components';

const HeaderBar = ({ className }: { className: string }): JSX.Element => {
  return (
    <div className={className}>
      ICantBreath.org
    </div>
  );
}

const StyledSiteHeader = styled(HeaderBar)`
display: flex;
justify-content: center;
padding: 8px 8px 0px;
gap: 10px;
font-size: 1.953rem;
font-weight: 700;
align-self: stretch;
flex-grow: 0;
`;

export default StyledSiteHeader;
