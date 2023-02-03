import { ProductCard } from "../ProductCard";
import { ListProducts } from "./productsList";

export function ProductsList({ products }) {
  return (
    <ListProducts>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
        />
      ))}
    </ListProducts>
  );
}
