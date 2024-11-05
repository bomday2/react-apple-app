import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from '../../api/axios';
import { imageBasePath } from "../../components/constant";
import "./DetailPage.css";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      );
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])

  if (!movie) return null;
  return (
    <section className="section__content">
      <img
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt="detail"
        className="detail_img"></img>
      <img
        src={`${imageBasePath}${movie.poster_path}`}
        alt="detail"
        className="detail_img"></img>
      
      <p className="section__details">
        <span>
          100% for you
        </span>{" "}
        {movie.release_date ? movie.release_date : movie.first_air_date}
      </p>
      <h2 className="section__title">
        {movie.title ? movie.title : movie.name}
      </h2>
      <p className="section__overview">평점: {movie.vote_average}</p>
      <p className="section__overview">{movie.overview}</p>



    </section>
  )
}

export default DetailPage