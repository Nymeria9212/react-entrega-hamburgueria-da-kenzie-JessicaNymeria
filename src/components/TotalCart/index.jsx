import { DivTotal } from "./totalCart";

export function TotalPrice({
  total,
  totalValue,
  setCurrentSale,
  setCartTotal,
  setTotalItems,
}) {
  return (
    <DivTotal>
      <div className="items">
        <h2>Quantidade de itens</h2>
        <p>{total}</p>
      </div>
      <div className="price">
        <h2>Preço total</h2>
        <p>
          {totalValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button
        className="btnRemove"
        onClick={() => {
          setCurrentSale([]);
          setCartTotal(0);
          setTotalItems(0);
        }}
      >
        Remover todos
      </button>
    </DivTotal>
  );
}
