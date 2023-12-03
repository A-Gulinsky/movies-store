import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: #d5cbcb;
  box-shadow: 0px 4px 5px 0px rgba(37, 36, 36, 0.75);
  border-bottom: 1px solid black;
`

export const Nav = styled.nav`
  margin-left: 30px;
`

export const Ul = styled.ul`
  display: flex;
  gap: 25px;
`

export const Li = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
`

export const NavLinkStyled = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 20px;
  color: initial;
  text-decoration: none;

  &:hover {
    color: #0c91d9;
  }

  &.active {
    color: #0476f8;
  }
`