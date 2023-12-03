import { useEffect, useState } from "react"

// API / React Router
import { useParams } from "react-router-dom"
import { getMovieInformation } from "service/MovieAPI"

// emotion
import { Ul, Li } from "./Cast.styled"

const Cast = () => {

  const [cast,setCast] = useState([])

  const { movieId } = useParams()
  
  useEffect(() => {

    async function fetchAPI() {
      
      try {
        const response = await getMovieInformation(movieId, 'credits')
        setCast([...response.cast])

      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [movieId])

  return (
    <Ul>
      {cast.map(actor => (

        <Li key={actor.cast_id}>
          <img
            src={`${`https://image.tmdb.org/t/p/w300`}${actor.profile_path}`}
            alt={actor.name}
            width="100"
            height="150"
          />
          <h2>{actor.name}</h2>
        </Li>

      ))}
    </Ul>
  )
}

export default Cast