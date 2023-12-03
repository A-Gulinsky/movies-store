import { useEffect, useState } from "react"

// api /react router
import { getSearchMovie } from "service/MovieAPI"
import { useLocation, useSearchParams } from "react-router-dom"

// emotion
import { Container, Ul, LinkStyled } from "./Movies.styled"
import { Helmet } from "react-helmet-async"

const Movies = () => {

  const [searchParams,setSearchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  
  const location = useLocation()
  const query = searchParams.get("query") ?? ''

  const handleOnSubmit = e => {
    e.preventDefault()
    
    if (!e.target.elements.input.value) {
      return setSearchParams({})
    }

    setSearchParams({query: e.target.elements.input.value})
  }

  useEffect(() => {

    if (!query) {
      return
    }

    async function fetchAPI() {

      try {
        const response = await getSearchMovie(query)
        setMovies([...response.results])
      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [query])

  return (
    <>
      <Helmet>
        <title>Movies</title>
          <meta name="description" content="Watch the more movies on this service movie"  />
          <meta property="og:url" content="https://movies-store-ten.vercel.app/movies" />
          <meta property="og:title" content="Movies Title" />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="Watch the more movies on this service movie" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image" content="https://img.freepik.com/free-photo/breathtaking-view-of-a-field-full-of-sunflowers-and-the-trees_181624-13341.jpg?w=1060&t=st=1701587412~exp=1701588012~hmac=ed5bd73cdceba46f1cf5413c90f4b5da31298406a79330a1c3bd59aa53c11620" />
      </Helmet>

      <Container>

        <form onSubmit={handleOnSubmit}>
          <input type="text" name="input" />
        
          <button type="submit">Search</button>
        </form>

        <Ul>
          {movies.map(movie => (
            <li key={movie.id}>

              <LinkStyled to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</LinkStyled>
            </li>
          ))}
        </Ul>
      </Container>
    </>
  )
}

export default Movies