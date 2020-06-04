import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultContainer = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  span {
    font-weight: bold;
  }
`;

const Info = styled.p`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 30px;
`;

const Quotation = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <ResultContainer>
      <Price>
        The price is: <span>{result.PRICE}</span>
      </Price>
      <Info>
        Highest price of the day: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Lowest price of the day: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Variation last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Last update: <span>{result.LASTUPDATE}</span>
      </Info>
    </ResultContainer>
  );
};

Quotation.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Quotation;
