import React from "react";
import styled from  "styled-components";

interface TimelineProps {
    date: string;
    // title: string;
    // eventSource: string;
};
interface TimelineState {
  timelineData: TimelineProps;
};
type MyState = {
  count: number;
}
export default class EventTimeLine extends React.Component<{
  data: TimelineProps[],
  className: string }, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 1,
  };
  componentWillMount() {
    this.setState((state) => ({
      count: 3,
    }));
    console.log(this.props.data);
    console.log('state: ', this.state);
  };

  componentDidMount() {
    this.setState( {
      count: 999
    });
  };
  render() {

    return (
      <EventTimeline>
      <h2>Timeline</h2>
      <Event>
        <Date></Date>
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
    );
  }
}

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
