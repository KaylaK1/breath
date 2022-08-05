import styled from "styled-components";
import {StyledImageCard, Image, NameRow, ImageName, ExpandedInfo} from "./ImageCard";
import { ImageCardProps } from "./ImageCard";

// extend ImageCardProps then switch on line 11
interface SingleViewProps {
  data: {};
  className: string;
}

const SingleView =({data, className}: ImageCardProps): JSX.Element => {
  return (
    <div className={className}>
      <Image />
      <NameRow>
        <ImageName>{data.name}</ImageName>
      </NameRow>
      <ExpandedInfo id={data.id}>
          <span>Details</span>
          <div>
            <span>Date: </span><span>01/01/2022</span>
          </div>
          <div>
            <span>Location: </span><span>NYC</span>
          </div>
          <p>Long explaination about the person.</p>
        </ExpandedInfo>
    </div>
  );
}

// Current Status

// TimeLine

// Local Contacts
