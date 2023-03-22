export function ItemsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateItem(props.item.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyItem(props.item);
  };

  return (
    <div>
      <h1>Watch info</h1>
      <p>Name: {props.item.name}</p>
      <p>image_url: {props.item.image_url}</p>
      <p>Description: {props.item.description}</p>
      <p>Category: {props.item.category}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.item.name} name="name" type="text" />
        </div>
        <div>
          image_url: <input defaultValue={props.item.image_url} image_url="image_url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.item.description} description="description" type="text" />
        </div>
        <div>
          Category: <input defaultValue={props.item.category} category="category" type="text" />
        </div>
        <button type="submit">Update watch</button>
      </form>
      <button onClick={handleClick}>Destroy watch</button>
    </div>
  );
}
