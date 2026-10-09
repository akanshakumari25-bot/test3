
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";

function App() {
  return (
    <div className="Container"> 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;



