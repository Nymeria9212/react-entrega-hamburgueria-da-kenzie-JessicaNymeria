import { DivSearch, GlobalStyles, Main } from "./styles/global";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/index";
import { api } from "./services/api";
import { ProductsList } from "./components/ProductsList";
import { CartProducts } from "./components/Cart";

function App() {
  const localCart = localStorage.getItem("@Cart");
  const localTotalValue = localStorage.getItem("@totalCart");
  const localTotalItems = localStorage.getItem("@totalItems");
  const [products, setProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState(
    localCart ? JSON.parse(localCart) : []
  );
  const [totalItems, setTotalItems] = useState(
    localTotalItems ? JSON.parse(localTotalItems) : 0
  );
  const [cartTotal, setCartTotal] = useState(
    localTotalValue ? JSON.parse(localTotalValue) : 0
  );

  const [searchValue, setSearchValue] = useState("");

  const search = products.filter((food) => {
    return searchValue === ""
      ? true
      : food.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          food.category.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

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

  useEffect(() => {
    localStorage.setItem("@Cart", JSON.stringify(currentSale));
  }, [currentSale]);

  useEffect(() => {
    localStorage.setItem("@totalCart", JSON.stringify(cartTotal));
  }, [cartTotal]);
  useEffect(() => {
    localStorage.setItem("@totalItems", JSON.stringify(totalItems));
  }, [totalItems]);

  function addProductCart(product) {
    const findCard = currentSale.find((item) => item.id == product.id);
    if (!findCard) {
      const cardCart = { ...product, count: 1 };
      setCurrentSale([...currentSale, cardCart]);

      setCartTotal(cartTotal + product.price);
      setTotalItems(totalItems + 1);
    } else {
      const newFindCard = { ...findCard, count: findCard.count + 1 };
      const index = currentSale.findIndex((item) => item.id == findCard.id);
      const newCurrentSale = currentSale.splice(index, 1, newFindCard);
      setCartTotal(cartTotal + product.price);
      setTotalItems(totalItems + 1);
    }
  }
  function removeProductCard(product) {
    if (product.count > 1) {
      setCartTotal(cartTotal - product.price);
      setTotalItems(totalItems - 1);
      const newFindCard = { ...product, count: product.count - 1 };
      const index = currentSale.findIndex((item) => item.id == product.id);
      currentSale.splice(index, 1, newFindCard);
    } else if (product.count === 1) {
      const filterDelete = currentSale.filter((item) => {
        return item.id != product.id;
      });
      setCurrentSale(filterDelete);
      setCartTotal(cartTotal - product.price);
      setTotalItems(totalItems - 1);
    }
  }
  return (
    <div className="App">
      <GlobalStyles />
      <Header setSearchValue={setSearchValue} />
      {searchValue && (
        <DivSearch>
          <p>Resultados para: {searchValue}</p>
          <button
            onClick={() => {
              setSearchValue("");
            }}
          >
            Limpar Busca
          </button>
        </DivSearch>
      )}
      <Main>
        <ProductsList addProductCart={addProductCart} search={search} />
        <CartProducts
          currentSale={currentSale}
          total={totalItems}
          totalValue={cartTotal}
          setCurrentSale={setCurrentSale}
          setCartTotal={setCartTotal}
          setTotalItems={setTotalItems}
          removeProductCard={removeProductCard}
        ></CartProducts>
      </Main>
    </div>
  );
}

export default App;
