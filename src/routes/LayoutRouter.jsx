import { Route, Routes } from "react-router-dom"
import PokeDex from "../pages/PokeDex"
import Layout from "../layout/Layout"
import MyFavorites from "../pages/Favorites"
import Details from "../pages/Details"

export const LayoutRouter = () => {
    return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<PokeDex />} />
          <Route exact path="/favorites" element={<MyFavorites />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </Layout>
    );
  };