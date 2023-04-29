import { StrictMode, lazy }  from 'react';
import ReactDOM from 'react-dom/client';
import { Page } from 'components/Page/Page';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
const MyPokemonsPage = lazy(() => import('./pages/MyPokemonsPage.jsx'));
const PokemonListPage = lazy(() => import('./pages/PokemonListPage.jsx'));




ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/pikachu">
      <Routes>
        <Route path="/" element={<Page />}>
            <Route index path="mypokemons" element={<MyPokemonsPage />} />
            <Route path="pokemonlist" element={<PokemonListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
