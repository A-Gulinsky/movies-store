import styled from "@emotion/styled";

// react router
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding-left: 20px;
`

export const LinkBack = styled(Link)`
  display: block;

  width: 50px;
  padding: 8px 15px;

  color: initial;
  text-decoration: none;
  text-align: center;

  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;

  transition: 250ms ease-in;

  &:hover {
    transform: scale(1.02);
  }
`