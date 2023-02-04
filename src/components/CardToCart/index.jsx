import { CardCart } from "./style";

export function CardToCard({ product, removeProductCard }) {
  return (
    <CardCart>
      <div className="product">
        <img src={product.img} />
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
      </div>

      <div className="btn-card-Cart">
        <span>{product.count} Quant.</span>
        <button
          onClick={() => {
            removeProductCard(product);
          }}
        >
          Remover
        </button>
      </div>
    </CardCart>
  );
}
