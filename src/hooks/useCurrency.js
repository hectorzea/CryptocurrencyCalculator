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

const useCurrency = (label, initialState, currencies) => {

    //state of custom hook

    const [state, updateState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <Label htmlFor="">{label}</Label>
            <SelectC value={state} onChange={e => updateState(e.target.value)}>
                <option key="" value=""> ---Select a currency---</option>
                {currencies.map((opt) => (
                    <option key={opt.code} value={opt.code}> {opt.name}</option>
                ))}
            </SelectC>
        </Fragment>
    );

    //return the state interface and function that modifies the state
    return [state, Select, updateState];

};

export default useCurrency;
