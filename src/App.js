import { useEffect, useState } from 'react';
import Container from './components/Container';
import productsJson from './products.json'

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      <img src={item.thumbnail} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span>{item.brand}</span>
      <span>{item.price}</span>
    </li>);
}


function App() {
  const [productsList, setProductsList] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProductsList(productsJson)
    const filter = productsList.filter(product => product.category === 'smartphones')
    setFilteredProducts(filter)
  }, [])

  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {
          filteredProducts.map(item => (
            <Item key={item.id} item={item} />
          ))
        }
      </ul>
    </Container>
  );
}
export default App;