import { Route, Routes } from "react-router-dom"
import PokeDex from "../pages/PokeDex"
import Layout from "../layout/Layout"
import MyFavorites from "../pages/Favorites"

export const LayoutRouter = () => {
    return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<PokeDex />} />
          <Route exact path="/favorites" element={<MyFavorites />} />
        </Routes>
      </Layout>
    );
  };