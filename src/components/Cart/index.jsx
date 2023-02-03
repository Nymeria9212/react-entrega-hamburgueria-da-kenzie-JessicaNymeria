import CartOff from "../../assets/CartOff.svg";
import { CardToCard } from "../CardToCart";
import { CartStyle } from "./cart";

export function CartProducts({ currentSale }) {
  return (
    <>
      {currentSale.length == 0 ? (
        <div>
          <CartStyle>
            <h2>Carinho de compras</h2>
          </CartStyle>
          <img src={CartOff} alt="Carrinho vazio" />
        </div>
      ) : (
        <div>
          <CartStyle>
            <h2>Carinho de compras</h2>
          </CartStyle>
          <ul>
            {currentSale.map((product) => (
              <CardToCard
                name={product.name}
                category={product.category}
                img={product.img}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
