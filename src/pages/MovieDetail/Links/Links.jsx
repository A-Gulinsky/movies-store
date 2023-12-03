// emotion
import { Ul, Li, LinkStyled } from "./Links.styled"

export const Links = () => {

  return (
    <Ul>
      <Li>
        <LinkStyled to="cast">Cast</LinkStyled>
      </Li>
      <Li>
        <LinkStyled to="reviews">Reviews</LinkStyled>
      </Li>
    </Ul>
  )
}