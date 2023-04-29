import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import "./Page.scss"

export function Page({ children }) {

    return (
        <Container>
            <Header/>
            <main>
              <Suspense fallback={<div>...Loading</div>}>
                  <Outlet />
              </Suspense>
              { children }
            </main>
        </Container>
    )
}