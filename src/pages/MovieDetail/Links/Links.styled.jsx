import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  width: 230px;

  margin-top: 20px;
  margin-bottom: 20px;
  
  border: 1px solid black;
  background-color: #cbc0c0;
`

export const Li = styled.li`
  
  &:hover {
    background-color: #dbd4d4;
  }
`

export const LinkStyled = styled(Link)`
  display: block;

  padding: 10px 30px;

  font-size: 18px;
  font-weight: 600;
  color: initial;
  text-decoration: none;

  &:hover {
    color: #0c91d9;
  }

`
