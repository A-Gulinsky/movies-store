import { useEffect, useState } from "react"

// API/ React Router
import { useParams } from "react-router-dom"
import { getMovieInformation } from "service/MovieAPI"

// emotion
import { Ul, Li, B, Span, P } from "./Reviews.styled"

const Reviews = () => {
  
  const [reviews, setReviews] = useState([])
  
  const {movieId} = useParams()

  useEffect(() => {
    async function fetchAPI() {
      
      try {
        const response = await getMovieInformation(movieId, 'reviews')
        setReviews([...response.results])
      } catch (error) {
        
      }

    }

    fetchAPI()
  }, [movieId])

  return (
    <div>

      {reviews.length ? 
          <Ul>
          {reviews.map(review => (
            <Li key={review.id}>
              <B>Author: <Span>{review.author}</Span></B>
              <P>{review.content}</P>
            </Li>
          ))}
          </Ul>
        : 
          <b>No comments found for this movie</b> 
      }
    </div>
  )
}

export default Reviews