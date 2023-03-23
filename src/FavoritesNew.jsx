export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Favorite</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User id: <input user_id="user_id" type="text" />
        </div>
        <div>
          Item id: <input item_id="item_id" type="text" />
        </div>
        <button type="submit">Add favorite</button>
      </form>
    </div>
  );
}
