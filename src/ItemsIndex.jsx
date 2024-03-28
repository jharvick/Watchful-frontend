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
              <div className="card" class="card text-dark bg-secondary mb-3">
                <img className="card-img-top" src={item.image_url} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">Category: {item.category}</p>
                  <p className="card-text">Year: {item.description}</p>
                  <button type="button" class="btn btn-outline-dark" onClick={() => props.onDestroyItem(item)}>
                    Watched
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
