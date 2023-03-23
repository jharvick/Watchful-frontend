export function ItemsIndex(props) {
  return (
    <div>
      <h1>All items</h1>
      {props.items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image_url} />
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <button onClick={() => props.onShowItem(item)}>More info</button>
          <button onClick={() => props.onCreateFavorite(favorite)}>Add favorite</button>
        </div>
      ))}
    </div>
  );
}
