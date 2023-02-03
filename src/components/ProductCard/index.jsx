import { ProductLi } from "./productCard";

export function ProductCard({ img, name, price, category }) {
  return (
    <ProductLi>
      <div className="div-img">
        <img src={img} alt={`Foto do ${name}`} />
      </div>
      <div className="div-add">
        <h2>{name}</h2>
        <p>{category}</p>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button>Adicionar</button>
      </div>
    </ProductLi>
  );
}
