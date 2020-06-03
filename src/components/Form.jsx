import React from 'react';
import styled from '@emotion/styled';

import useCurrency from '../hooks/useCurrency';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  const CURRENCIES = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
  ];

  // Utilizar useCurrency
  const [currency, SelectCurrency] = useCurrency('Select your currency', '', CURRENCIES);

  return (
    <form action="">
      <SelectCurrency />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
