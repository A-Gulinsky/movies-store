import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";

// emotion
import { Container } from "./App/App.styled";

const Home = lazy(() => import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MovieDetail = lazy(() => import('../pages/MovieDetail/MovieDetail'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route> 
          
        </Route>
      </Routes>
    </Container>
  );
};
