import styled from "styled-components";
import { StyledContainer, Image, NameRow, ImageName, ExpandedInfo, displayStyle} from "./ImageCard";
import { ImageCardProps } from "./ImageCard";

// extend ImageCardProps then switch on line 11
interface SingleViewProps extends ImageCardProps {

}
const obj = {
  id: '100',
  name: 'Luis Monsanto',
};
// call styledImage Card with the data. Then Call other Props?
export const SinglePersonView = ({data, className}: SingleViewProps): JSX.Element => {
  return (
    <StyledContainer className={className}>
      <Image />
      <NameRow>
        <ImageName>{data.name}</ImageName>
      </NameRow>
      <ExpandedInfo id={data.id} style={displayStyle}>
          <h2>Details</h2>
          <div>
            <span>Date: </span><span>01/01/2022</span>
          </div>
          <div>
            <span>Location: </span><span>NYC</span>
          </div>
          <p>Long explaination about the person.</p>
      </ExpandedInfo>
      <CurrentStatus>
        <h2>Current Status</h2>
        <p>Officer Status</p>
      </CurrentStatus>

      <EventTimeline>
        <h2>Timeline</h2>
        <Event>
          <Date>01/01/22</Date>
          <EventTitle>Latest Update on Case</EventTitle>
          <EventSource>Source</EventSource>
        </Event>
        <Event>
          <Date>01/01/22</Date>
          <EventTitle>Latest Update on Case</EventTitle>
          <EventSource>Source</EventSource>
        </Event>
        <Event>
          <Date>01/01/22</Date>
          <EventTitle>Latest Update on Case</EventTitle>
          <EventSource>Source</EventSource>
        </Event>
      </EventTimeline>

      <LocalContacts>
        <h2>Local Contacts</h2>
        <ContactList>
          <Contact>
            <h4>Police Station Name</h4>
            <span>111-111-1234</span>
            <span>contactemail@domain.com</span>
            <span>contactwebsite.com</span>
            <span>contact mailing address NY NY, 12345</span>
          </Contact>
          <Contact>
            <h4>Police Station Name</h4>
            <span>111-111-1234</span>
            <span>contactemail@domain.com</span>
            <span>contactwebsite.com</span>
            <span>contact mailing address NY NY, 12345</span>
          </Contact>
        </ContactList>
      </LocalContacts>
    </StyledContainer>
  );
}
// Local Contacts
const LocalContacts = styled.section`
display: flex;
flex-direction: column;
gap: 8px;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
  flex-grow: 0;
`;

// Show the Expanded Info.
displayStyle.display = 'flex';

// Current Status
const CurrentStatus = styled.section`
display: flex;
flex-direction: column;
gap: 8px;`;

// Timeline
const EventTimeline = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`;
const Event = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 0px;
  gap: 8px;
`;
const Date = styled.div`
  order: 0;
  flex-grow: 0;
`;
const EventTitle = styled.div`
  order: 1;
  flex-grow: 1;
`;
const EventSource = styled.div`
  order: 2;
  flex-grow: 0;
  font-family: '${props => props.theme.fonts.smallTitle.fontFamily}';
`;


