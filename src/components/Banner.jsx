import React,{useEffect, useState} from 'react'
import axios from '../api/axios'
import requests from '../api/request'
import './Banner.css';
import { styled } from 'styled-components'
import { imageBasePath } from "../components/constant";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [isClicked, setIsClicked] = useState(false)
  useEffect(()=>{
    fetchData()
  }, [])
  const fetchData = async () => {
    const response = await axios.get(requests.fetchTopRated);
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
      ].id
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: "videos"}
    })
    setMovie(movieDetail);
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  }

  if (!movie){
    return (
      <div>
        Loding...
      </div>
    )
  }
  
  if(!isClicked){
    return (
      <div className='banner' 
        style={{
          backgroundImage:`url("${imageBasePath}${movie.backdrop_path}")`,
          backgroundPosition:'top center',
          backgroundSize:'cover'
          }}
        >
        <div className='banner__contents'>
          <h1 className='banner_title'>
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className='banner__buttons'>
            {movie.videos?.results[0]?.key ?
              <button
                className='banner__button play'
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
              : null
            }
          </div>
          <p className='banner_description'>
            {truncate(movie.overview, 100)}
          </p>
        </div>
        <div className='banner--fadeBottom'/>
      </div>
    )
  }else{
    return(
      <>
      <Container>
        <HomeContainer>
          <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?control=0&autoplay=1&mute=1`}/>
        </HomeContainer>
      </Container>
      <button onClick={() => setIsClicked(false)}>X</button>
      </>
    )
  }
}
const Iframe = styled.iframe`
  width:100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border:none;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HomeContainer = styled.div`
  width:100%;
  height: 100%;
`

export default Banner