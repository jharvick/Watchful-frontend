import { useState } from "react";

export function ItemsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>Watchlist</h1>
      <div className="row">
        {props.items
          .filter((item) => item.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((item) => (
            <div key={item.id} className="col-sm-4 mb-4">
              <div className="card">
                <h2 className="card-title">{item.name}</h2>
                <div className="card-body">
                  <img src={item.image_url} className="card-img-top-200" alt="" />
                  <p className="card-text">Description: {item.description}</p>
                  <p className="card-text">Category: {item.category}</p>
                  <button onClick={() => props.onShowItem(item)}>More info</button>
                  <button onClick={() => props.onCreateFavorite(favorite)}>Add favorite</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
