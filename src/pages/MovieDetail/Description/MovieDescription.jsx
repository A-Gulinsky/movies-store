import { useState,useRef,useEffect } from "react"

// API / React Router
import { useParams } from "react-router-dom"
import { getMovieDetail } from "service/MovieAPI"

// emotion
import { Ul, DescriptionUl, DescriptionLi, UserScore, GenresUl, GenresName } from "./MovieDescription.styled"

export const MovieDescription = () => {
  
  const [result, setResult] = useState({})
  const genres = useRef([])

  const {movieId} = useParams()

  useEffect(() => {
     
    async function fetchMovieDetail() {
      
      try {

        const response = await getMovieDetail(movieId)
        setResult(response)
        genres.current = response.genres

      } catch (error) {
        console.log(error)
      }
    }

    fetchMovieDetail()

  }, [movieId])

  const { poster_path, title, release_date, vote_average, overview } = result
  
  const img = `${`https://image.tmdb.org/t/p/w300`}${poster_path}`
  const date = release_date && release_date.slice(0,4)
  const score = (Math.floor(vote_average * 10) / 10).toString()

  return (
    <Ul>

      <li>
        <img src={img} alt="poster"/>
      </li>

      <li>
        <DescriptionUl>

          <DescriptionLi>
            <h1>{title}({date})</h1>
          </DescriptionLi>

          <DescriptionLi>
            <p>User Score: <UserScore>{score}</UserScore></p>
          </DescriptionLi>

          <DescriptionLi>
            <b>Overview</b>
            <p>{overview}</p>
          </DescriptionLi>

          <DescriptionLi>
            <b>Genres</b>
            <GenresUl>
              {genres.current.map(({id,name}) => (
                <li key={id}>
                  <GenresName>{name}</GenresName>
                </li>
              ))}
            </GenresUl>
          </DescriptionLi>

        </DescriptionUl>
      </li>
    </Ul>
  )
}