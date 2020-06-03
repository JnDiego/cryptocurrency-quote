import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import axios from 'axios';
import Error from './Error';

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
  // State de listado de criptomonedas
  const [listcrypto, setListcrypto] = useState([]);
  const [error, setError] = useState(false);

  const CURRENCIES = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
  ];

  // Utilizar useCurrency
  const [currency, SelectCurrency] = useCurrency('Select your currency', '', CURRENCIES);
  // Utilizar useCryptocurrency
  const [cryptocurrency, SelectCryptocurrency] = useCryptocurrency('Select your cryptocurrency', '', listcrypto);
  // Ejecutar llamado a la API
  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const result = await axios.get(url);
      setListcrypto(result.data.Data);
    };
    fetchAPI();
  }, []);

  // Cuando el usuario hace submit
  const quoteCurrency = (event) => {
    event.preventDefault();
    //Validar si ambos campos están llenos.
    if (currency.trim() === '' || cryptocurrency.trim() === '') {
      setError(true);
      return;
    }
    //Pasar los datos al componente principal
    setError(false);
  };

  return (
    <form action="" onSubmit={quoteCurrency}>
      {error ? <Error message="All fields are required." /> : null}
      <SelectCurrency />
      <SelectCryptocurrency />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
