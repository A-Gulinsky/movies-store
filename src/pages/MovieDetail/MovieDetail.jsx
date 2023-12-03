import { Suspense, useRef} from "react"

// React Router
import { useLocation, Outlet } from "react-router-dom"

// components
import { MovieDescription } from "./Description/MovieDescription"
import { Links } from "./Links/Links"

// emotion
import { Container,LinkBack } from "./MovieDetail.styled"

const MovieDetail = () => {

  const location = useLocation()
  const backLocationLink = useRef(location.state?.from ?? '/')

  return (
    <Container>

      <LinkBack to={backLocationLink.current}>Back</LinkBack>
      
      <MovieDescription />
      <Links />

      <Suspense>
        <Outlet />
      </Suspense>

    </Container>
  )
}

export default MovieDetail