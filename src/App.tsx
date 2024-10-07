import { useEffect, useState } from 'react';
import './styles/reset.css';
import { type Product } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setProducts(res.products)
        setLoading(false);
      });
  }, []);

  if(loading) return <>Cargando Productos</>;
  return (
    <>
      <header>Listado de Productos</header>
      <main>
        <ul>
          {
            products.length > 0 && products.map((product: Product) => (
              <li key={product.id}>
                <span>{product.title + " - " + product.price}</span>
                <p>{product.description}</p>
              </li>
            ))
          }
        </ul>
      </main>
      <footer></footer>
    </>
  )
}

export default App
