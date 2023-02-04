import CartOff from "../../assets/CartOff.svg";
import { CardToCard } from "../CardToCart";
import { TotalPrice } from "../TotalCart";

import { AsydeCart, CartStyle } from "./cart";

export function CartProducts({
  currentSale,
  total,
  totalValue,
  setCurrentSale,
  setCartTotal,
  setTotalItems,
  removeProductCard,
}) {
  console.log(currentSale);
  return (
    <>
      {currentSale.length == 0 ? (
        <AsydeCart>
          <CartStyle>
            <h2>Carinho de compras</h2>
          </CartStyle>
          <img className="cartOff" src={CartOff} alt="Carrinho vazio" />
        </AsydeCart>
      ) : (
        <AsydeCart>
          <CartStyle>
            <h2>Carinho de compras</h2>
          </CartStyle>
          <ul>
            {currentSale.map((product) => (
              <CardToCard
                key={product.id}
                product={product}
                removeProductCard={removeProductCard}
              />
            ))}
          </ul>
          <TotalPrice
            total={total}
            totalValue={totalValue}
            setCurrentSale={setCurrentSale}
            setCartTotal={setCartTotal}
            setTotalItems={setTotalItems}
          />
        </AsydeCart>
      )}
    </>
  );
}
