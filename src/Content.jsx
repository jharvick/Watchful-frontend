import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex";
import { ItemsNew } from "./ItemsNew";
import { ItemsShow } from "./ItemsShow";
import { Modal } from "./Modal";
import { FavoritesIndex } from "./FavoritesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { MoviesIndex } from "./MoviesIndex";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [items, setItems] = useState([]);
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  const handleIndexItems = () => {
    console.log("handleIndexItems");
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/movies.json?search_terms=" + searchTerms).then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const handleCreateItem = (params, successCallback) => {
    console.log("handleCreateItem", params);
    axios.post("http://localhost:3000/items.json", params).then((response) => {
      setItems([...items, response.data]);
      successCallback();
    });
  };

  const handleCreateFavorite = (params, successCallback) => {
    console.log("handleCreateFavorite", params);
    axios.post("http://localhost:3000/favorites.json", params).then((response) => {
      setFavorites([...favorites, response.data]);
      successCallback();
    });
  };

  const handleShowItem = (item) => {
    console.log("handleClose");
    setIsItemsShowVisible(false);
  };

  const handleUpdateItem = (id, params, successCallback) => {
    console.log("handleUpdateItem", params);
    axios.patch("http://localhost:3000/items/${id}.json", params).then((response) => {
      setItems(
        items.map((item) => {
          if (item.id === response.data.id) {
            return response.data;
          } else {
            return item;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsItemsShowVisible(false);
  };

  const handleDestroyItem = (item) => {
    console.log("handleDestroyItem", item);
    axios.delete("http://localhost:3000/items/${item.id}.json").then((response) => {
      setItems(items.filter((p) => p.id !== item.id));
      handleClose();
    });
  };

  useEffect(handleIndexItems, []);
  useEffect(handleIndexFavorites, []);

  return (
    <div>
      <div>
        Search: <input value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} type="text" />
      </div>
      <div className="container">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<MoviesIndex movies={movies} />} />
          <Route path="/items/new" element={<ItemsNew onCreateItem={handleCreateItem} />} />
          <Route path="/favorites/new" element={<FavoritesNew onCreateFavorite={handleCreateFavorite} />} />
          <Route path="/items" element={<ItemsIndex items={items} onShowItem={handleShowItem} />} />
        </Routes>

        <Modal show={isItemsShowVisible} onClose={handleClose}>
          <ItemsShow item={currentItem} onUpdateItem={handleUpdateItem} onDestroyItem={handleDestroyItem} />
        </Modal>
      </div>
    </div>
  );
}
