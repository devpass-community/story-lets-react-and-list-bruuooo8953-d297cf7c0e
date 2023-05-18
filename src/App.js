import { useEffect, useState } from 'react';
import Container from './components/Container';

const Item = ({ item }) => {

  


  return (
    <li className='item' data-testid='product-item'>
      { /* TODO */ }
      <img src={item.thumbnail} alt={item.title}></img>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span>{item.brand}</span>
      <span>{item.price}</span>
    </li>
  )
}

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('products.json')
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  const smartphones = products.filter(product => product.category === 'smartphones')

  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {
          smartphones.map(smartphone => (
            <Item item={smartphone} />
          ))
        }
      </ul>
    </Container>
  );
}

export default App;
