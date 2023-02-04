import { ProductLi } from "./productCard";

export function ProductCard({ product, addProductCart }) {
  return (
    <ProductLi>
      <div className="div-img">
        <img src={product.img} alt={`Foto do ${product.name}`} />
      </div>
      <div className="div-add">
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => addProductCart(product)}>Adicionar</button>
      </div>
    </ProductLi>
  );
}
