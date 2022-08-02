import React from "react";
import SmallCards from "../SmallCards/SmallCards";
import { InfoContainer , InfoWrapper , InfoH2 , InfoP , InfoRow   } from "./infoElements";
import { smallCard1 , smallCard2 , smallCard3 } from "../SmallCards/Data";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoH2>Our Core Responsibilities</InfoH2>

          <InfoP>
            {" "}
            We apply best practices in the management of debts and other
            financial instruments.
            <br /> Our structure follows international standards and it's
            designed to impose controls and to reduce exposure to risk
          </InfoP>
        </InfoWrapper>

        <InfoRow>
          <SmallCards {...smallCard1}></SmallCards>
          <SmallCards {...smallCard2}></SmallCards>
          <SmallCards {...smallCard3}></SmallCards>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
