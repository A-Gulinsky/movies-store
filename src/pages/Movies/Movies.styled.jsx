import styled from "@emotion/styled";

// react router
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding-left: 20px;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-top: 30px;
`

export const LinkStyled = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  
  text-decoration: none;
  color: #363434;

  &:hover {
    color: #5d6f85;
  }

`