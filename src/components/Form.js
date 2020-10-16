import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";
import useCryptoCurrency from "../hooks/useCryptoCurrency";
import axios from 'axios';
import Error from "./Error";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 100px;
  color: #FFF;
  transition: background-color .3s ease;
  
  &:hover{
  background-color: #326AC0 ;
  cursor: pointer;
  }
  
`;

const Form = ({
                  setCurrency,
                  setCryptoCurrency
              }) => {

    const [cryptoList, setCryptoList] = useState([]);
    const [error, setError] = useState(false);

    const CURRENCIES = [{
        code: "USD",
        name: "American Dollar"
    }, {
        code: "EUR",
        name: "Euro"
    }, {
        code: "GBP",
        name: "Sterling Pound"
    }, {
        code: "ARS",
        name: "Peso Argentino"
    }];

    const [currency, SelectCurrency] = useCurrency("Select your currency", "", CURRENCIES);
    const [cryptocurrency, SelectCryptoCurrency] = useCryptoCurrency("Select your cryptocurrency", '', cryptoList);

    useEffect(() => {
        const requestAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const result = await axios.get(url);
            setCryptoList(result.data.Data);
        };
        requestAPI();
    }, []);

    const quoteCurrency = (e) => {
        e.preventDefault();
        if (currency === "" || cryptocurrency === "") {
            setError(true);
            return;
        }

        setError(false);
        setCurrency(currency);
        setCryptoCurrency(cryptocurrency);
    };

    return (
        <form onSubmit={quoteCurrency}>
            {error ? <Error message="All fields are required"/> : null}
            <SelectCurrency/>
            <SelectCryptoCurrency/>
            <Button value="Calculate" type="submit"/>
        </form>
    );
};

Form.propTypes = {};

export default Form;
