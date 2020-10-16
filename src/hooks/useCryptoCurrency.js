import React, {Fragment, useState} from 'react';
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const SelectC = styled.select`
width: 100%;
display: block;
padding: 1rem;
-webkit-appearance: none;
border-radius: 10px;
border: none;
`;

const useCryptoCurrency = (label, initialState, cryptocurrencies) => {

    //state of custom hook

    const [state, updateState] = useState(initialState);

    const SelectCrypto = () => (
        <Fragment>
            <Label htmlFor="">{label}</Label>
            <SelectC value={state} onChange={e => updateState(e.target.value)}>
                <option key="" value=""> ---Select a cryptocurrency---</option>
                {cryptocurrencies.map((opt) => (
                    <option key={opt.CoinInfo.Id} value={opt.CoinInfo.Name}> {opt.CoinInfo.FullName}</option>
                ))}
            </SelectC>
        </Fragment>
    );

    //return the state interface and function that modifies the state
    return [state, SelectCrypto, updateState];

};

export default useCryptoCurrency;
