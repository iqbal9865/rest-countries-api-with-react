import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
const [countries,setCountries] = useState([])
useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=> {
      setCountries(data)
    })
    .catch(error=> console.log(error))
},[])
const [cart,setCart] = useState([])
  const handleAddCountry = (country) => {
      const newCart = [...cart, country]
      setCart(newCart)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Total Countries Info:{countries.length}</h1>
        <h3>Item: {cart.length}</h3>
        <Cart cart={cart}></Cart>
        <ul>
          {
            countries.map(country=><Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
          }
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
