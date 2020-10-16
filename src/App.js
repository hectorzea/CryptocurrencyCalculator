import React, {useState, useEffect} from 'react';
import styled from "@emotion/styled";
import image from './cryptomonedas.png'
import Form from "./components/Form";
import axios from 'axios';
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
font-family: 'Bebas Neue', cursive;
color: #FFF;
text-align: left;
font-weight: 700;
font-size: 50px;
margin-bottom: 50px;
margin-top: 80px;

&::after{
content:'';
width: 100px;
height: 6px;
background-color: #66A2FE;
display: block;
}
`;

function App() {

    const [currency, setCurrency] = useState("");
    const [cryptocurrency, setCryptoCurrency] = useState("");
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const quoteCryptocurrency = async () => {
            //stop exec first time
            if (currency === '') return;
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

            const result = await axios.get(url);

            setLoading(true);

            setTimeout(() => {
                setLoading(false);
            }, 3000);

            setQuote(result.data.DISPLAY[cryptocurrency][currency]);
        };
        quoteCryptocurrency();
    }, [currency, cryptocurrency]);

    const Component = loading ? <Spinner/> : <Quote quote={quote}/>;

    return (
        <Container>
            <div>
                <Image src={image} alt="crypto image"/>
            </div>
            <div>
                <Heading> Quote Cryptocurrency At Real Time !!</Heading>
                <Form setCurrency={setCurrency}
                      setCryptoCurrency={setCryptoCurrency}/>
                {Component}
            </div>
        </Container>
    );
}

export default App;
