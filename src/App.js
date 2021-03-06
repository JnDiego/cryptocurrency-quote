import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form.jsx';
import Quotation from './components/Quotation.jsx';
import Spinner from './components/Spinner.jsx';
import axios from 'axios';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const MainHeader = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const quoteCryptocurrency = async () => {
      // Se evita la ejecución por primera vez
      if (currency === '') return;

      //Consultar la API para obtener cotización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
      const result = await axios.get(url);

      // Mostrar el spinner
      setLoading(true);

      // Ocultar el spinner y mostrar resultado
      setTimeout(() => {
        // Cambiar el estado de loading
        setLoading(false);
        //Guardar cotización
        setResult(result.data.DISPLAY[cryptocurrency][currency]);
      }, 3000);
    };
    quoteCryptocurrency();
  }, [currency, cryptocurrency]);

  // Mostrar spinner o resultado
  const component = loading ? <Spinner /> : <Quotation result={result} />;

  return (
    <Container>
      <div className="">
        <Image src={image} alt="crypto image" />
      </div>
      <div className="">
        <MainHeader>Quote cryptocurrencies instantly</MainHeader>
        <Form setCurrency={setCurrency} setCryptocurrency={setCryptocurrency} />
        {component}
      </div>
    </Container>
  );
}

export default App;
