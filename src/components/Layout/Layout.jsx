import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header,Nav,Ul,Li,NavLinkStyled } from "./Layout.styled";

export const Layout = () => {

  return (
    <>
      <Header>
        <Nav>
        <Ul>
          <Li>
            <NavLinkStyled to="/">
              Home
            </NavLinkStyled>
          </Li>
          <Li>
            <NavLinkStyled to="/movies">
              Movies
            </NavLinkStyled>
          </Li>
        </Ul>
      </Nav>
      </Header>

      <main>

        <Suspense>
          <Outlet />
        </Suspense>

      </main>
    </>
  )
}