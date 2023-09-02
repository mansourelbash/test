import React,{useState, useEffect} from 'react'
import getData from '../services/getData';
import styles from './Home.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

const ItemDetails = ({Id}) => {
  const [someData, setSomeData] = useState(null);
  const getSomeData = async (genreId) => {
    try {
      const data = await getData.getMovieByGenreId(genreId);
      setSomeData(data.data.results);
    } catch (error) {
      console.error('Error fetching some data:', error);
    }
  };
  useEffect(() => {
    getSomeData(Id);
  }, []);
  console.log(someData)
  return (
    <div className={styles.flex}>
      {someData?.map((item)=>(
        <div key={item.id}>
        <Link to={`/item/${Id}/${item.id}`}>
          <img
            className={styles.image}
            src={getData.getImagePath(item.backdrop_path)}
            alt={item.title}
          />
        </Link>
        <h4>{item.original_title}</h4>
  </div>
))}

    </div>
  )
}

export default ItemDetails