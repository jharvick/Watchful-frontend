export function FavoritesIndex(props) {
  return (
    <div>
      <h1>All favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.user_id}</h2>
          <p>{favorite.item_id}</p>
        </div>
      ))}
    </div>
  );
}
