import { GlobalStyles, Main } from "./styles/global";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/index";
import { api } from "./services/api";
import { ProductsList } from "./components/ProductsList";
import { CartProducts } from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function productsKenzie() {
      try {
        const response = await api.get();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    productsKenzie();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Main>
        <ProductsList products={products} />
        <CartProducts currentSale={currentSale} />
      </Main>
    </div>
  );
}

export default App;
