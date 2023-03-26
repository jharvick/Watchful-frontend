import { useState } from "react";

export function ItemsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>Watchlist</h1>
      Search: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      {props.items
        .filter((item) => item.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((item) => (
          <div key={item.id} className="items">
            <h2>{item.name}</h2>
            <img src={item.image_url} alt="" />
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <button onClick={() => props.onShowItem(item)}>More info</button>
            <button onClick={() => props.onCreateFavorite(favorite)}>Add favorite</button>
          </div>
        ))}
    </div>
  );
}
