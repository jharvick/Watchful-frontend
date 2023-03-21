export function ItemsShow(props) {
  return (
    <div>
      <h1>Watch info</h1>
      <p>Name: {props.item.name}</p>
      <p>image_url: {props.item.image_url}</p>
      <p>Description: {props.item.description}</p>
      <p>Category: {props.item.category}</p>
    </div>
  );
}
