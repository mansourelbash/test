import React, { useState, useEffect } from 'react';
import getData from '../services/getData';
import styles from './Home.module.css'; // Import the CSS module
import ItemDetails from './ItemDetails'
const Home = () => {
  const [trendingData, setTrendingData] = useState(null);

  const genere= [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
  // Create an async function to fetch trending movies
  const getTrendingMovies = async () => {
    try {
      const response = await getData.getAllData;
      setTrendingData(response.data.results);
    } catch (error) {
      console.error('Error fetching trending data:', error);
    }
  };


  // Call the function within useEffect
  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div className={styles.addMargin}>
      {trendingData && (
        <div className={styles.flex}>
          {trendingData.map((item,index) => (
            <div key={index} >
              <img className={styles.image} src={getData.getImagePath(item.backdrop_path)} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}

      {
         genere.map((item)=>
         (
           <div key={item.id}>
             <h1>{item.name}</h1>
            <ItemDetails Id={item.id}/>
           </div>
         )
         )
      }
    </div>
  );
};

export default Home;
