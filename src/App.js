import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(33)

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);


  /* const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  } */

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

/* const products = [
  { name: 'Laptop', price: 53000 },
  { name: 'Phone', price: 63000 },
  { name: 'Watch', price: 5300 },
  { name: 'Tablet', price: 23000 },
]  */

// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
// <Product name="Laptop" price="47000"></Product>
// <Product name="Phone" price="75000"></Product>
// <Product name="Watch" price="3500"></Product>

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
