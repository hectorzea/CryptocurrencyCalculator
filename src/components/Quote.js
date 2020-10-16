import React from 'react';
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #FFF;
  font-family: Arial, "Helvetica Neue", sans-serif;
  
`;

const Info = styled.p`
  font-size: 18px;
  span{
  font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;
  span{
  font-weight: bold;
  }
`;

const Quote = ({quote}) => {
    if (Object.keys(quote).length === 0) return null;
    return (
        <ResultDiv>
            <Price>The price is <span>{quote.PRICE}</span></Price>
            <Info>The highest price is <span>{quote.HIGHDAY}</span></Info>
            <Info>The lowest price is <span>{quote.LOWDAY}</span></Info>
            <Info>Variation last 24hs <span>{quote.CHANGEPCT24HOUR}</span></Info>
            <Info>Last update <span>{quote.LASTUPDATE}</span></Info>
        </ResultDiv>
    );
};

export default Quote;
