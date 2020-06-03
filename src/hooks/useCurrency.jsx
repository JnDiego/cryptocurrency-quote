import React, { Fragment, useState } from 'react';

const useCurrency = (label, initialState, OPTIONS) => {
  // State de nuestro custom hook
  const [state, setState] = useState(initialState);

  const Select = () => (
    <Fragment>
      <label htmlFor="">{label}</label>
      <select name="" id="">
        <option value="">- Select -</option>
        {OPTIONS.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
        ;
      </select>
    </Fragment>
  );

  // Retornar state, interfaz y función que modifica el state
  return [state, Select, setState];
};

export default useCurrency;
