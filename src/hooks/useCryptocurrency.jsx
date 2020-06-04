import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const SelectComponent = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCryptocurrency = (label, initialState, OPTIONS) => {
  // State de nuestro custom hook
  const [state, setState] = useState(initialState);

  const SelectCryptocurrency = () => (
    <Fragment>
      <Label htmlFor="currency">{label}</Label>
      <SelectComponent name="currency" id="currency" onChange={(event) => setState(event.target.value)} value={state}>
        <option value="">- Select -</option>
        {OPTIONS.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
        ;
      </SelectComponent>
    </Fragment>
  );

  // Retornar state, interfaz y función que modifica el state
  return [state, SelectCryptocurrency, setState];
};

useCryptocurrency.propTypes = {
  label: PropTypes.string,
  initialState: PropTypes.string,
  OPTIONS: PropTypes.string,
};

export default useCryptocurrency;
