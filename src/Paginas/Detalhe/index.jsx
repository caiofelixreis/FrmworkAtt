import React, { useEffect, useState } from "react";
import banco from "../../banco.json";
import { useParams } from "react-router-dom";
import styles from "./style.module.scss";

const Detalhe = () => {
  const { id } = useParams();
  const [sons, setSons] = useState([]);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    setSons(banco.sons.filter((song) => song.albumId === +id));
    setAlbum(banco.albums.find((album) => album.id === +id));
  }, [id]);

  return (
    <div className={styles.container}>
      {album && sons && (
        <div>
          <header>
            <h1>{album.name}</h1>
            <p>{album.author}</p>
          </header>
          <img src={album.image} alt={album.name} />
          <main>
            <h1>Músicas</h1>
            <ul>
              {sons.map((song) => (
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

export default Detalhe;
