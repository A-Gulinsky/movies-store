import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const Title = styled.h1`
  margin-bottom: 10px;
  margin-left: 15px;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-left: 30px;
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