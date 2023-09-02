import React, { useEffect, useState } from 'react';
import getData from '../services/getData';
import { useParams } from 'react-router-dom';
import styles from './Home.module.css'; // Import the CSS module

const ItemDesc = () => {
  const { Id, itemId } = useParams();
  const [dataForId, setDataForId] = useState(null);
  const [Item, setItem] = useState(null);

  const getSpecificData = async () => {
    try {
      const response = await getData.getMovieByGenreId(Id);
      setDataForId(response.data.results);
    } catch (error) {
      console.error('Error fetching specific data:', error);
    }
  };

  useEffect(() => {
    getSpecificData();
  }, [Id]); // Fetch data when Id changes

  useEffect(() => {
    // Check if dataForId and itemId are available before filtering
    if (dataForId && itemId) {
      const filteredItem = dataForId.find((item) => item.id == itemId);
      setItem(filteredItem);
    }
  }, [dataForId, itemId]); // Filter data when dataForId or itemId changes

  console.log(Item)
  return (
    <div>
      {Item && (
        <div>
          <img className={styles.background_image} src={getData.getImagePath(Item.poster_path)} alt={Item.title} />
          <img className={styles.image} src={getData.getImagePath(Item.backdrop_path)} alt={Item.title} />
          <h1>{Item.original_title}</h1>
          <p>{Item.release_date}</p>
          <p>{Item.overview}</p>
          <p>{Item.original_language}</p>


        </div>
      )}
    </div>
  );
};

export default ItemDesc;
