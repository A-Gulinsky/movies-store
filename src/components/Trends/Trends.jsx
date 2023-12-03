import { useEffect, useState } from "react"

// API / React router
import { getTrending } from "service/MovieAPI"
import { useLocation } from "react-router-dom"

// emotion
import { Title, Ul, LinkStyled } from "./Trends.styled"

const Trends = () => {

  const [results, setResults] = useState([])
  const location = useLocation()

  useEffect(() => {

    async function fetchAPI() {
      try {
        const response = await getTrending()
        setResults([...response.results])
      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [])

  return (
    <>
      <Title>Trending Today</Title>

      <Ul>
        {results.map(result => (
          <li key={result.id}>
            <LinkStyled to={`/movies/${result.id}`} state={{from: location}}>{result.title}</LinkStyled>
          </li>
        ))}
      </Ul>
    </>
  )
}

export default Trends