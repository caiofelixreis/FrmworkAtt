import React, { useEffect, useState } from "react";
import database from "../../database.json";
import { useParams } from "react-router-dom";
import styles from "./style.module.scss";

const AlbumDetail = () => {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    setSongs(database.songs.filter((song) => song.albumId === +id));
    setAlbum(database.albums.find((album) => album.id === +id));
  }, [id]);

  return (
    <div className={styles.container}>
      {album && songs && (
        <div>
          <header>
            <h1>{album.name}</h1>
            <p>{album.author}</p>
          </header>
          <img src={album.image} alt={album.name} />
          <main>
            <h1>Músicas</h1>
            <ul>
              {songs.map((song) => (
                <li>
                  <b>{song.name}</b>
                  <b>{song.duration}</b>
                </li>
              ))}
            </ul>
          </main>
        </div>
      )}
    </div>
  );
};

export default AlbumDetail;
