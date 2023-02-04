import { ProductCard } from "../ProductCard";
import { ListProducts } from "./productsList";

export function ProductsList({ search, addProductCart }) {
  return (
    <ListProducts>
      {search.map((product) => (
        <ProductCard
          addProductCart={addProductCart}
          key={product.id}
          product={product}
        />
      ))}
    </ListProducts>
  );
}
