export function CardToCard({ img, category, name }) {
  return (
    <li>
      <img src={img} />
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
      <button>Remover</button>
    </li>
  );
}
