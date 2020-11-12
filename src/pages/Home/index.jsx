import React from "react";
import { Link } from "react-router-dom";
import { albums } from "../../database.json";
import styles from "./style.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Albums</h1>
      <div className={styles.albums}>
        {albums.map((album) => (
          <Link to={`/${album.id}`}>
            <div className={styles.album}>
              <img src={album.image} alt={album.name} />
              <span>
                <b>{album.name}</b>
                <p>
                  <small>{album.author}</small>
                </p>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
